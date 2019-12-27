/**
 * Inspector Controls
 */

// Setup the block
import { FocalPointPicker, RangeControl, PanelBody, Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { InspectorControls, MediaUpload } from '@wordpress/editor';

// Import Inspector components
console.log(FocalPointPicker);
console.log(RangeControl);

// const MAX_POSTS_COLUMNS = 4;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class StageItemInspector extends Component {
    render() {
        // Setup the attributes
        const { attributes, setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody title="Hintergrund-Einstellungen">
                    <p>
                        <MediaUpload
                            // @ts-ignore // TODO: check type error
                            buttonProps={{
                                className: 'change-image button-default',
                            }}
                            onSelect={img => {
                                setAttributes({
                                    url: img.url,
                                    imgSize: img.filesizeInBytes,
                                });
                            }}
                            allowed={['image']}
                            type="image"
                            value={attributes.url}
                            render={({ open }) => (
                                <Button isDefault onClick={open}>
                                    {!attributes.url ? 'Bild auswählen' : 'Bild ändern'}
                                </Button>
                            )}
                        />
                        {attributes.imgSize > 400000 ? (
                            <p style={{ color: '#c21d1d' }}>Das ausgewählte Bild ist sehr groß.</p>
                        ) : null}
                    </p>
                    {FocalPointPicker !== undefined && attributes.url && (
                        <FocalPointPicker
                            // label={ 'Focal Point Picker' }
                            url={attributes.url}
                            // @ts-ignore // TODO: check not supported parameter
                            dimensions={{
                                width: 400,
                                height: 100,
                            }}
                            value={{
                                x: 0.5,
                                y: 0.5,
                            }}
                            onChange={
                                // eslint-disable-next-line no-console
                                value => console.log('focal point changed', value)
                            }
                        />
                    )}
                    <RangeControl
                        label="Helligkeit des Hintergrundes"
                        value={+attributes.brightness}
                        onChange={value => {
                            setAttributes({ brightness: value });
                        }}
                        min={50}
                        max={100}
                    />
                </PanelBody>
            </InspectorControls>
        );
    }
}
