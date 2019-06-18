<template>
  <div class="index_all">
    <List :comments="comments"/>
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  data () {
    return {
      comments: [
        {
          order: '儿童票',
          img: 'static/img/GetImage.jpeg',
          name: '海洋世界',
          price: 120
        },
        {
          order: '成人票',
          img: 'static/img/GetImage.jpeg',
          name: '卡丁车',
          price: 133
        },
        {
          order: '长者票',
          img: 'static/img/GetImage.jpeg',
          name: '欧欧之家',
          price: 60
        },
        {
          order: '儿童/成人票',
          img: 'static/img/GetImage.jpeg',
          name: '婚博中心',
          price: 160
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
</style>
