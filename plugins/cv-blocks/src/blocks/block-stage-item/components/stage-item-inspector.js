/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const {
    PanelBody,
    TextareaControl,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
    Button,
    // FocalPointPicker,
} = wp.components;
import { FocalPointPicker } from '@wordpress/components';
console.log( FocalPointPicker );
console.log( RangeControl );

const { MediaUpload } = wp.editor;

// const MAX_POSTS_COLUMNS = 4;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class StageItemInspector extends Component {
    render() {
        // Setup the attributes
        const {
            attributes,
            categoriesList,
            setAttributes,
            latestPosts,
        } = this.props;

        const { order, orderBy } = attributes;

        // Thumbnail options
        const imageCropOptions = [
            // { value: 'landscape', label: __( 'Landscape', 'atomic-blocks' ) },
            // { value: 'square', label: __( 'Square', 'atomic-blocks' ) },
            { value: 'full', label: 'Bild füllt Fläche' },
            { value: 'inlay', label: 'Bild mit Rahmen' },
        ];

        return (
            <InspectorControls>
                { /* <PanelBody title={ 'Media & Text Settings' }> */ }
                { /* { attributes.url && (
                        <ToggleControl
                            label={ __( 'Crop image to fill entire column' ) }
                            checked={ imageFill }
                            onChange={ () =>
                                setAttributes( {
                                    imageFill: ! imageFill,
                                } )
                            }
                        />
                    ) } */ }
                { /* { FocalPointPicker !== undefined && attributes.url && (
                        <FocalPointPicker
                            // label={ 'Focal Point Picker' }
                            url={ attributes.url }
                            dimensions={ {
                                width: 400,
                                height: 100,
                            } }
                            value={ {
                                x: 0.5,
                                y: 0.5,
                            } }
                            onChange={
                                // eslint-disable-next-line no-console
                                value =>
                                    console.log( 'focal point changed', value )
                            }
                        />
                    ) } */ }
                { /* { mediaType === 'image' && (
                        <TextareaControl
                            label={ __( 'Alt Text (Alternative Text)' ) }
                            value={ mediaAlt }
                            onChange={ onMediaAltChange }
                            help={
                                <Fragment>
                                    <ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
                                        { __(
                                            'Describe the purpose of the image'
                                        ) }
                                    </ExternalLink>
                                    { __(
                                        'Leave empty if the image is purely decorative.'
                                    ) }
                                </Fragment>
                            }
                        />
                    ) } */ }
                { /* </PanelBody> */ }
                <PanelBody title={ 'Hintergrund-Einstellungen' }>
                    { /* <SelectControl
                        label={ 'Hintergrundbild' }
                        options={ imageCropOptions }
                        value={ 'full' }
                        onChange={ value =>
                        // this.props.setAttributes( { imageCrop: value } )
                            console.log( 'changed', value )
                        }
                    /> */ }
                    <p>
                        <MediaUpload
                            buttonProps={ {
                                className: 'change-image button-default',
                            } }
                            onSelect={ img => {
                                setAttributes( {
                                    url: img.url,
                                    imgSize: img.filesizeInBytes,
                                } );
                            } }
                            allowed={ [ 'image' ] }
                            type="image"
                            value={ attributes.url }
                            render={ ( { open } ) => (
                                <Button isDefault onClick={ open }>
                                    { ! attributes.url ?
                                        'Bild auswählen' :
                                        'Bild ändern' }
                                </Button>
                            ) }
                        />
                        { attributes.imgSize > 400000 ? (
                            <p style={ { color: '#c21d1d' } }>
								Das ausgewählte Bild ist sehr groß.
                            </p>
                        ) : null }
                    </p>
                    { FocalPointPicker !== undefined && attributes.url && (
                        <FocalPointPicker
                            // label={ 'Focal Point Picker' }
                            url={ attributes.url }
                            dimensions={ {
                                width: 400,
                                height: 100,
                            } }
                            value={ {
                                x: 0.5,
                                y: 0.5,
                            } }
                            onChange={
                                // eslint-disable-next-line no-console
                                value =>
                                    console.log( 'focal point changed', value )
                            }
                        />
                    ) }
                    <RangeControl
                        label={ 'Helligkeit des Hintergrundes' }
                        value={ +attributes.brightness }
                        onChange={ value => {
                            setAttributes( { brightness: value } );
                        } }
                        min={ 50 }
                        max={ 100 }
                    />
                </PanelBody>
            </InspectorControls>
        );
    }
}
