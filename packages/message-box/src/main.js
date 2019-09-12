import msgboxVue from "./message-box.vue";

// 定义插件对象
const addMessageBox = function(Vue) {
  console.log("addMessageBox2");
  const MessageBoxInstance = Vue.extend(msgboxVue);
  let currentMsg;
  const initInstance = () => {
    // 实例化vue实例
    currentMsg = new MessageBoxInstance();
    let msgBoxEl = currentMsg.$mount().$el;
    document.body.appendChild(msgBoxEl);
  };
  // 在Vue的原型上添加实例方法，以全局调用
  Vue.prototype.$msgBox = {
    showMsgBox(options) {
      if (!currentMsg) {
        initInstance();
      }
      if (typeof options === "string") {
        currentMsg.content = options;
      } else if (typeof options === "object") {
        Object.assign(currentMsg, options);
      }
      //  Object.assign方法只会拷贝源对象自身的并且可枚举的属性到目标对象
      return currentMsg
        .showMsgBox()
        .then(val => {
          currentMsg = null;
          return Promise.resolve(val);
        })
        .catch(err => {
          currentMsg = null;
          return Promise.reject(err);
        });
    }
  };
};
export default addMessageBox;
