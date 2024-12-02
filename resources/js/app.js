require('./bootstrap');

import Vue from 'vue';
import store from './store'
import DayJs from "./plugins/dayjs";

import { App, plugin } from '@inertiajs/inertia-vue'
Vue.use(plugin);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import VueScreen from "vue-screen";
Vue.use(VueScreen);

Vue.use(DayJs);

require('./plugins/inertia-progress');
require('./plugins/toasted');
require('./plugins/vue2-datepicker');
require('./plugins/vue-cookies');
require('./plugins/vue-meta');
require('./plugins/ziggy');

require('./filters/date-times');

require('./mixins/page-error');

require('./component-registration');
require('./plugins/vue-social-sharing');


const el = document.getElementById('app');
new Vue({
    store,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el);
