import { Component, Fragment } from '@wordpress/element';

export default class GroupsEditBlock extends Component {
    render() {
        const props = this.props;
        return (
            <Fragment>
                <section className={`${props.className} alignfull cv-stage-edit`} data-align="full">
                    Gruppenübersicht
                    {/* TODO: Show placeholder content */}
                </section>
            </Fragment>
        );
    }
}
