import { createApp } from 'vue';
import App from './App.vue';
import './BroVue/styles/main.scss';
import { createBroVue } from './BroVue';

createApp(App).use(createBroVue()).mount('#app');
