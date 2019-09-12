<template>
  <div class="active-pop" @click.self="cancel">
    <transition appear name="slide-fade">
      <div class="pop-content">
        <div class="title" v-html="content"></div>
        <div class="btn-box">
          <div class="btn" @click="cancel">{{ cancelVal }}</div>
          <div class="btn2" @click="confirm">{{ confirmVal }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "b-message-box",
  components: {},
  props: {
    content: {
      type: String,
      default: "这是弹框内容"
    },
    confirmVal: {
      type: String, //确认文字
      default: "确定"
    },
    cancelVal: {
      //取消文字
      type: String,
      default: "取消"
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: "",
      reject: "",
      promise: "" // 保存promise对象
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 确定,将promise断定为resolve状态
    confirm() {
      this.isShowMessageBox = false;
      this.resolve("confirm");
      this.remove();
    },
    // 取消,将promise断定为reject状态
    cancel() {
      this.isShowMessageBox = false;
      this.reject("cancel");
      this.remove();
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox() {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    remove() {
      setTimeout(() => {
        this.destroy();
      }, 100);
    },
    destroy() {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
  },
  filters: {}
};
</script>

<style lang="less" scoped>
.active-pop {
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .pop-content {
    width: 260px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    .title {
      width: 100%;
      margin-top: 36px;
      text-align: center;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 22px;
      letter-spacing: 1px;
    }
    .btn-box {
      width: 100%;
      padding-top: 12px 0;
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      .btn {
        width: 50%;
        height: 78px;
        background-image: url("https://img3.beikewen.com/micro-lectures/introduce/white-btn.png");
        background-size: cover;
        line-height: 75px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(61, 58, 54, 1);
        letter-spacing: 2px;
      }
      .btn2 {
        width: 50%;
        height: 78px;
        background-image: url("https://img3.beikewen.com/micro-lectures/introduce/yellow-btn.png");
        background-size: cover;
        line-height: 75px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(61, 58, 54, 1);
        letter-spacing: 2px;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>
