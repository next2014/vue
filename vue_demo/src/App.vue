<template>
<<<<<<< HEAD
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
=======
<div class="todo-container">
    <div class="todo-wrap">
       <TodoHeader/>
       <TodoList/>
       <TodoFooter/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
    components: {
         TodoHeader,
         TodoList,
         TodoFooter
    }
>>>>>>> 39d63b89c68a085a4d7b3fb67d440536ac9c0471
}
</script>

<style>
<<<<<<< HEAD
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
=======

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  
>>>>>>> 39d63b89c68a085a4d7b3fb67d440536ac9c0471
</style>
