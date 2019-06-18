<template>
    <ul id="ticket">
       <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :index="index" />
    </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  props: {
    comments: Array
  },

  components: {
    Item
  }
}
</script>

<style>

</style>
