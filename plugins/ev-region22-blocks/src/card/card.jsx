import ArrowIcon from './arrow-icon';

/**
 *
 * @param {{
 *  title: string,
 *  content: string,
 *  linkUrl?: string,
 *  image?: {url: string, alt: string}
 *  onClick?: (event: any) => void,
 *  as?: React.ElementType,
 * }}
 * @returns
 */
const Card = ({ title, content, linkUrl = undefined, image = undefined, onClick, as: Tag = 'div' }) => {
    return (
        <Tag
            className="wp-block-ev-region22-blocks-card-link ev-region22-card has-background-background-color has-background"
            style={{ borderRadius: '0.25rem', paddingTop: 0, paddingBottom: '1rem', pointerEvents: 'none' }}
            onClick={onClick}
        >
            {image && image.url && (
                <div className="ev-region22-card__image-container">
                    <img className="ev-region22-card__image" src={image.url} alt={image.alt} />
                </div>
            )}
            <div className="ev-region22-card__content">
                <div className="ev-region22-card__inner-blocks-wrapper">
                    <h3
                        className="has-text-color"
                        style={{
                            color: 'var(--wp--preset--color--primary)',
                            fontSize: '1.5rem',
                            marginTop: 0,
                            marginBottom: '0.5rem',
                        }}
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></h3>

                    <div
                        style={{ fontSize: '1rem', lineHeight: 1.4, marginTop: '0rem', marginBottom: '0rem' }}
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>
                {linkUrl && (
                    <a className="ev-region22-card__link" aria-label="Artikel aufrufen" href={linkUrl}>
                        <ArrowIcon />
                    </a>
                )}
            </div>
            {linkUrl && <a className="ev-region22-card__linkclickarea" aria-hidden="true" href={linkUrl}></a>}
        </Tag>
    );
};

export default Card;
