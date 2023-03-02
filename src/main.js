import { createApp } from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"

const app = createApp(App)
app.config.globalProperties.$log = console.log
app.mount("#app")
