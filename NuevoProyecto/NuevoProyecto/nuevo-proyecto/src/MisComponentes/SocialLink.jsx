
function SocialLink({ texto, url, logo, asListItem = true }) {
    const anchor = (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href={logo}></use>
            </svg>
            {texto}
        </a>
    );

    if (!asListItem) {
        return anchor;
    }

    return <li>{anchor}</li>;
}

export default SocialLink;
