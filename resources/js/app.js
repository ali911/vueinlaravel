import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import TasksApp from './components/Welcome.vue'
import axios from 'axios'

window.axios = axios

const app = createApp(App)

app.use(router)
app.mount('#app')
