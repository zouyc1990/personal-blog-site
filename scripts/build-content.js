const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const postsDir = path.join(rootDir, "content", "posts");
const componentsDir = path.join(rootDir, "content", "components");
const outputFile = path.join(rootDir, "posts.generated.js");
const componentOutputFile = path.join(rootDir, "components.generated.js");

function slugify(fileName) {
  return path.basename(fileName, path.extname(fileName));
}

function parseFrontmatter(source, fileName) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${fileName} 缺少 frontmatter`);
  }

  const meta = {};
  match[1].split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    meta[key] = rawValue.replace(/^["']|["']$/g, "");
  });

  return { meta, markdown: match[2].trim() };
}

function markdownToBlocks(markdown) {
  const blocks = [];
  const lines = markdown.split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: "code", language, text: code.join("\n") });
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2].trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote = [];
      while (index < lines.length && lines[index].startsWith("> ")) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, "").trim());
        index += 1;
      }
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, "").trim());
        index += 1;
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith("```") &&
      !/^(#{2,4})\s+/.test(lines[index]) &&
      !/^[-*]\s+/.test(lines[index]) &&
      !/^\d+\.\s+/.test(lines[index]) &&
      !lines[index].startsWith("> ")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

function blocksToText(blocks) {
  return blocks
    .map((block) => {
      if (block.items) return block.items.join(" ");
      return block.text || "";
    })
    .join(" ");
}

function estimateReadTime(blocks) {
  const textLength = blocksToText(blocks).length;
  const minutes = Math.max(3, Math.ceil(textLength / 500));
  return `${minutes} min`;
}

function loadPosts() {
  const files = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort();

  return files
    .map((fileName) => {
      const source = fs.readFileSync(path.join(postsDir, fileName), "utf8");
      const { meta, markdown } = parseFrontmatter(source, fileName);
      const bodyBlocks = markdownToBlocks(markdown);
      const requiredFields = ["title", "category", "date", "excerpt", "quote"];

      requiredFields.forEach((field) => {
        if (!meta[field]) {
          throw new Error(`${fileName} 缺少 ${field}`);
        }
      });

      return {
        id: meta.id || slugify(fileName),
        title: meta.title,
        category: meta.category,
        date: meta.date,
        readTime: meta.readTime || estimateReadTime(bodyBlocks),
        excerpt: meta.excerpt,
        quote: meta.quote,
        topThinking: meta.topThinking || "",
        deepDive: meta.deepDive || "",
        body: blocksToText(bodyBlocks).split(/\s+/).filter(Boolean),
        bodyBlocks,
        colors: (meta.colors || "#0f7b78,#f2b66d,#7f4d64").split(",").map((color) => color.trim())
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadComponents() {
  if (!fs.existsSync(componentsDir)) {
    return [];
  }

  const files = fs
    .readdirSync(componentsDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort();

  return files.map((fileName) => {
    const source = fs.readFileSync(path.join(componentsDir, fileName), "utf8");
    const { meta, markdown } = parseFrontmatter(source, fileName);
    const bodyBlocks = markdownToBlocks(markdown);
    const requiredFields = ["title", "domain", "summary", "essence", "scenarios"];

    requiredFields.forEach((field) => {
      if (!meta[field]) {
        throw new Error(`${fileName} 缺少 ${field}`);
      }
    });

    return {
      id: meta.id || slugify(fileName),
      title: meta.title,
      domain: meta.domain,
      summary: meta.summary,
      essence: meta.essence,
      scenarios: meta.scenarios,
      sourceFocus: meta.sourceFocus || "",
      colors: (meta.colors || "#0f7b78,#f2b66d,#7f4d64").split(",").map((color) => color.trim()),
      body: blocksToText(bodyBlocks).split(/\s+/).filter(Boolean),
      bodyBlocks,
      rawMarkdown: markdown
    };
  });
}

const posts = loadPosts();
const output = `window.BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n`;
const components = loadComponents();
const componentOutput = `window.BLOG_COMPONENTS = ${JSON.stringify(components, null, 2)};\n`;

fs.writeFileSync(outputFile, output);
fs.writeFileSync(componentOutputFile, componentOutput);
console.log(`Built ${posts.length} posts -> ${path.relative(rootDir, outputFile)}`);
console.log(`Built ${components.length} components -> ${path.relative(rootDir, componentOutputFile)}`);
