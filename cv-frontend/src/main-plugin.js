// @ts-nocheck
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import 'document-register-element/build/document-register-element';


import CvStageElement from './custom-elements/CvStageElement.vue';

import './base-components';

import './static-components/styles/_cv-stage-item.scss';

console.log('Plugin script loaded.');

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('cv-stage', CvStageElement);
