import * as React from 'react';
import Card from '../card/Card';
import CardContainer from '../card/CardContainer';

export interface NewsItem {
    title: string;
    subtitle: string;
    imgSrc?: string;
    content?: React.ReactNode;
    htmlContent?: string;
}

export interface NewsProps {
    items: NewsItem[];
    singleRow?: boolean;
    wider?: boolean;
}

class News extends React.Component<NewsProps> {
    public render() {
        const { singleRow = false, items } = this.props;
        const newsCards = items.map(item => (
            <Card
                fixedHeight
                wider
                title={item.title}
                subtitle={item.subtitle}
                imgSrc={item.imgSrc}
                htmlContent={item.htmlContent}
            >
                {item.content}
            </Card>
        ));
        return (
            <CardContainer singleRow={singleRow} wider>
                {newsCards}
            </CardContainer>
        );
    }
}

export default News;
