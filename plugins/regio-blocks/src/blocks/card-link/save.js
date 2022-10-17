import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ArrowIcon from './arrow-icon';

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
    const { linkUrl, linkTarget, imageUrl, focalPointValueX, focalPointValueY } = attributes;

    const blockProps = useBlockProps.save({
        className: 'ev-region22-blocks-card-link',
    });

    const mediaPosition = ({ x, y } = { x: 0.5, y: 0.5 }) => {
        return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
    };

    return (
        <div {...blockProps}>
            {imageUrl && (
                <div className="wp-block-ev-region22-blocks-card-link__image-container">
                    <img
                        className="wp-block-ev-region22-blocks-card-link__image"
                        // alt={ alt }
                        src={imageUrl}
                        style={{ objectPosition: mediaPosition({ x: focalPointValueX, y: focalPointValueY }) }}
                    />
                </div>
            )}
            <div className="wp-block-ev-region22-blocks-card-link__content">
                <div className="wp-block-ev-region22-blocks-card-link__inner-blocks-wrapper">
                    <InnerBlocks.Content />
                </div>
                {linkUrl && (
                    <a
                        className="wp-block-ev-region22-blocks-card-link__link"
                        aria-label="Artikel aufrufen"
                        href={linkUrl}
                    >
                        <ArrowIcon />
                    </a>
                )}
            </div>
            <a className="wp-block-ev-region22-blocks-card-link__linkclickarea" aria-hidden="true" href={linkUrl}></a>
        </div>
    );
}