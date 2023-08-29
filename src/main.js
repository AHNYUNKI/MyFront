import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import axios from "axios";

// Vue 앱 인스턴스를 생성하고 라우터 플러그인을 사용한 다음 #app 요소에 마운트합니다.
createApp(App)
    .use(router, axios)
    .mount('#app');
