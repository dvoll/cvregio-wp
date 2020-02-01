import { Component, Fragment } from '@wordpress/element';
import { Toolbar, QueryControls, PanelBody } from '@wordpress/components';
import { InspectorControls, BlockAlignmentToolbar, BlockControls } from '@wordpress/editor';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import News from '../../components/news/News';

export default class GroupsEditBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { categoriesList: [] };
    }

    componentDidMount() {
        this.stillMounted = true;
        this.fetchRequest = apiFetch({
            // eslint-disable-next-line @typescript-eslint/camelcase
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

        /**
         * @type {import('../../components/news/News').NewsItem[]} items
         */
        const items = [
            {
                title: 'Jungscharwochenende der Mädchenjungschar',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: '/images/05.jpg',
                content: (
                    <div className="">
                        <p className="">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                        </p>
                    </div>
                ),
            },
            {
                title: 'Dem Regen getrotzt und eine Rekordsumme eingesammelt',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: '/images/01.jpg',
                content: (
                    <p className="">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor.
                    </p>
                ),
            },
            {
                title: 'Unsere neue Website',
                subtitle: 'Allgemein - 22. Juli 2019',
                content: (
                    <div>
                        <p className="">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                        </p>
                    </div>
                ),
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
                    <Toolbar
                        // @ts-ignore
                        controls={layoutControls}
                    />
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
                {/* TODO Add alignment attribute value */}
                <section className={`${props.className} alignfull`}>
                    {/* <InnerBlocks /> */}
                    <News items={items} singleRow />
                </section>
            </Fragment>
        );
    }
}
