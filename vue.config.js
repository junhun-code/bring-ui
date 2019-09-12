"use strict";

const path = require("path");

const vueMarkdown = {
  raw: true,
  preventExtract: true,
  use: [
    [
      require("markdown-it-container"),
      "demo",
      {
        validate: function(params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens, index) {
          let { nesting, info } = tokens[index];
          if (nesting === 1) {
            // 1.获取代码块的描述内容
            let content = info.trim().match(/^demo\s*(.*)$/) || [];
            let description = content.length > 1 ? content[1] : "";
            var md = require("markdown-it")();
            if (description) {
              description = md.render(description);
            }
            // 2.获取代码块内的html和js代码
            let code = tokens[index + 1].content;
            // 3.代码块包裹
            return `
              <demo-block-mobile>
                  <div class="source" slot="source">${code}</div>
                   ${description}
                  <div class="highlight" slot="code">`;
          } else {
            return `
                  </div>
              </demo-block-mobile>\n`;
          }
        }
      }
    ]
  ]
};

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: "examples/pc/main.js",
      template: "public/index.html",
      filename: "index.html"
    },
    mobile: {
      entry: "examples/mobile/main.js",
      template: "public/mobile.html",
      filename: "mobile.html"
    }
  },
  productionSourceMap: false,
  css: {
    extract: false
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // alias
    config.resolve.alias.set("@", resolve("examples"));

    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });

    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options(vueMarkdown);
  }
};
