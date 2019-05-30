import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import App from '../App.vue';
import CvStageElement from '../components/CvStageElement.vue';
import CvHeaderElement from '../components/CvHeaderElement.vue';

// import '/css/all.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/main.scss';
// /Users/dvoll/private/wp-dev/wp-content/cv-frontend/node_modules/@fortawesome/fontawesome-free/css/all.css

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('cv-stage', CvStageElement);
Vue.customElement('cv-header', CvHeaderElement);

if (window.location.toString().match(/dev$/)) {
    console.log('match');
    // document.getElementById('cv-frontend-raw').remove();
    new Vue({
        render: h => h(App),
    }).$mount('#app');
}
