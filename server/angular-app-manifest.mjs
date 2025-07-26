
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Avidha-Shaik/To-Do-List',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Avidha-Shaik/To-Do-List"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 470, hash: 'b6e0ca0d97d4fa538ed4a74b7a0bb675114a98ccb7fdff89abdf85838bf63b89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: '92060e7962a4b9334843993b535a8c67cdba8c22897709a740e062da04077c38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3773, hash: '26920951dae1a6be51630e0c8c15e440ebfed309821e72c234fbf450a7c8795e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
