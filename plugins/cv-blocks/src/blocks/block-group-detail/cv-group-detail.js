const {
    URLInput,
    BlockControls,
    BlockAlignmentToolbar,
    MediaUpload,
    RichText,
} = wp.editor;

export default ( { attributes, isEdit = false, setAttributes = null } ) => {
    // const { brightness, title, description, url } = attributes;
    const classNames =
		'cv-group-detail' + ( isEdit ? ' cv-group-detail--edit' : '' );
    if ( isEdit ) {
        setTimeout( () => {
            setAttributes( { location: 'mylocation' } );
        }, 1000 );
    }
    return (
        <div className={ classNames }>
            <div>Group Detail</div>
            <p>{ attributes.location }</p>
        </div>
    );
};
