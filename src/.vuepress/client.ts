// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { defineWalineConfig } from "vuepress-plugin-comment2/client";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


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
  }
});
