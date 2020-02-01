import * as React from 'react';
import './CardContainer.scss';

export interface CardContainerProps {
    singleRow?: boolean;
    wider?: boolean;
    fixedHeight?: boolean;
}

class CardContainer extends React.Component<CardContainerProps> {
    public render() {
        const { singleRow = false, wider = false, fixedHeight = false, children } = this.props;
        return (
            <div
                className={`cv-card-container${singleRow ? ' cv-card-container--row' : ''}${
                    fixedHeight ? ' cv-card-container--fixed-height' : ''
                }${wider ? ' cv-card-container--wider' : ''}`}
            >
                <div
                    className={`cv-card-container__grid${wider ? ' cv-card-container--wider' : ''}`}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default CardContainer;
