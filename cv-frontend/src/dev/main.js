import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import App from '../App.vue';
import CvStageElement from '../components/CvStageElement.vue';

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('cv-stage', CvStageElement);

if (window.location.toString().match(/dev$/)) {
    console.log('match');
    // document.getElementById('cv-frontend-raw').remove();
    new Vue({
        render: h => h(App),
    }).$mount('#app');
}
