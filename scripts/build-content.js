const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const postsDir = path.join(rootDir, "content", "posts");
const outputFile = path.join(rootDir, "posts.generated.js");

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

function markdownToParagraphs(markdown) {
  return markdown
    .split(/\n{2,}/)
    .map((block) => block.replace(/\n/g, " ").trim())
    .filter(Boolean);
}

function estimateReadTime(paragraphs) {
  const textLength = paragraphs.join("").length;
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
      const body = markdownToParagraphs(markdown);
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
        readTime: meta.readTime || estimateReadTime(body),
        excerpt: meta.excerpt,
        quote: meta.quote,
        body,
        colors: (meta.colors || "#0f7b78,#f2b66d,#7f4d64").split(",").map((color) => color.trim())
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

const posts = loadPosts();
const output = `window.BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n`;

fs.writeFileSync(outputFile, output);
console.log(`Built ${posts.length} posts -> ${path.relative(rootDir, outputFile)}`);
