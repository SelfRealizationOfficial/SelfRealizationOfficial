
(function initBGM() {
    const bgm = document.getElementById("bgm");
    if (!bgm) return;

    bgm.volume = 0.05;


    const tryPlay = () => bgm.play().catch(() => {});

    document.addEventListener("click",    tryPlay, { once: true });
    document.addEventListener("keydown",  tryPlay, { once: true });
    document.addEventListener("touchstart", tryPlay, { once: true });
})();



(function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.12 }
    );

    els.forEach(el => observer.observe(el));
})();



(function initTransitions() {
    const overlay = document.querySelector(".page-transition");
    if (!overlay) return;


    overlay.classList.remove("active");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");

            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("http") ||
                href.startsWith("mailto") ||
                link.getAttribute("target") === "_blank"
            ) return;

            e.preventDefault();
            overlay.classList.add("active");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
})();

