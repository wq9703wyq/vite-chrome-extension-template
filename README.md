### Vue3 + Vite + Chrome-extension

#### **QS?**

1. Popup 方案
   1. **Popup** 弹框为单独页面，**Chroem** 提供单独的开发者模式窗口
   2. **Popup** 无法直接 **读取** 或者 **修改** 主页面，只能通过 Chrome Api 来与主页面互动
   3. 使用 **Popup** 进行开发与普通的页面开发无异
2. Content-script 方案
   1. **Content-script** 直接运行在主页面中，因此可以自由的 **读取** 或者 **修改** 主页面
   2. 使用 **Content-script** 开发，需要将将 **Vue-Page** 嵌入到主页面中， 但在 **Chrome-extension** 的 [文档]([Content scripts - Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)) 中提到 **Content-script**  是不支持 import module 的
      1. github 上的插件思路，一般是使用 **IIFE** 去将需要用到的 **lib** 合并到打包后的 **Content-script** ，来得到一个 Huge Content-script，这样子就不需要 import 
3. 原本预计的是搭建一个既支持 Content-script 方案 也支持 Popup 方案 的 vite模板，为了解决 [**Content-script**  是不支持 **import**](https://stackoverflow.com/a/48121629) 的问题而使用 [vite-plugin-chrome-extension]([StarkShang/vite-plugin-chrome-extension: A vite plugin to bundle chrome extensions for Manifest V3. (github.com)](https://github.com/StarkShang/vite-plugin-chrome-extension)) ，但该插件存在 [**Popup** 样式文件没有加载的问题]([No style when building examples · Issue #8 · StarkShang/vite-plugin-chrome-extension (github.com)](https://github.com/StarkShang/vite-plugin-chrome-extension/issues/8)) 的问题，再加上该插件处于 **不维护** 状态，因此弃用。
4.  因此，决定先试用 Popup 方案进行开发，之后再研究 **Parcel**、**rool-up** 等打包插件与 **Vite** 是否存在差异

