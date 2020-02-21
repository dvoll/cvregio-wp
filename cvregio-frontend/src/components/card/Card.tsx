import * as React from 'react';
import './Card.scss';

export interface CardProps {
    title: string;
    subtitle: string;
    link?: string;
    imgSrc?: string;
    capitalized?: boolean;
    wider?: boolean;
    fixedHeight?: boolean;
    htmlContent?: string;
}

class Card extends React.Component<CardProps> {
    public render() {
        const {
            title,
            subtitle,
            link,
            imgSrc,
            capitalized = false,
            wider = false,
            fixedHeight = false,
            children = [],
            htmlContent,
        } = this.props;
        return (
            <a
                href={link}
                className={`cv-card no-link-style${wider ? ' cv-card--wider' : ''}${
                    fixedHeight ? ' cv-card--fixed-height' : ''
                }`}
            >
                <div className="cv-card__inner-wrapper">
                    <article className="cv-card__inner">
                        <span
                            className={`cv-card__subtitle${
                                capitalized ? ' cv-card__subtitle--capitalized' : ''
                            }`}
                        >
                            {subtitle}
                        </span>
                        <h3
                            className="cv-card__title"
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        {imgSrc && <img className="cv-card__image" src={imgSrc} alt="" />}
                        {htmlContent && (
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        )}
                        {children}
                    </article>
                </div>
            </a>
        );
    }
}

export default Card;
