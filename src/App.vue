<template>
  <div id="app">
    <main-tab-bar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
  MainTabBar
  }
}
</script>

<!--app.vue被main.js引用，base.css和normalize都会被引用-->
<style>
  @import "assets/css/base.css";
</style>
