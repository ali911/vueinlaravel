import Home from './Home.vue'
import About from './About.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/about/:id', component: About },
]