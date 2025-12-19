const posts = [
    {
        title: "The Greenery of Sylhet",
        excerpt: "Documenting the tea gardens and the hidden trails of the northeast...",
        date: "Dec 15, 2025",
        link: "#"
    },
    {
        title: "Coding for Good",
        excerpt: "How ZuhaWorld is using open-source tools to track social impact.",
        date: "Dec 10, 2025",
        link: "#"
    }
];

function loadPosts() {
    const container = document.getElementById('blog-posts');
    container.innerHTML = posts.map(post => `
        <div class="blog-card">
            <small>${post.date}</small>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="${post.link}" class="read-more">Read Entry →</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadPosts);
