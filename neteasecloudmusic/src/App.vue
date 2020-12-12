<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
const axios = require("axios");
import Nav from "./components/Nav";

export default {
  name: "App",
  components:{
    Nav
  }

}
</script>

<style lang="less">
html,body{
  height: 100%;
  width: 100%;
  
  min-width: 1200px;
}

#app{
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 241);
}

</style>
