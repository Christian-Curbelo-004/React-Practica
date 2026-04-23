
import SocialLink from "./SocialLink.jsx";


function Social({ withWrapper = true }){
    const links = [
        { texto: "GitHub", url: "https://github.com/vitejs/vite", logo: "/icons.svg#github-icon" },
        { texto: "Discord", url: "https://chat.vite.dev/", logo: "/icons.svg#discord-icon" },
        { texto: "X.com", url: "https://x.com/vite_js", logo: "/icons.svg#x-icon" },
        { texto: "Bluesky", url: "https://bsky.app/profile/vite.dev", logo: "/icons.svg#bluesky-icon" }
    ];

    const content = (
        <ul className="social-panel">
            {links.map((link) => (
                <SocialLink
                key={link.url}
                texto={link.texto}
                url={link.url}
                logo={link.logo}
                />
            ))}
        </ul>
    );

    if (!withWrapper) {
        return content;
    }

    return <div id="social">{content}</div>;
}
export default Social;