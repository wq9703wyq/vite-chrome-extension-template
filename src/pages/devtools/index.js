// chrome.devtools.panels.create('panel', 'img/logo.png', 'pages/panel.html', function (panel) {
//   console.log('hello from callback')
// })

try {
  chrome.devtools.panels.create(
    "Dev Tools",
    "icon-34.png",
    "src/pages/panel/index.html"
  );
} catch (e) {
  console.error(e);
}
