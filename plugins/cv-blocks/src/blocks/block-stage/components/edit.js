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
                    <p>{item.text}</p>
                    <MediaUpload
                        buttonProps={ {
                            className: 'change-image'
                        } }
                        onSelect={ ( img ) => setAttributes(
                            {
                                items: [...items, {...item, url: 'neu'}]
                            }
                        ) }
                        allowed={ [ 'image' ] }
                        type="image"
                        value={ item.url }
                        render={ ( { open } ) => (
                            <Button onClick={ open }>
                                { ! item.url ? 'icons.upload' : null}
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
                                    text: "Das ist ein ELement."
                                },
                                {
                                    text: "Das ist ein ELement2."
                                },
                                {
                                    text: "Das ist ein ELement3."
                                }
                            ]
                        })
                    }
                >
                    Element hinzufügen
                </Button>
                <section className={this.props.className + " cv-stage alignfull"}>
                    <p>{stageItemList}</p>
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
