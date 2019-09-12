// 导入组件，组件必须声明 name
import messageBox from "./src/message-box.vue";
import addMessageBox from "./src/main.js";

// 为组件提供 install 安装方法，供按需引入
messageBox.install = function(Vue) {
  Vue.component(messageBox.name, messageBox);
  addMessageBox(Vue);
};

messageBox.service = function(Vue) {
  addMessageBox(Vue);
};

// 默认导出组件
export default messageBox;
