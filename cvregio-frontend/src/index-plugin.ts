import { createElement } from '@wordpress/element';
import { updateCategory } from '@wordpress/blocks';
import CvLogoSimple from './components/CvLogoSimple';

import './blocks/cv-stage/index.js';
import './blocks/cv-stage-item/index.js';

import './blocks/cv-news/index';
import './blocks/cv-groups/index';

import './blocks/cv-group-detail/index';

import './blocks/cv-sidebar/index';

import './blocks/cv-associate-template/index';

import './blocks/cv-related-associates/index';

// export {MyComponent};

// Add custom svg to cvregio-content category
// eslint-disable-next-line func-names
(function() {
    const svgIcon = createElement(CvLogoSimple);
    updateCategory('cvregio-content', { icon: svgIcon });
})();
