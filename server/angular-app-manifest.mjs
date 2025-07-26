
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Avidha-Shaik.github.io/To-Do-List/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/To-Do-List"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 470, hash: '1dca935ad0417030604688ccfd58997360e72cf81806d9e96fbcc5b40faaccc5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: 'c8a10f7b4697c4c9b5823e021e644eaee9d70e78877ad21387782d25bdd48083', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3773, hash: '1f0113deb53b4184eed959f21e40f3f60df4431440c82cac58ccb9ebbdec7de8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
