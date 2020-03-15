import * as React from 'react';
import Card from '../card/Card';
import CardContainer from '../card/CardContainer';

export interface EventItem {
    title: string;
    subtitle: string;
    link: string;
    imgSrc?: string;
    content?: React.ReactNode;
    htmlContent?: string;
}

export interface EventProps {
    items: EventItem[];
    singleRow?: boolean;
    wider?: boolean;
}

class Event extends React.Component<EventProps> {
    public render() {
        const { singleRow = false, items } = this.props;
        const eventCards = items.map(item => (
            <Card
                fixedHeight
                wider
                title={item.title}
                subtitle={item.subtitle}
                imgSrc={item.imgSrc}
                htmlContent={item.htmlContent}
                link={item.link}
                key={`event-${item.title}`}
            >
                {item.content}
            </Card>
        ));
        return (
            <CardContainer singleRow={singleRow} wider>
                {eventCards}
            </CardContainer>
        );
    }
}

export default Event;
