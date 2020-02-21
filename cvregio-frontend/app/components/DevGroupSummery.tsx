import * as React from 'react';

import GroupSummery from '../../src/components/groups/GroupSummery';

// export interface GroupSummeryProps {}

class DevGroupSummery extends React.Component {
    public render() {
        // const {} = this.props;
        return (
            <GroupSummery
                header="Jungenjungschar"
                time="samstags, von 15 bis 17 Uhr"
                location="Rauchfang"
                target="Jungen im Alter von 7 bis 12"
                description="Dies ist eine Beispiel-Seite. Sie unterscheidet sich von Beiträgen, da sie
                    stets an derselben Stelle bleibt und (bei den meisten Themes) in der
                    Website-Navigation angezeigt wird."
            />
        );
    }
}

export default DevGroupSummery;
