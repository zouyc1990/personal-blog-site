const components = window.BLOG_COMPONENTS || [];
const componentNav = document.querySelector("#component-nav");
const componentArticle = document.querySelector("#component-article");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderArticleBlock(block) {
  if (block.type === "heading") {
    const level = block.level === 2 ? "h2" : "h3";
    return `<${level} class="article-heading">${escapeHtml(block.text)}</${level}>`;
  }

  if (block.type === "quote") {
    return `<blockquote>${escapeHtml(block.text)}</blockquote>`;
  }

  if (block.type === "list") {
    const tag = block.ordered ? "ol" : "ul";
    const items = block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    return `<${tag} class="article-list">${items}</${tag}>`;
  }

  if (block.type === "code") {
    const language = block.language ? `<span>${escapeHtml(block.language)}</span>` : "";
    return `
      <figure class="code-panel">
        <figcaption>${language}</figcaption>
        <pre><code>${escapeHtml(block.text)}</code></pre>
      </figure>
    `;
  }

  return `<p>${escapeHtml(block.text)}</p>`;
}

function renderComponentScheme(component) {
  const schemeText = component.bodyBlocks?.find((block) => block.type === "paragraph" && /落地|方案/.test(block.text))?.text || "";
  const commandsBlock = component.bodyBlocks?.find((block) => block.type === "code");
  const commands = commandsBlock?.text || "";
  const architectureBlock = component.bodyBlocks?.find((block) => block.type === "paragraph" && /架构图|Dockerfile|API Server|Prometheus/.test(block.text));

  return `
    <section class="component-scheme">
      <div class="component-scheme-card">
        <h3>落地方案</h3>
        <p>${escapeHtml(component.sourceFocus || schemeText || "将组件放进标准平台链路，并在发布、监控、权限和回滚上形成闭环。")}</p>
      </div>
      <div class="component-scheme-card">
        <h3>架构图</h3>
        <p>${escapeHtml(architectureBlock?.text || "见正文中的架构分层示意。")}</p>
      </div>
      <div class="component-scheme-card">
        <h3>常用命令</h3>
        <pre><code>${escapeHtml(commands || "根据组件文档执行对应的检查、查看状态、导出配置和排障命令。")}</code></pre>
      </div>
    </section>
  `;
}

function getActiveComponent() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return components.find((component) => component.id === id) || components[0];
}

function renderNav(activeComponent) {
  componentNav.innerHTML = components
    .map(
      (component) => `
        <a class="${component.id === activeComponent.id ? "active" : ""}" href="./component.html?id=${encodeURIComponent(component.id)}">
          <span>${escapeHtml(component.domain)}</span>
          ${escapeHtml(component.title)}
        </a>
      `
    )
    .join("");
}

function renderComponent(component) {
  if (!component) {
    componentArticle.innerHTML = "<p>还没有组件内容。</p>";
    return;
  }

  const [artA, artB, artC] = component.colors;
  document.title = `${component.title} | 永成手记`;
  componentArticle.innerHTML = `
    <div class="component-hero-card" style="--art-a: ${artA}; --art-b: ${artB}; --art-c: ${artC};">
      <span>${escapeHtml(component.domain)}</span>
      <h1>${escapeHtml(component.title)}</h1>
      <p>${escapeHtml(component.summary)}</p>
    </div>
    <div class="component-summary-grid">
      <section>
        <span>本质</span>
        <p>${escapeHtml(component.essence)}</p>
      </section>
      <section>
        <span>典型场景</span>
        <p>${escapeHtml(component.scenarios)}</p>
      </section>
      <section>
        <span>源码重点</span>
        <p>${escapeHtml(component.sourceFocus || "核心路径与关键流程")}</p>
      </section>
    </div>
    ${renderComponentScheme(component)}
    <div class="component-content article-content">
      ${(component.bodyBlocks || []).map(renderArticleBlock).join("")}
    </div>
  `;
}

const activeComponent = getActiveComponent();
renderNav(activeComponent);
renderComponent(activeComponent);
