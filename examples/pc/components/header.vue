<template>
  <header class="page-header">
    <div class="header-container">
      <a href="https://github.com/junhun-code/bring-ui" target="__blank">
        <span class="name">bring-ui</span>
      </a>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.page-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  opacity: 0.98;
  display: flex;
  .header-container {
    display: inline-block;
    padding-left: 30px;
    box-sizing: border-box;
    a {
      display: flex;
      align-items: center;
      height: 60px;
    }
    .name {
      color: #628cf5;
      font-size: 20px;
      margin-left: 5px;
    }
    .icon {
      width: 100px;
    }
  }
}
</style>
