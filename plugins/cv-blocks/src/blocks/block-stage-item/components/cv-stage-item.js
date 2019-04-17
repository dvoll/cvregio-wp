export default ( { attributes, isEdit = false } ) => {
    const { brightness, title, description, url } = attributes;
    const classNames = 'cv-stage-card' + ( isEdit ? ' cv-stage-edit-item' : '' );
    return (
        <div className={ classNames } key={ title }>
            <div
                className="cv-stage-card__bg"
                data-background-url={ url }
                data-brightness={ brightness }
                style={ {
                    backgroundImage: 'url(' + url + ')',
                    '--brightness': brightness + '%',
                } }
            />
            <div className="cv-stage-card__overlay" />
            <div className="cv-stage-card__body">
                <div className="cv-stage-card__title-wrapper">
                    <p className=" cv-stage-card__title">{ title }</p>
                </div>
                <div className="cv-stage-card__description">{ description }</div>
                <div className="cv-stage-card__link">
                    <a v-if="item.link" href="/">
                        { /* { link } */ }
                    </a>
                </div>
            </div>
        </div>
    );
};
