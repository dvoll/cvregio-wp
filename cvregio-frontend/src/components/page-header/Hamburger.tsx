import * as React from 'react';

import './Hamburger.scss';

export interface HamburgerProps {
    open?: boolean;
    onClick: () => void;
}

class Hamburger extends React.Component<HamburgerProps> {
    public render() {
        const { open = false, onClick } = this.props;
        return (
            <div
                role="button"
                tabIndex={0}
                aria-pressed={open ? 'true' : 'false'}
                className={`burger burger-slip ${open ? 'open' : ''}`}
                onClick={() => onClick()}
                onKeyPress={keyevent =>
                    keyevent.which === 32 || keyevent.which === 13 ? onClick() : null
                }
            >
                <div className="burger-lines" />
            </div>
        );
    }
}

export default Hamburger;
