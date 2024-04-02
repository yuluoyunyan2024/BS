import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
//在引入 ElementPlus 时，可以传入一个包含 size 和 zIndex 属性的全局配置对象。
//size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
