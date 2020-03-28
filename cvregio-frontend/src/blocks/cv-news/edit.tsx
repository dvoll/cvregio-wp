import { Component, Fragment } from '@wordpress/element';
import { Toolbar, QueryControls, PanelBody, ToolbarButton } from '@wordpress/components';
import { InspectorControls, BlockAlignmentToolbar, BlockControls } from '@wordpress/editor';
import { addQueryArgs } from '@wordpress/url';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import apiFetch, { Schema } from '@wordpress/api-fetch';
import { BlockEditProps } from '@wordpress/blocks';
import News, { NewsItem } from '../../components/news/News';
import { NewsBlockAttributes } from '.';

interface NewsEditBlockProps extends BlockEditProps<NewsBlockAttributes> {
    newsItems?: NewsItem[] | null;
}

interface NewsEditBlockState {
    categoriesList: Array<any>;
}

class NewsEditBlock extends Component<NewsEditBlockProps, NewsEditBlockState> {
    stillMounted = true;

    fetchRequest: Promise<unknown> | undefined = undefined;

    state: NewsEditBlockState = { categoriesList: [] };

    componentDidMount() {
        this.fetchRequest = apiFetch<Array<any>>({
            path: addQueryArgs('/wp/v2/categories', { per_page: -1 }),
        })
            .then(categoriesList => {
                if (this.stillMounted) {
                    this.setState({ categoriesList });
                }
            })
            .catch(() => {
                if (this.stillMounted) {
                    this.setState({ categoriesList: [] });
                }
            });
    }

    componentWillUnmount() {
        this.stillMounted = false;
    }

    render() {
        const { props } = this;
        const { attributes, setAttributes } = props;
        const { layoutType } = attributes;
        const newsItems = props.newsItems || [];

        const { categoriesList } = this.state;

        const layoutControls: ToolbarButton.Props[] = [
            {
                icon: 'grid-view',
                title: 'Übersicht',
                onClick: () => setAttributes({ layoutType: 'grid' }),
                isActive: attributes.layoutType === 'grid',
            },
            {
                icon: 'minus',
                title: 'Einzelne Zeile',
                onClick: () => setAttributes({ layoutType: 'row' }),
                isActive: attributes.layoutType === 'row',
            },
        ];

        return (
            <Fragment>
                <BlockControls>
                    <BlockAlignmentToolbar
                        value={attributes.align}
                        onChange={value => {
                            setAttributes({ align: value });
                        }}
                        controls={['wide', 'full']}
                    />
                    <Toolbar controls={layoutControls} />
                </BlockControls>
                <InspectorControls>
                    <PanelBody title="Inhaltsoptionen">
                        <QueryControls
                            categoriesList={categoriesList}
                            selectedCategoryId={attributes.categories ? +attributes.categories : -1}
                            onCategoryChange={value =>
                                // TODO: Check usage of categories as number. Should it be an array or string?
                                setAttributes({ categories: `${value}` })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                {/* TODO Add alignment attribute value */}
                <section className={`${props.className} alignwide cv-blocks-dynamic-block-preview`}>
                    <News items={newsItems} singleRow={layoutType === 'row'} />
                </section>
            </Fragment>
        );
    }
}

function pickBy(object: any) {
    const obj: any = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in object) {
        if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
            obj[key] = object[key];
        }
    }
    return obj;
}

function trimWords(value: string, wordCount: number) {
    const words = value.split(' ');
    return words.slice(0, wordCount).join(' ');
}

export default compose([
    /**
     * @param {string} props
     */
    withSelect<
        any,
        {
            attributes: BlockEditProps<{}> & {
                order: string;
                categories: any[];
                orderBy: string;
                postsToShow: number;
                offset: number;
                postType: string;
            };
        }
    >((select, props) => {
        const { order, categories } = props.attributes;

        // @ts-ignore
        const { getEntityRecords, getMedia } = select('core');

        const latestPostsQuery = pickBy({
            categories,
            order,
            orderby: props.attributes.orderBy,
            // eslint-disable-next-line @typescript-eslint/camelcase
            per_page: props.attributes.postsToShow,
            offset: props.attributes.offset,
            exclude: [select('core/editor').getCurrentPostId()],
        });

        const latestPosts =
            (getEntityRecords(
                'postType',
                props.attributes.postType || 'post',
                latestPostsQuery
            ) as Schema.BasePost<'edit'>[]) || [];

        const newsItems: NewsItem[] = latestPosts.map(item => {
            let imgSrc: Schema.BaseMedia<'edit'> | undefined;
            if (item.featured_media > 0) {
                try {
                    imgSrc = getMedia(item.featured_media);
                } catch (e) {
                    console.error(`Could not load featured image of post with id ${item.id}.`);
                }
            }

            const excerptDoc = new DOMParser().parseFromString(item.excerpt.rendered, 'text/html');
            let excerpt = excerptDoc.body.textContent || '';
            if (excerpt.split(' ').length > 20) {
                excerpt = `${trimWords(excerpt, 20)}...`;
            }

            const date = new Date(item.date);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const dateFormatted = `${day > 9 ? day : `0${day}`}.${
                month > 9 ? month : `0${month}`
            }.${date.getFullYear()}`;
            return {
                title: item.title.rendered,
                subtitle: `Kategorie${item.categories.toString()} - ${dateFormatted}`,
                imgSrc: imgSrc?.media_details?.sizes?.medium?.source_url,
                content: <p>{excerpt}</p>,
                link: item.link,
            };
        });

        return {
            newsItems,
        };
    }),
])(NewsEditBlock);
