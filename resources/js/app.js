import './bootstrap';
import { createApp } from 'vue';
import Index from '@/Components/Index.vue'
import router from '@/router.js'

const app = createApp(Index);

app
    .use(router)
    .mount('#app');
