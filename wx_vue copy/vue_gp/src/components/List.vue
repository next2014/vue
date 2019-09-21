<template>
    <ul id="ticket">
       <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :index="index" />
    </ul>
</template>

<script>
import {mapState} from 'vuex'
import Item from './Item.vue'
export default {
  props: {
    comments: Array
  },
  computed: {
    ...mapState(['Item'])
  }
}
</script>

<style>

</style>
