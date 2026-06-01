

(function renderArticles() {
    const container = document.getElementById("posts-container");
    if (!container) return;

    posts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("article-card");

        card.innerHTML = `
            <span class="card-category">Reflection</span>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <small>${post.date}</small>
            <a href="post.html?id=${post.id}">Read More →</a>
        `;

        container.appendChild(card);
    });
})();
