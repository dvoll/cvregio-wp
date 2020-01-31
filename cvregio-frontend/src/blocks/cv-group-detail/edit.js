import { TextControl } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

// const { Component, Fragment } = wp.element;

export default class StageEditBlock extends Component {
    render() {
        const { attributes, setAttributes } = this.props;

        // Check the image orientation
        // const isLandscape = attributes.imageCrop === 'inset';

        // Check the post type
        // const isPost = attributes.postType === 'post';

        // if ( ! hasPosts ) {
        return (
            <Fragment>
                {/* <StageItemInspector
                    attributes={ attributes }
                    setAttributes={ setAttributes }
                /> */}
                <div>
                    <TextControl
                        label="Ort"
                        value={attributes.location}
                        onChange={value =>
                            setAttributes({
                                location: value,
                                // locationPreview: value,
                            })
                        }
                    />
                    <TextControl
                        label="Zielgruppe"
                        type="text"
                        value={attributes.target}
                        onChange={value =>
                            setAttributes({
                                target: value,
                            })
                        }
                    />
                    <TextControl
                        label="Zeit"
                        type="text"
                        value={attributes.time}
                        onChange={value =>
                            setAttributes({
                                time: value,
                            })
                        }
                    />
                </div>
            </Fragment>
        );
    }
}
