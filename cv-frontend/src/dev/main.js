// @ts-nocheck
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Dev from './pages/Dev.vue';
import Homepage from './pages/Home.vue';
import Default from './pages/Default.vue';
import Post from './pages/Post.vue';
import CvStageElement from '../components/CvStageElement.vue';
import CvHeaderElement from '../components/CvHeaderElement.vue';

import '../styles/main.scss';

Vue.config.productionTip = false;
Vue.use(vueCustomElement);
Vue.customElement('cv-stage', CvStageElement);
Vue.customElement('cv-header', CvHeaderElement);

const locationString = window.location.toString();
console.log('location', locationString);

if (locationString.match(/index-dev.html$/)) {
    console.log('Location: dev');
    new Vue({
        render: h => h(Dev),
    }).$mount('#app');
} else if (locationString.match(/post.html$/)) {
    console.log('Location: post');
    new Vue({
        render: h => h(Post),
    }).$mount('#app');
} else if (locationString.match(/default.html$/)) {
    console.log('Location: default');
    new Vue({
        render: h => h(Default),
    }).$mount('#app');
} else {
    console.log('Location: Homepage');
    new Vue({
        render: h => h(Homepage),
    }).$mount('#app');
}
