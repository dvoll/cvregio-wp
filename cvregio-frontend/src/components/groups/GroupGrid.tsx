import * as React from 'react';
import Card from '../card/Card';
import CardContainer from '../card/CardContainer';
import InfoRow from './InfoRow';
import { IconTypes } from '../base/Icon';

export interface GroupGridItem {
    title: string;
    location: string;
    target?: string;
    time?: string;
    imgSrc?: string;
}

export interface GroupGridProps {
    groups: GroupGridItem[];
}

class GroupGrid extends React.Component<GroupGridProps> {
    public render() {
        const { groups } = this.props;
        const groupCards = groups.map(group => (
            <Card title={group.title} subtitle={group.location} imgSrc={group.imgSrc}>
                {group.target && (
                    <InfoRow label="Teilnehmer" title={group.target} icon={IconTypes.ArrowRight} />
                )}
                {group.time && (
                    <InfoRow label="Zeit" title={group.time} icon={IconTypes.ArrowRight} />
                )}
            </Card>
        ));
        return <CardContainer>{groupCards}</CardContainer>;
    }
}

export default GroupGrid;
