

(function renderPost() {
    const params  = new URLSearchParams(window.location.search);
    const id      = params.get("id");
    const post    = posts.find(p => p.id === id);

    const titleEl   = document.getElementById("post-title");
    const dateEl    = document.getElementById("post-date");
    const contentEl = document.getElementById("post-content");

    if (!post) {
        if (titleEl)   titleEl.textContent   = "Reflection not found.";
        if (contentEl) contentEl.innerHTML   = "<p>This post does not exist or may have moved.</p>";
        return;
    }

    document.title = `${post.title} | Self Realization`;

    if (titleEl)   titleEl.textContent  = post.title;
    if (dateEl)    dateEl.textContent   = post.date;
    if (contentEl) contentEl.innerHTML  = post.content;
})();
