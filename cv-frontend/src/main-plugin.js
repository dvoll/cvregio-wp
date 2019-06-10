// @ts-nocheck
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import CvStageElement from './components/CvStageElement.vue';

import './base-components';

import './styles/custom-components/_cv-stage-item.scss';

console.log('Frontend loaded.');

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('cv-stage', CvStageElement);
