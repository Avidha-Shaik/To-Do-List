
export default {
  basePath: 'https://github.com/Avidha-Shaik/To-Do-List',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
