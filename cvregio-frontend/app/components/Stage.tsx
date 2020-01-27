import * as React from 'react';
import '../../src/components/stage-slider/StageSliderElement';

class Stage extends React.Component {
    public render() {
        const items = [
            {
                title: 'Willkommen im CVJM Kirchlengern',
                description:
                    'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt',
                link: 'Zum Artikel',
            },
            {
                title: 'Martinssinger spenden an Lichtblicke',
                description: 'Es gibt im Moment in diese Mannschaft',
            },
            {
                title: 'Willkommen im CVJM Kirchlengern2',
                description: 'Dies ist ein Typoblindtext.',
                link: 'Zur Seite',
            },
            {
                title: 'Martinssinger spenden an Lichtblicke2',
                description: 'Es gibt im Moment in diese Mannschaft',
            },
            {
                title: 'Willkommen',
                description:
                    'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt',
                link: 'Zum Artikel',
            },
            {
                title: 'Martinssinger spenden an Lichtblicke3',
                description: 'Es gibt im Moment in diese Mannschaft',
            },
        ];
        const itemElements = items.map((item, index) => {
            return (
                <div key={`stage-item-${item.title}`} className="cv-stage__item cv-stage-card">
                    <div
                        className="cv-stage-card__bg"
                        data-background-url="./images/05.jpg"
                        style={{ backgroundImage: `url(./images/0${index + 1}.jpg)` }}
                    />
                    <div className="cv-stage-card__overlay" />
                    <div className="cv-stage-card__body">
                        <div className="cv-stage-card__title-wrapper">
                            <p className=" cv-stage-card__title">{item.title}</p>
                        </div>
                        <div className="cv-stage-card__description">{item.description}</div>
                        <div className="cv-stage-card__link">
                            <a v-if="item.link" href="/">
                                {item.link}
                            </a>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <section className="wp-block-cv-blocks-cv-stage alignfull">
                <stage-slider>{itemElements}</stage-slider>
            </section>
        );
    }
}

export default Stage;
