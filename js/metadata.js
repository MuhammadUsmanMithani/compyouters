function addMetaTag(name, content) {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
}

function setMetaTags({ title, description, icon, link }) {
    if (title) {
        document.title = title;
        addMetaTag('og:title', title);
        addMetaTag('twitter:title', title);
    }
    if (description) {
        addMetaTag('description', description);
        addMetaTag('og:description', description);
        addMetaTag('twitter:description', description);
    }
    if (icon) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'icon';
        linkElement.type = 'image/png';
        linkElement.href = icon;
        document.head.appendChild(linkElement);
        addMetaTag('og:image', icon)
        addMetaTag("og:thumbnail", icon);
        addMetaTag("twitter:image", icon);
    }
    if (link) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        linkElement.href = link;
        document.head.appendChild(linkElement);
        addMetaTag('og:url', link);
        addMetaTag('twitter:url', link);
    }
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector("title")?.innerText || 'Default Title';
    const description = document.querySelector('meta[name="description"]')?.content || 'Default Description';
    const icon = document.querySelector('link[rel="icon"]')?.href || 'favicon.png';
    const link = window.location.href;

    setMetaTags({
        title,
        description,
        icon,
        link
    });
});