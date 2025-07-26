
export default {
  basePath: 'https://Avidha-Shaik.github.io/To-Do-List',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
