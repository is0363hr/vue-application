import { createApp } from 'vue'
import App from './App.vue'
import { VueCytoscape } from 'vue-cytoscape'

const app = createApp(App)

app.use(VueCytoscape)

app.mount('#app')
