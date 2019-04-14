export default ( { attributes, isEdit = false } ) => {
    const { brightness, title, description, url } = attributes;
    const classNames =
		'cv-stage__layer cv-stage-item' + ( isEdit ? ' cv-stage-edit-item' : '' );
    return (
        <div className={ classNames } key={ title }>
            <div
                className="cv-stage-item__bg"
                data-background-url={ url }
                data-brightness={ brightness }
                style={ {
                    backgroundImage: 'url(' + url + ')',
                    '--brightness': brightness + '%',
                } }
            />
            <div className="cv-stage__overlay" />
            <div className="cv-stage-content">
                <div className="cv-stage-content__title-wrapper">
                    <p className="cv-stage-content__title cv-stage-item__title">
                        { title }
                    </p>
                </div>
                <p className="cv-stage-content__description cv-stage-item__description">
                    { description }
                </p>
            </div>
        </div>
    );
};
