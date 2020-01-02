import { RichText } from '@wordpress/editor';

export default ({ attributes, isEdit = false, setAttributes = null }) => {
    const { brightness, title, description, url } = attributes;
    const classNames = `cv-stage-card${isEdit ? ' cv-stage-edit-item' : ''}`;
    return (
        <div className={classNames}>
            <div
                className="cv-stage-card__bg"
                data-background-url={url}
                data-brightness={brightness}
                style={{
                    backgroundImage: `url(${url})`,
                    // @ts-ignore
                    '--brightness': `${brightness}%`,
                }}
            />
            <div className="cv-stage-card__overlay" />
            <div className="cv-stage-card__body">
                <div className="cv-stage-card__title-wrapper">
                    {!isEdit && (
                        <RichText.Content
                            tagName="h2"
                            className="cv-stage-card__title"
                            style={{
                                // @ts-ignore
                                '--title-font-size-factor': '1',
                            }}
                            value={title}
                        />
                    )}
                    {isEdit && (
                        // if edit use a span to overcome styling issues
                        <RichText
                            tagName="span"
                            placeholder="Stage Überschrift"
                            keepPlaceholderOnFocus
                            formattingControls={[]}
                            value={title}
                            className="cv-stage-card__title"
                            style={{
                                // @ts-ignore
                                '--title-font-size-factor': '1',
                            }}
                            onChange={value =>
                                setAttributes({
                                    title: value === '<br>' ? '' : value,
                                })
                            }
                        />
                    )}
                </div>
                {!isEdit && (
                    <RichText.Content
                        tagName="p"
                        className="cv-stage-card__description"
                        value={description}
                    />
                )}
                {isEdit && (
                    // if edit use a span to overcome styling issues
                    <RichText
                        tagName="span"
                        placeholder="Stage Inhalt (optional)"
                        keepPlaceholderOnFocus
                        // @ts-ignore // TODO: check type error
                        formattingControls={['bold']}
                        value={description}
                        className="cv-stage-card__description"
                        onChange={value => setAttributes({ description: value })}
                    />
                )}
                <div className="cv-stage-card__link">
                    <a v-if="item.link" href="/">
                        {/* { link } */}
                    </a>
                </div>
            </div>
        </div>
    );
};
