import * as React from 'react';

import './GroupSummery.scss';
import InfoRow from './InfoRow';

// export interface GroupSummeryAttributes {
//     location?: string;
//     target?: string;
//     time?: string;
// }

export interface GroupSummeryProps {
    header?: string;
    description?: string;
    location?: string;
    target?: string;
    time?: string;
    edit?: boolean;
    handleValueChange?: (title: 'target' | 'time' | 'location', value: string) => void;
}

interface GroupSummeryState {
    location?: string;
    target?: string;
    time?: string;
}

class GroupSummery extends React.Component<GroupSummeryProps, GroupSummeryState> {
    readonly state: GroupSummeryState = {
        location: this.props.location,
        time: this.props.time,
        target: this.props.target,
    };

    public render() {
        const { header, description = '', edit = false, handleValueChange } = this.props;
        const { location, target, time } = this.state;
        return (
            <div className="entry-content">
                <div className="cv-intro-box alignwide alignwide--only-right">
                    {header && (
                        <div className="cv-intro-box__header">
                            <h1 className="">{header}</h1>
                        </div>
                    )}
                    {/* TODO: Remove header */}
                    <div className="cv-intro-box__content">
                        <div className="cv-intro-box__col cv-intro-box__col1">
                            <InfoRow
                                label="Ort"
                                title={location}
                                edit={edit}
                                onChange={
                                    handleValueChange &&
                                    (value => handleValueChange('location', value))
                                }
                                // TODO: change icon
                            />
                            <InfoRow
                                label="Teilnehmer"
                                title={target}
                                edit={edit}
                                onChange={
                                    handleValueChange &&
                                    (value => handleValueChange('target', value))
                                }
                                // TODO: change icon
                            />
                            <InfoRow
                                label="Zeit"
                                title={time}
                                edit={edit}
                                onChange={
                                    handleValueChange && (value => handleValueChange('time', value))
                                }
                                // TODO: change icon
                            />
                        </div>
                        <div className="cv-intro-box__col cv-intro-box__col2 cv-blocks-dynamic-block-preview">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupSummery;
