<template>
    <li @tap="toDetail" class="lists">
        <div class="in_fl tic_img">
            <img :src="comment.img" alt="">
        </div>
        <div class="in_fr">
            <h2><a href="javascript:;" class="badge badge-primary text-white mr-1" >{{comment.order}}</a>{{comment.name}}</h2>
            <span class="dol d-block mt-1">¥<em>{{comment.price}}</em></span>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    comment: Object,
    index: Number
  },
  methods: {
   toDetail () {
   }
  }
}
</script>

<style>

</style>
