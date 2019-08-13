const {
    URLInput,
    BlockControls,
    BlockAlignmentToolbar,
    MediaUpload,
    RichText,
} = wp.editor;

export default ( { attributes, setAttributes = null } ) => {
    // const { brightness, title, description, url } = attributes;
    const classNames = 'cv-group-detail cv-group-detail--edit';
    setTimeout( () => {
        setAttributes( { location: 'mylocation' } );
    }, 1000 );
    return (
        <RichText
            tagName="p"
            placeholder={ 'Name' }
            keepPlaceholderOnFocus
            value={ attributes.location }
            className="cv-group-detail-location"
            style={ {
                color: '#000',
            } }
            onChange={ ( value ) => setAttributes( { location: value } ) }
        />
    );
};
