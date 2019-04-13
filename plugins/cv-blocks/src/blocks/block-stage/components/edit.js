/**
 * External dependencies
 */

// import isUndefined from 'lodash/isUndefined';
// import pickBy from 'lodash/pickBy';
// import moment from 'moment';
// import classnames from 'classnames';
// import Inspector from './inspector';

const { Component, Fragment } = wp.element;

// const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const {
	withSelect,
} = wp.data;

const {
	Placeholder,
	Spinner,
    Toolbar,
    Button,
    Modal
} = wp.components;
const {
	withState
} = wp.compose;

const {
    RichText,
    AlignmentToolbar,
    BlockControls,
    InspectorControls,
    MediaUpload,
} = wp.editor;

export default class StageEditBlock extends Component {
	render() {
		const {
			attributes,
			setAttributes,
			// latestPosts
        } = this.props;
        
        const { items } = attributes;

        // const stageItemList = items.map(item => {
        //     return item.text;
        // });
        const stageItemList = items.map(item => {
            return (
                <div>
                    <div className="cv-stage__layer cv-stage-item">
                        <div className="cv-stage-item__bg" style={{backgroundImage: 'url(' + item.url + ')'}}></div>
                        <div className="cv-stage__overlay"></div>
                        <div className="cv-stage-content">
                            <p className="cv-stage-content__title cv-stage-item__title">{item.title}</p>
                            <p className="cv-stage-content__text cv-stage-item__text">{item.text}</p>
                            <p className="cv-stage-content__url cv-stage-item__url">{item.text + "123"}</p>
                        </div>
                    </div>
                    <MediaUpload
                        buttonProps={ {
                            className: 'change-image'
                        } }
                        onSelect={ ( img ) => {
                            console.log('img', img);
                            const newItems = items.map((filterItem) => {
                                if (item.title === filterItem.title) {
                                    item.url = img.url;
                                }
                                return filterItem;
                            })
                            setAttributes(
                            {
                                items: newItems
                            })
                        }}
                        allowed={ [ 'image' ] }
                        type="image"
                        value={ item.url }
                        render={ ( { open } ) => (
                            <Button onClick={ open }>
                                { ! item.url ? 'Bild auswählen' : null}
                            </Button>
                        ) }
                    >
                    </MediaUpload>
                </div>
            );
        });

		// Check the image orientation
		// const isLandscape = attributes.imageCrop === 'inset';

		// Check the post type
		// const isPost = attributes.postType === 'post';

		// if ( ! hasPosts ) {
        return (
            <Fragment>
                {/* <Inspector
                    { ...{ setAttributes, ...this.props } }
                /> */}
                <Button 
                    isDefault
                    onClick={() =>
                        setAttributes({
                            items: [
                                ...items,
                                {
                                    title: "Zeltlager 2019",
                                    text: "Das ist ein ELement."
                                },
                                {
                                    title: "Zeltlager 2018",
                                    text: "Das ist ein ELement2."
                                },
                                {
                                    title: "Zeltlager 2017",
                                    text: "Das ist ein ELement3."
                                }
                            ]
                        })
                    }
                >
                    Element hinzufügen
                </Button>
                <section className={this.props.className + " cv-stage-edit alignfull"}>
                    {stageItemList}
                    {/* <MyModal></MyModal> */}
                </section>
            </Fragment>
        );
	}
} 

const MyModal = withState( {
    isOpen: false,
} )( ( { isOpen, setState } ) => (
    <div>
        <Button isDefault onClick={ () => setState( { isOpen: true } ) }>Open Modal</Button>
        { isOpen && (
            <Modal
                className="cv-stage-edit__modal"
                title="This is my modal"
                onRequestClose={ () => setState( { isOpen: false } ) }>
                <Button isDefault onClick={ () => setState( { isOpen: false } ) }>
                    My custom close button
                </Button>
                <div style={{width: '100%', height: '50px', background: 'green'}}>

                </div>
            </Modal>
        ) }
    </div>
) );
