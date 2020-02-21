import * as React from 'react';
import '../../src/components/stage-slider/StageSliderElement';
import StageItem from '../../src/components/stage-slider/StageItem';

class DevStage extends React.Component {
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
                <StageItem
                    isEdit={false}
                    attributes={{ ...item, brightness: 80, url: '' }}
                    key={`stage-item-${item.title}`}
                    isSelected={false}
                    setAttributes={null}
                    className=""
                />
            );
        });
        return (
            <section className="wp-block-cv-blocks-cv-stage alignfull">
                <stage-slider>{itemElements}</stage-slider>
            </section>
        );
    }
}

export default DevStage;
