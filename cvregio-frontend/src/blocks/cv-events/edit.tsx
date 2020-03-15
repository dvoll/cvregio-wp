import { Component, Fragment } from '@wordpress/element';
import { Toolbar, QueryControls, PanelBody, ToolbarButton } from '@wordpress/components';
import { InspectorControls, BlockAlignmentToolbar, BlockControls } from '@wordpress/editor';
import { addQueryArgs } from '@wordpress/url';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import apiFetch, { Schema } from '@wordpress/api-fetch';
import { BlockEditProps } from '@wordpress/blocks';
import Events, { EventItem } from '../../components/events/Events';
import { EventsBlockAttributes } from '.';

interface EventsEditBlockProps extends BlockEditProps<EventsBlockAttributes> {
    eventItems?: EventItem[] | null;
}

interface EventsEditBlockState {
    categoriesList: Array<any>;
}

class EventsEditBlock extends Component<EventsEditBlockProps, EventsEditBlockState> {
    stillMounted = true;

    fetchRequest: Promise<unknown> | undefined = undefined;

    state: EventsEditBlockState = { categoriesList: [] };

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
        const eventItems = props.eventItems || [];

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
                    Event overview
                    <Events items={eventItems} singleRow={layoutType === 'row'} />
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

export default EventsEditBlock;
