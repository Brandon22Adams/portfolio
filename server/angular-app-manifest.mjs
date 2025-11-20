
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about-me"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12864, hash: 'e2ee459bf22fb92fba209239cf04f1f8569b8727148f5bdba2884bf4689cd6a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3683, hash: 'd5d5e9b211535f393eafbb396ec526dd307058e2d1162319b2c9996583ea1dd5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15245, hash: '12bb6ab6b24f3b854a75bf9530606bb8193b409d6fb0abba0846ad52e434c4b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 15247, hash: '1deb2c935af568641e13abd7bfd10aaf8e9395465c41cc7a29c03e4c9f105ddb', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-FGVEQUSU.css': {size: 13088, hash: 'cwRKFzxfpro', text: () => import('./assets-chunks/styles-FGVEQUSU_css.mjs').then(m => m.default)}
  },
};
