import * as React from 'react';
import News, { NewsItem } from '../../src/components/news/News';
import image01 from '../assets/images/01.jpg';
import image02 from '../assets/images/02.jpg';
import image03 from '../assets/images/03.jpg';
import image04 from '../assets/images/04.jpg';

class DevNewsGrid extends React.Component {
    public render() {
        let items: NewsItem[] = [
            {
                title: 'Jungscharwochenende der Mädchenjungschar',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: image01,
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam…
                    </p>
                ),
                link: '/',
            },
            {
                title: 'Dem Regen getrotzt und eine Rekordsumme eingesammelt',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: image02,
                content: (
                    <p>
                        Willkommen bei WordPress. Dies ist dein erster Beitrag. Bearbeite oder
                        lösche ihn und beginne mit dem Schreiben!
                    </p>
                ),
                link: '/',
            },
            {
                title: 'Jungscharwochenende der Mädchenjungschar',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: image03,
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam…
                    </p>
                ),
                link: '/',
            },
            {
                title: 'Dem Regen getrotzt und eine Rekordsumme eingesammelt',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: image04,
                content: (
                    <p>
                        Willkommen bei WordPress. Dies ist dein erster Beitrag. Bearbeite oder
                        lösche ihn und beginne mit dem Schreiben!
                    </p>
                ),
                link: '/',
            },
        ];
        items = items.concat(items.slice(1, 3));
        items = items.concat(items.slice(1, 5));
        return (
            <section className="cv-section alignfull">
                <News items={items} />
            </section>
        );
    }
}

export default DevNewsGrid;
