
function initHeader() {
    /** @type {HTMLElement|null} header */
    const header = document.querySelector('.cvregio-block-theme-header');
    if (!header) return;
    new DynamicHeader(header);
}

function main() {
    initHeader();
}

document.addEventListener('DOMContentLoaded', main);

class BaseElement {
    element;

    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }
}

class DynamicHeader extends BaseElement {

    /** @type {HTMLElement} innerGroup */
    innerGroup;
    /** @type {HTMLElement|null} innerGroup */
    titleImage;
    // /** @type {HTMLElement|null} innerGroup */
    // linksModal;

    headerChangeScrollAmount = 50;

    _isSmallHeader = false;

    set isSmallHeader(value) {
        if (this._isSmallHeader !== value) {
            this._isSmallHeader = value;
            this.changeHeader(this._isSmallHeader);
        }
    };

    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        super(element);
        this.titleImage = /** @type {HTMLElement|null} inner */ (this.element.querySelector('.wp-block-site-logo'));
        // this.linksModal = /** @type {HTMLElement|null} inner */ (this.element.querySelector('.wp-block-navigation__responsive-container'));
        this.innerGroup = /** @type {HTMLElement} inner */ (this.element.children[0]);
        this.init();
        this.addScrollListener();
    }

    init() {
        // this.element.parentElement.style.position = 'fixed';
        // this.element.parentElement.style.zIndex = '100';
        // this.element.parentElement.style.top = '0';
        // this.element.parentElement.style.bottom = '0';
        // this.element.parentElement.style.left = '0';
        // this.element.parentElement.style.right = '0';
        // this.element.parentElement.style.pointerEvents = 'none';
        
        this.element.style.position = 'fixed';
        this.element.style.top = '0';
        this.element.style.left = '0';
        this.element.style.right = '0';
        this.element.style.zIndex = '100';
        this.element.style.background = '#fff';
        this.element.style.pointerEvents = 'auto';

        this.element.style.transition = 'transform .3s';
        this.innerGroup.style.transition  = 'transform .3s';
        if (this.titleImage) {
            this.titleImage.style.transition = 'transform .3s';
        }

        // if (this.linksModal) {
        //     this.linksModal.style.background = '#fff';
        //     // this.element.parentElement.append(modal);
        // }
        const headerHeight = this.element.getBoundingClientRect().height;
        document.body.style.paddingTop = `${headerHeight}px`;

        const button = this.element.querySelector('.wp-block-navigation__responsive-container-open');
        button?.addEventListener('click', () => {
            this.element.style.position = 'static';
            this.element.style.transition = 'none';
            this.element.style.transform = 'none';
            this.innerGroup.style.transition = `none`;
            this.innerGroup.style.transform = `none`;
            this._isSmallHeader = false;
        });
        const buttonClose = this.element.querySelector('.wp-block-navigation__responsive-container-close');
        buttonClose?.addEventListener('click', () => {
            this.element.style.position = 'fixed';
            this.element.style.transition = 'transform .3s';
            // this.innerGroup.style.transition = `none`;
            // this.innerGroup.style.transform = `none`;
            this.innerGroup.style.transition = `transform .3s`;
            this.handleScroll(window.scrollY);
            // this.changeHeader(this.isSmallHeader);
        });
            
    }

    addScrollListener() {
        let lastKnownScrollPosition = 0;
        let ticking = false;
        window.addEventListener('scroll', () => {
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll(lastKnownScrollPosition);
                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    /**
     * @param {number} position
     */
    handleScroll(position) {
        this.isSmallHeader = position > this.headerChangeScrollAmount;
    }

    changeHeader(showSmallHeader) {
        // const headerHeight = this.element.getBoundingClientRect().height;
        if (showSmallHeader) {
            this.element.style.transform = `translateY(${-45}px)`;
            this.innerGroup.style.transform = `translateY(${45/2}px)`;
            this.element.style.borderBottom = '1px solid #dadada';
            if (this.titleImage) {
                this.titleImage.style.transform = `scale(${.6})`;
            }
        } else {
            this.element.style.borderBottom = 'none';
            this.element.style.transform = `translateY(0)`;
            this.innerGroup.style.transform = `translateY(0px)`;
            if (this.titleImage) {
                this.titleImage.style.transform = `scale(1)`;
            }
        }
        // transform: translateY(#{$smallHeaderHeight - $initialHeaderHeight}px);
        // transition: transform #{$transitionSpeedShrink};
    }
}