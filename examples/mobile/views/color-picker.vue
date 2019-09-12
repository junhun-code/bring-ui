<template>
  <div class="color-picker container">
    <b-color-picker
      v-model="color"
      v-on:change="headleChangeColor"
    ></b-color-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "#ff0000"
    };
  },
  methods: {
    headleChangeColor() {
      console.log("颜色改变");
    }
  }
};
</script>
