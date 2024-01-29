// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { defineWalineConfig } from "vuepress-plugin-comment2/client";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import DarkMode from './components/DarkMode.vue'

import JumpCard from "vue-plugin-jumpcard"

defineWalineConfig({
  serverURL: "https://comment.hestudio.net",
  search: false,
  imageUploader: (image: File) => {
    let formData = new FormData();
    let headers = new Headers();

    formData.append('file', image);
    headers.append('Accept', 'application/json');

    return fetch('https://image.hestudio.net/api/v1/upload', {
      method: 'POST',
      headers: headers,
      body: formData,
    })
      .then((resp) => resp.json())
      .then((resp) => resp.data.links.url);
  },
});

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
    app.use(JumpCard)
    app.config.globalProperties.$loadRecaptcha = async function (siteKey) {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.onload = () => {
          resolve();
        };
        script.onerror = (error) => {
          reject(error);
        };
        document.head.appendChild(script);
      });
    };
    app.config.globalProperties.$loadRecaptcha('6Lf7k1wpAAAAADbNcQ3ea2ueZVwLoOD1wTZOx2Rp')
  },
  rootComponents: [DarkMode]
});
