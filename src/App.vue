<template>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>
<script setup lang="ts"></script>
<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
