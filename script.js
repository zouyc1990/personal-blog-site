const posts = window.BLOG_POSTS || [];

const postGrid = document.querySelector("#post-grid");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const filters = document.querySelectorAll(".filter-pill");
const dialog = document.querySelector("#post-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector(".dialog-close");
const timeline = document.querySelector("#timeline");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const featuredButton = document.querySelector("[data-open-featured]");

let activeFilter = "全部";

function formatDate(dateString) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(dateString));
}

function postMatches(post, query) {
  const searchable = `${post.title} ${post.category} ${post.excerpt} ${post.body.join(" ")}`;
  return searchable.toLowerCase().includes(query.trim().toLowerCase());
}

function renderPosts() {
  const query = searchInput.value;
  const visiblePosts = posts.filter((post) => {
    const categoryMatch = activeFilter === "全部" || post.category === activeFilter;
    return categoryMatch && postMatches(post, query);
  });

  postGrid.innerHTML = visiblePosts
    .map((post) => {
      const [artA, artB, artC] = post.colors;
      return `
        <article class="post-card">
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
            </div>
            <button class="read-button" type="button" data-post-id="${post.id}">阅读全文</button>
          </div>
        </article>
      `;
    })
    .join("");

  emptyState.hidden = visiblePosts.length > 0;
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
      ${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
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

searchInput.addEventListener("input", renderPosts);

postGrid.addEventListener("click", (event) => {
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
renderTimeline();
drawAmbientCanvas();
