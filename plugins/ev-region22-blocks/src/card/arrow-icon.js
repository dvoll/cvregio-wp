/**
 *
 * @param {{
 *  icon?: 'arrow-right' | 'external'
 * }} param0
 * @returns
 */
const ArrowIcon = ({ icon = 'arrow-right' }) => {
    return (
        <div className="ev-region22-card__arrow-icon">
            <svg
                viewBox="0 0 144 144"
                style={{
                    width: '100%',
                    height: 'auto',
                    fill: 'currentcolor',
                }}
            >
                <use xlinkHref={`#${icon}`} />
            </svg>
        </div>
    );
};

export default ArrowIcon;
