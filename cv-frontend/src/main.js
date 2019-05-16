import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import CvStageElement from './components/CvStageElement.vue';
import CvHeaderElement from './components/CvHeaderElement.vue';

console.log('Frontend loaded.');

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('cv-stage', CvStageElement);
Vue.customElement('cv-header', CvHeaderElement);
