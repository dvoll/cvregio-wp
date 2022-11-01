import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ArrowIcon from '../../card/arrow-icon';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {import("@wordpress/element").WPElement} Element to render.
 */
export default function save({ attributes, className }) {
    const { linkUrl, linkTarget, linkRel, imageUrl, focalPointValueX, focalPointValueY } = attributes;

    const opensInNewTab = linkTarget === '_blank';

    const blockProps = useBlockProps.save({
        className: 'ev-region22-blocks-card-link ev-region22-card',
    });

    const mediaPosition = ({ x, y } = { x: 0.5, y: 0.5 }) => {
        return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
    };

    return (
        <div {...blockProps}>
            {imageUrl && (
                <div className="ev-region22-card__image-container">
                    <img
                        className="ev-region22-card__image"
                        // alt={ alt }
                        src={imageUrl}
                        style={{ objectPosition: mediaPosition({ x: focalPointValueX, y: focalPointValueY }) }}
                    />
                </div>
            )}
            <div className="ev-region22-card__content">
                <div className="ev-region22-card__inner-blocks-wrapper">
                    <InnerBlocks.Content />
                </div>
                {linkUrl && (
                    <a
                        className="ev-region22-card__link"
                        aria-label="Artikel aufrufen"
                        href={linkUrl}
                        target={linkTarget}
                        rel={linkRel}
                    >
                        <ArrowIcon icon={opensInNewTab ? 'external' : 'arrow-right'} />
                    </a>
                )}
            </div>
            <a
                className="ev-region22-card__linkclickarea"
                aria-hidden="true"
                href={linkUrl}
                target={linkTarget}
                rel={linkRel}
            ></a>
        </div>
    );
}
