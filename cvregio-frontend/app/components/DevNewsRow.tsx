import * as React from 'react';
import News, { NewsItem } from '../../src/components/news/News';
import image01 from '../assets/images/01.jpg';
import image02 from '../assets/images/02.jpg';
import image03 from '../assets/images/03.jpg';
import image04 from '../assets/images/04.jpg';

class DevNewsRow extends React.Component {
    public render() {
        const items: NewsItem[] = [
            {
                title: 'Jungscharwochenende der Mädchenjungschar',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: image01,
                content: (
                    <div className="">
                        <p className="">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                        </p>
                    </div>
                ),
                link: '/',
            },
            {
                title: 'Dem Regen getrotzt und eine Rekordsumme eingesammelt',
                subtitle: 'Allgemein - 22. Juli 2019',
                imgSrc: image02,
                content: (
                    <p className="">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor.
                    </p>
                ),
                link: '/',
            },
            {
                title: 'Unsere neue Website',
                subtitle: 'Allgemein - 22. Juli 2019',
                content: (
                    <div>
                        <p className="">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                        </p>
                    </div>
                ),
                link: '/',
            },
        ];
        return (
            <section className="cv-section alignfull">
                <News items={items} singleRow />
            </section>
        );
    }
}

export default DevNewsRow;
