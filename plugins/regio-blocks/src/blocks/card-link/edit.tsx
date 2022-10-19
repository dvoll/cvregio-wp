import {
    BlockControls,
    BlockIcon,
    InnerBlocks,
    InspectorControls,
    MediaPlaceholder,
    MediaUpload,
    useBlockProps,
    MediaReplaceFlow,
    URLInput,
    URLInputButton,
    __experimentalLinkControl as LinkControl,
    AlignmentToolbar,
    withColors,
} from '@wordpress/block-editor';
import { BlockEditProps, Template } from '@wordpress/blocks';
import { Button, FocalPointPicker, PanelBody, Popover, ToolbarButton } from '@wordpress/components';
import { cover, link, linkOff } from '@wordpress/icons';
import { useCallback } from 'react';
import { useState, useEffect, useRef } from 'react';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import ArrowIcon from './arrow-icon';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

interface CardLinkBlockAttributes {
    imageId?: number;
    imageUrl?: string;
    focalPointValueX: number;
    focalPointValueY: number;
    linkUrl: string;
    linkTarget?: string;
    linkTitle: string;
    linkRel?: string;
}

const NEW_TAB_REL = 'noreferrer noopener';

const edit = ({ attributes, setAttributes, isSelected, style }: any) => {
    const moduleRef = useRef();

    // const bgStyle = { backgroundColor: backgroundColor.color };

    const blockProps = useBlockProps({
        className: 'todo',
        ref: moduleRef,
        style: style,
    });

    const {
        imageId,
        imageUrl,
        focalPointValueX,
        focalPointValueY,
        linkUrl,
        linkTarget,
        linkRel,
    }: CardLinkBlockAttributes = attributes;

    const BLOCKS_TEMPLATE = [
        [
            'core/heading',
            {
                level: 3,
                placeholder: 'Überschrift',
                style: {
                    typography: { fontSize: '1.5rem' },
                    color: { text: 'var(--wp--preset--color--primary)' },
                },
            },
        ] as Template,
        [
            'core/paragraph',
            {
                placeholder: 'Beschreibung',
                style: {
                    typography: { fontSize: '1rem', lineHeight: 1.375 },
                },
            },
        ] as Template,
    ];

    // const onImageSelect = useCallback((value) => {
    //     setAttributes({ imageId: value.id, imageUrl: value.url });
    // }, []);

    const onFocalPointChange = useCallback((value: FocalPointPicker.FocalPoint) => {
        setAttributes({ focalPointValueX: value.x ?? 0.5, focalPointValueY: value.y ?? 0.5 });
    }, []);

    const mediaPosition = ({ x, y } = { x: 0.5, y: 0.5 }) => {
        return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
    };

    const [isEditingURL, setIsEditingURL] = useState(false);
    const isURLSet = !!linkUrl;
    const opensInNewTab = linkTarget === '_blank';

    function startEditing(event: { preventDefault: () => void }) {
        event.preventDefault();
        setIsEditingURL(true);
    }

    function unlink() {
        setAttributes({
            linkUrl: undefined,
            linkTarget: undefined,
            // rel: undefined,
        });
        setIsEditingURL(false);
    }

    useEffect(() => {
        if (!isSelected) {
            setIsEditingURL(false);
        }
    }, [isSelected]);

    function onToggleOpenInNewTab(value: any) {
        const newLinkTarget = value ? '_blank' : undefined;

        let updatedRel = linkRel;
        if (newLinkTarget && !linkRel) {
            updatedRel = NEW_TAB_REL;
        } else if (!newLinkTarget && linkRel === NEW_TAB_REL) {
            updatedRel = undefined;
        }

        setAttributes({
            linkTarget: newLinkTarget,
            linkRel: updatedRel,
        });
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Bild-Einstellungen">
                    {imageUrl && (
                        <FocalPointPicker
                            url={imageUrl}
                            onChange={onFocalPointChange}
                            value={{
                                x: focalPointValueX ?? 0.5,
                                y: focalPointValueY ?? 0.5,
                            }}
                        />
                    )}
                    <MediaUpload
                        onSelect={(img) => {
                            setAttributes({
                                imageId: img.id,
                                imageUrl: img.url,
                            });
                        }}
                        allowedTypes={['image']}
                        value={imageId}
                        render={({ open }) => (
                            <Button isDefault onClick={open}>
                                {!imageId ? 'Bild auswählen' : 'Bild ändern'}
                            </Button>
                        )}
                    />
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar value={'wide'} onChange={() => console.log('LOG')} />
            </BlockControls>
            <BlockControls group="block">
                {!isURLSet && (
                    <ToolbarButton
                        name="link"
                        icon={<BlockIcon icon={link} />}
                        title={__('Link')}
                        // shortcut={ displayShortcut.primary( 'k' ) }
                        onClick={startEditing}
                    />
                )}
                {isURLSet && (
                    <ToolbarButton
                        name="link"
                        icon={<BlockIcon icon={linkOff} />}
                        title={__('Unlink')}
                        // shortcut={ displayShortcut.primaryShift( 'k' ) }
                        onClick={unlink}
                        isActive={true}
                    />
                )}
            </BlockControls>
            {isSelected && (isEditingURL || isURLSet) && (
                <Popover
                    position="bottom center"
                    onClose={() => {
                        setIsEditingURL(false);
                        // richTextRef.current?.focus();
                    }}
                    anchorRef={moduleRef.current}
                    focusOnMount={isEditingURL ? 'firstElement' : false}
                    // __unstableSlotName={ '__unstable-block-tools-after' }
                >
                    <LinkControl
                        className="wp-block-navigation-link__inline-link-input"
                        value={{ url: linkUrl, opensInNewTab }}
                        onChange={({ url: newURL = '', opensInNewTab: newOpensInNewTab }: any) => {
                            console.log('newUrl', newURL);
                            setAttributes({ linkUrl: newURL });

                            if (opensInNewTab !== newOpensInNewTab) {
                                onToggleOpenInNewTab(newOpensInNewTab);
                            }
                        }}
                        onRemove={() => {
                            unlink();
                            // richTextRef.current?.focus();
                        }}
                        forceIsEditingLink={isEditingURL}
                    />
                </Popover>
            )}
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
                        <InnerBlocks template={BLOCKS_TEMPLATE} />
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
            </div>
        </>
    );
};
export default edit;
