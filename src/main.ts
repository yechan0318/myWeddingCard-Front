/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from '@/App.vue'
import router from "./router"

// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'

//@ts-ignore
const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
