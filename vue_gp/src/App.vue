<template>
  <div id="app">
    <img src="./assets/logo.png">
    <List :comments="comments"/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
    data () {
       return {
         comments: [
           {
            name: '海洋世界',
            price: 12
           },
           {
            name: '卡丁车',
            price: 12
           },
           {
            name: '欧欧之家',
            price: 12
           }
         ]
       }

    },

    components: {
        List
    }
    
}
</script>

<style>
body{
   margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app img{
  width:100px;
  padding: 20px;
}
</style>
