<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Welcome></Welcome>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import TabBar from './components/nav/TabBar.vue'
export default {
  name: 'app',
  components: {
    Welcome,
    TabBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
