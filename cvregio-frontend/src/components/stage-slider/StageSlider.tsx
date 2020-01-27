import * as React from 'react';
import Swiper, { SwiperOptions } from 'swiper';
// import * as Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.css';
// import { Swiper, Parallax, Pagination, Navigation, EffectFade } from 'swiper/dist/js/swiper.esm';
import Icon, { IconTypes } from '../base/Icon';
import './swiper.scss';
import './StageSlider.scss';
import './StageItem.scss';

export interface StageItem {
    id: number;
    innerHTML: string;
}
export interface StageSliderProps {
    items: StageItem[];
}

export interface StageSliderState {
    swiperOptions: SwiperOptions;
}

class StageSlider extends React.Component<StageSliderProps, StageSliderState> {
    readonly state: StageSliderState = {
        swiperOptions: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next--custom',
                prevEl: '.swiper-button-prev--custom',
            },
            parallax: true,
            effect: 'fade',
        },
    };

    readonly swiperRef: React.RefObject<HTMLDivElement> = React.createRef();

    componentDidMount() {
        const mySwiper = new Swiper(
            this.swiperRef.current as HTMLElement,
            this.state.swiperOptions
        );
    }

    public render() {
        const { items } = this.props;
        const slides = items.map(item => (
            <div
                className="swiper-slide cv-stage__item cv-stage-card"
                key={`swiper-item-${item.id}`}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.innerHTML }}
            />
        ));
        return (
            <div ref={this.swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    {slides}
                    <div slot="pagination" className="cv-stage__controls">
                        <div className="swiper-button-prev--custom">
                            <Icon icon={IconTypes.ArrowLeft} size={16} />
                        </div>
                        <div className="swiper-pagination" />
                        <div className="swiper-button-next--custom">
                            <Icon icon={IconTypes.ArrowRight} size={16} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StageSlider;
