import { useEffect, useState, useCallback } from 'react';
import {
    useBlockProps,
    InspectorControls,
    store as blockEditorStore,
    __experimentalImageSizeControl as ImageSizeControl,
} from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, QueryControls, SelectControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';
import { store as noticeStore } from '@wordpress/notices';
import { useInstanceId } from '@wordpress/compose';
import Card from '../../card/card';
import './editor.scss';

interface LayoutCardGridBlockAttributes {
    // layoutType: 'row' | 'grid';
    categoryId?: number;
    postsToShow?: number;
    thumbnailSizeSlug?: string;
    align?: 'wide' | 'full' | 'center' | 'left' | 'right';
}

interface Category {
    id: number;
    name: string;
    parent: number;
}

const EXCERPT_LENGTH = 16;

function getFeaturedImageDetails(post: any, sizeSlug: string): { url: string; alt: string } | undefined {
    const image = post._embedded?.['wp:featuredmedia']?.[0];
    if (!image) return undefined;

    if (sizeSlug && image.media_details.sizes[sizeSlug] && image.media_details.sizes[sizeSlug].source_url) {
        return {
            url: image.media_details.sizes[sizeSlug].source_url,
            alt: image.alt_text,
        };
    }

    return {
        url:
            image.media_details.sizes.thumbnail?.source_url ??
            image.media_details.sizes.medium?.source_url ??
            image.media_details.sizes.large?.source_url ??
            image.source_url,
        alt: image.alt_text,
    };
}

export default function LayoutCardGridEdit({
    attributes,
    setAttributes,
}: BlockEditProps<LayoutCardGridBlockAttributes>) {
    const {
        postsToShow = 3,
        categoryId,
        thumbnailSizeSlug = 'thumbnail',
        // TODO: Add background color option (checkbox)
    } = attributes;

    const onCategoryChange = (token: string) => {
        const newCategoryId = parseInt(token, 10);
        if (isNaN(newCategoryId)) {
            setAttributes({ categoryId: -1 });
            return;
        }
        setAttributes({ categoryId: newCategoryId });
    };

    const categories = useSelect<any>((select: any) => {
        return select(coreStore).getEntityRecords('taxonomy', 'category');
    }, []);

    const { posts, imageSizes } = useSelect(
        (select: any) => {
            const latestPostsQuery: { [key: string]: unknown } = {
                // order,
                // orderby: orderBy,
                _embed: 'wp:featuredmedia',
            };
            if (categoryId !== undefined) latestPostsQuery.categories = [categoryId];
            if (postsToShow !== undefined) latestPostsQuery.per_page = postsToShow;

            const settings = select(blockEditorStore).getSettings();

            return {
                posts: select(coreStore).getEntityRecords('postType', 'post', latestPostsQuery),
                imageSizes: settings.imageSizes,
            };
        },
        [categoryId, postsToShow]
    );

    const imageSizeOptions = imageSizes
        .filter(({ slug }: { slug: string }) => slug !== 'full')
        .map(({ name, slug }: { name: string; slug: string }) => ({
            value: slug,
            label: name,
        }));

    const blockProps = useBlockProps({
        className: 'ev-region22-blocks-layout-card-grid',
        style: { ['--ev-region22-blocks-layout-card-grid-item-count' as any]: posts ? posts.length : 0 },
    });

    const instanceId = useInstanceId(LayoutCardGridEdit);
    const { createWarningNotice, removeNotice } = useDispatch(noticeStore);

    let noticeId: any;

    const showRedirectionPreventedNotice = useCallback(
        (event) => {
            event.preventDefault();

            // Remove previous warning if any, to show one at a time per block.
            removeNotice(noticeId);

            noticeId = `block-library/core/layout-card-grid/redirection-prevented/${instanceId}`;
            createWarningNotice(__('Links are disabled in the editor.'), {
                id: noticeId,
                type: 'snackbar',
            });
        },
        [noticeId, instanceId]
    );

    return (
        <>
            <InspectorControls>
                <PanelBody title="Inhaltsoptionen">
                    <QueryControls
                        numberOfItems={postsToShow}
                        onNumberOfItemsChange={(numberOfItems) => setAttributes({ postsToShow: numberOfItems })}
                        categoriesList={categories}
                        selectedCategoryId={attributes.categoryId ?? -1}
                        onCategoryChange={onCategoryChange as any}
                    />
                    <SelectControl
                        label="Bildgröße"
                        value={thumbnailSizeSlug}
                        options={imageSizeOptions}
                        onChange={(newSize) => {
                            console.log('newSize', newSize);
                            setAttributes({ thumbnailSizeSlug: newSize });
                        }}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                {posts &&
                    posts.map((post: any) => {
                        let excerpt = post.excerpt.rendered;

                        const needsReadMore =
                            EXCERPT_LENGTH < excerpt.trim().split(' ').length && post.excerpt.raw === '';

                        const postExcerpt = needsReadMore
                            ? excerpt.trim().split(' ', EXCERPT_LENGTH).join(' ') + __(' … ')
                            : excerpt;

                        return (
                            <Card
                                key={post.id}
                                title={post.title.rendered}
                                linkUrl={post.link}
                                image={getFeaturedImageDetails(post, thumbnailSizeSlug)}
                                content={postExcerpt}
                                onClick={showRedirectionPreventedNotice}
                            />
                        );
                    })}
            </div>
        </>
    );
}
