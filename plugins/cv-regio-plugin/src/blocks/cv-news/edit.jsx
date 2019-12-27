import { Component, Fragment } from '@wordpress/element';
import { Toolbar, QueryControls, PanelBody } from '@wordpress/components';
import { InspectorControls, BlockAlignmentToolbar, BlockControls } from '@wordpress/editor';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

export default class GroupsEditBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { categoriesList: [] };
    }

    componentDidMount() {
        this.stillMounted = true;
        this.fetchRequest = apiFetch({
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

        const { categoriesList } = this.state;

        const layoutControls = [
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
                    // @ts-ignore // TODO: check error
                    <Toolbar controls={layoutControls} />
                </BlockControls>
                <InspectorControls>
                    <PanelBody title="Inhaltsoptionen">
                        <QueryControls
                            categoriesList={categoriesList}
                            selectedCategoryId={attributes.categories}
                            onCategoryChange={value =>
                                // @ts-ignore // TODO: check error
                                setAttributes({ categories: value !== '' ? value : undefined })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <section className={`${props.className} alignfull`}>
                    {/* <InnerBlocks /> */}
                    Beitragsübersicht
                </section>
            </Fragment>
        );
    }
}
