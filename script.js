const posts = window.BLOG_POSTS || [];
const components = window.BLOG_COMPONENTS || [];

const postGrid = document.querySelector("#post-grid");
const componentGrid = document.querySelector("#component-grid");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const filters = document.querySelectorAll(".filter-pill");
const dialog = document.querySelector("#post-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector(".dialog-close");
const timeline = document.querySelector("#timeline");
const latestRail = document.querySelector("#latest-rail");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const featuredButton = document.querySelector("[data-open-featured]");
const guideFilters = document.querySelectorAll(".guide-filter");

let activeFilter = "全部";

function formatDate(dateString) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(dateString));
}

function postMatches(post, query) {
  const searchable = [
    post.title,
    post.category,
    post.excerpt,
    post.quote,
    post.topThinking,
    post.deepDive,
    post.body.join(" ")
  ].join(" ");
  return searchable.toLowerCase().includes(query.trim().toLowerCase());
}

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
    const level = block.level === 2 ? "h3" : "h4";
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

function renderPosts() {
  const query = searchInput.value;
  const visiblePosts = posts.filter((post) => {
    const categoryMatch = activeFilter === "全部" || post.category === activeFilter;
    return categoryMatch && postMatches(post, query);
  });

  postGrid.innerHTML = visiblePosts
    .map((post, index) => {
      const [artA, artB, artC] = post.colors;
      return `
        <article class="post-card ${index === 0 ? "is-featured" : ""}">
          <div class="post-art" style="--art-a: ${artA}; --art-b: ${artB}; --art-c: ${artC};"></div>
          <div class="post-body">
            <div>
              <div class="post-meta">
                <span>${post.category}</span>
                <span>${formatDate(post.date)}</span>
                <span>${post.readTime}</span>
              </div>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <div class="post-signals">
                <span>顶层：${escapeHtml(post.topThinking || "框架判断")}</span>
                <span>底层：${escapeHtml(post.deepDive || "技术细节")}</span>
              </div>
            </div>
            <button class="read-button" type="button" data-post-id="${post.id}">阅读全文</button>
          </div>
        </article>
      `;
    })
    .join("");

  emptyState.hidden = visiblePosts.length > 0;
}

function renderComponents() {
  if (!componentGrid) return;

  componentGrid.innerHTML = components
    .map((component, index) => {
      const [artA, artB, artC] = component.colors;
      return `
        <article class="component-card ${index === 0 ? "is-featured" : ""}">
          <div class="component-art" style="--art-a: ${artA}; --art-b: ${artB}; --art-c: ${artC};"></div>
          <div class="component-card-body">
            <span>${escapeHtml(component.domain)}</span>
            <h3>${escapeHtml(component.title)}</h3>
            <p>${escapeHtml(component.summary)}</p>
            <ul>
              <li>本质：${escapeHtml(component.essence)}</li>
              <li>场景：${escapeHtml(component.scenarios)}</li>
              <li>源码：${escapeHtml(component.sourceFocus || "核心路径与关键流程")}</li>
            </ul>
            <a class="component-link" href="./component.html?id=${encodeURIComponent(component.id)}">进入组件页</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  timeline.innerHTML = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (post) => `
        <article class="timeline-item">
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <div>
            <h3>${post.title}</h3>
            <p>${post.category} · ${post.excerpt}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderLatestRail() {
  if (!latestRail) return;

  const latestItems = posts.slice(0, 6);
  const items = [...latestItems, ...latestItems];
  latestRail.innerHTML = items
    .map(
      (post) => `
        <article class="latest-rail-item">
          <span>${formatDate(post.date)}</span>
          <h2>${escapeHtml(post.title)}</h2>
          <button class="read-button" type="button" data-post-id="${post.id}">阅读全文</button>
        </article>
      `
    )
    .join("");
}

function openPost(post) {
  const [artA, artB, artC] = post.colors;
  dialogContent.innerHTML = `
    <div class="dialog-hero" style="--art-a: ${artA}; --art-b: ${artB}; --art-c: ${artC};"></div>
    <div class="dialog-body">
      <div class="post-meta">
        <span>${post.category}</span>
        <span>${formatDate(post.date)}</span>
        <span>${post.readTime}</span>
      </div>
      <h2>${post.title}</h2>
      <blockquote>${post.quote}</blockquote>
      <div class="insight-grid">
        <section>
          <span>顶层思维</span>
          <p>${escapeHtml(post.topThinking || "先判断系统目标、约束和取舍。")}</p>
        </section>
        <section>
          <span>深入底层</span>
          <p>${escapeHtml(post.deepDive || "再进入协议、数据结构、源码路径和运行时细节。")}</p>
        </section>
      </div>
      <div class="article-content">
        ${(post.bodyBlocks || []).map(renderArticleBlock).join("")}
      </div>
    </div>
  `;
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closePost() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

function drawAmbientCanvas() {
  const canvas = document.querySelector("#ambient-canvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const points = Array.from({ length: 34 }, (_, index) => {
    const angle = index * 0.92;
    return {
      x: width * (0.08 + ((Math.sin(angle) + 1) / 2) * 0.86),
      y: height * (0.08 + ((Math.cos(angle * 1.7) + 1) / 2) * 0.82),
      r: 1.2 + (index % 5) * 0.35
    };
  });

  ctx.strokeStyle = "rgba(23, 32, 29, 0.055)";
  ctx.lineWidth = 1;
  points.forEach((point, index) => {
    const next = points[(index + 7) % points.length];
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(next.x, next.y);
    ctx.stroke();
  });

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.fillStyle = index % 3 === 0 ? "rgba(222, 100, 73, 0.16)" : "rgba(15, 123, 120, 0.13)";
    ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => filter.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderPosts();
  });
});

guideFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const targetFilter = button.dataset.guideFilter;
    const filterButton = Array.from(filters).find((filter) => filter.dataset.filter === targetFilter);
    if (!filterButton) return;
    filters.forEach((filter) => filter.classList.remove("active"));
    filterButton.classList.add("active");
    activeFilter = targetFilter;
    searchInput.value = "";
    renderPosts();
    postGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

searchInput.addEventListener("input", renderPosts);

postGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-post-id]");
  if (!button) return;
  const post = posts.find((item) => item.id === button.dataset.postId);
  if (post) openPost(post);
});

latestRail?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-post-id]");
  if (!button) return;
  const post = posts.find((item) => item.id === button.dataset.postId);
  if (post) openPost(post);
});

featuredButton.addEventListener("click", () => {
  openPost(posts[0]);
});

dialogClose.addEventListener("click", closePost);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closePost();
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(newsletterForm);
  const email = formData.get("email");
  formMessage.textContent = `${email} 已加入订阅列表。`;
  newsletterForm.reset();
});

window.addEventListener("resize", drawAmbientCanvas);

renderPosts();
renderComponents();
renderTimeline();
renderLatestRail();
drawAmbientCanvas();
