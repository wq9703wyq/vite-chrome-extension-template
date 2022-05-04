import packageJson from '../package.json';

const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/pages/options/index.html',
  background: { service_worker: 'src/pages/backend/index.js' },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'favicon-32.png',
  },
  // chrome_url_overrides: {
  //   newtab: 'src/pages/newtab/index.html',
  // },
  icons: {
    128: 'favicon-144.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      css: ['contentStyle.css'],
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['contentStyle.css', 'favicon-144.png', 'favicon-32.png'],
      matches: [],
    },
  ],
};

export default manifest;
