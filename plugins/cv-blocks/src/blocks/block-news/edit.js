/**
 * External dependencies
 */

// import isUndefined from 'lodash/isUndefined';
// import pickBy from 'lodash/pickBy';
// import moment from 'moment';
// import classnames from 'classnames';
// import Inspector from './inspector';

const { Component, Fragment } = wp.element;
const { apiFetch } = wp;
const { addQueryArgs } = wp.url;


// const { __ } = wp.i18n;

// const { decodeEntities } = wp.htmlEntities;

// const { withSelect } = wp.data;

// const { Placeholder, Spinner, Toolbar, Button, Modal } = wp.components;
// const { withState } = wp.compose;

// const { InspectorControls, InnerBlocks } = wp.editor;

const {
    // Placeholder,
    // Spinner,
    Toolbar,
    QueryControls,
    PanelBody,
} = wp.components;

const {
    // RichText,
    // AlignmentToolbar,
    // BlockControls,
    // InspectorControls,
    // MediaUpload,
    InspectorControls,
    BlockAlignmentToolbar,
    BlockControls
} = wp.editor;

export default class GroupsEditBlock extends Component {
    constructor() {
        super(...arguments);
        this.state = { categoriesList: [] };
    }

    componentDidMount() {
        this.stillMounted = true;
        this.fetchRequest = apiFetch({
            path: addQueryArgs('/wp/v2/categories', { per_page: -1 })
        }).then(
            (categoriesList) => {
                if (this.stillMounted) {
                    this.setState({ categoriesList });
                }
            }
        ).catch(
            () => {
                if (this.stillMounted) {
                    this.setState({ categoriesList: [] });
                }
            }
        );
    }

    componentWillUnmount() {
        this.stillMounted = false;
    }

    render() {
        const props = this.props;
        const { attributes, setAttributes } = props;

        const { categoriesList } = this.state;

        const layoutControls = [
            {
                icon: 'grid-view',
                title: 'Übersicht',
                onClick: () => setAttributes({ layoutType: 'grid' }),
                isActive: 'grid' === attributes.layoutType
            },
            {
                icon: 'minus',
                title: 'Einzelne Zeile',
                onClick: () => setAttributes({ layoutType: 'row' }),
                isActive: 'row' === attributes.layoutType
            }
        ];

        return (
            <Fragment>
                <BlockControls>
                    <BlockAlignmentToolbar
                        value={attributes.align}
                        onChange={(value) => {
                            setAttributes({ align: value });
                        }}
                        controls={['wide', 'full']}
                    />
                    <Toolbar controls={layoutControls} />
                </BlockControls>
                <InspectorControls>
                    <PanelBody
                        title={'Inhaltsoptionen'}>
                        <QueryControls
                            categoriesList={categoriesList}
                            selectedCategoryId={attributes.categories}
                            onCategoryChange={(value) => setAttributes({ categories: '' !== value ? value : undefined })}
                        />
                    </PanelBody>
                </InspectorControls>
                <section
                    className={props.className + ' alignfull'}
                >
                    { /* <InnerBlocks /> */}
                    Beitragsübersicht
                </section>
            </Fragment>
        );
    }
}
