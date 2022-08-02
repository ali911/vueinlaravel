// import './bootstrap';

import { createApp } from 'vue'
// import App from './App.vue'
import TasksApp from './components/Welcome.vue'
import axios from 'axios'

window.axios = axios

const app = createApp(TasksApp)

app.mount('#app')//
