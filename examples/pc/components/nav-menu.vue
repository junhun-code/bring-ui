<template>
  <div class="side-nav">
    <div class="fix-wrapper">
      <div v-for="(item, index) in data" class="group-container" :key="index">
        <p class="side-nav-title">{{ item.title }}</p>
        <div class="side-nav-items" v-for="nav in item.list" :key="nav.name">
          <template v-if="nav.desc">
            <router-link
              :class="$route.name === nav.name ? 'active' : ''"
              v-if="nav.name"
              :to="{ name: nav.name }"
              >{{ nav.desc }}</router-link
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navConf from "@/nav.config.json";
export default {
  data() {
    return {
      data: navConf
    };
  }
};
</script>
<style lang="less" scoped>
.side-nav {
  .fix-wrapper {
    position: fixed;
    z-index: 99;
    left: 0;
    top: 60px;
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3f536e;
    background-color: #fff;
    width: 210px;
    height: calc(100vh - 60px);
  }
  .group-container {
    margin-bottom: 12px;
  }
  .side-nav-title {
    margin: 0;
    padding: 0 24px 8px;
    font-weight: 600;
    color: #666;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.8;
    text-align: left;
  }
  .side-nav-items {
    font-size: 15px;
    font-weight: normal;
    line-height: 1.8;
    padding-left: 15px;
    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #3f536e;
      font-weight: normal;
      line-height: 1.5;
      text-align: left;
      cursor: pointer;
    }
    .active {
      color: #628cf5;
    }
  }
}
</style>
