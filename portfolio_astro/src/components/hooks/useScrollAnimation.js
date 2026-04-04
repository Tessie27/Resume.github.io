// src/components/hooks/useScrollAnimation.js
// In Astro, scroll animation is handled directly in each component's <script> block.
// This utility is kept for reference or if you add any vanilla JS modules that need it.

export function observeElements(elements, options = {}) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '-100px 0px', ...options }
    );

    elements.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
}