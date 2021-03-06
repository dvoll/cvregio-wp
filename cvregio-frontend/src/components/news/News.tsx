import * as React from 'react';
import Card from '../card/Card';
import CardContainer from '../card/CardContainer';
import './news.scss';

export interface NewsItem {
    title: string;
    subtitle: string;
    link: string;
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
                link={item.link}
                key={`news-${item.title}`}
            >
                {item.content}
            </Card>
        ));
        return (
            <div className="cv-news">
                <CardContainer singleRow={singleRow} wider>
                    {newsCards}
                </CardContainer>
            </div>
        );
    }
}

export default News;
