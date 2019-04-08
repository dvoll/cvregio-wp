import Vue from 'vue';
import App from './App.vue';
import vueCustomElement from 'vue-custom-element';

import CvStage from './components/CvStage.element';

console.log('Frontend loaded.');

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('cv-stage', CvStage);
