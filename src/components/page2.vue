<template>
  <div>
    <h1>{{$store.state.counter}}</h1>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      counter:0
    }
  },
  computed: {
    
  },
  methods:{
    addition(){
      this.$store.commit('add')
    },
    subtraction(){
      this.$store.commit('reduce')
    }
  }
};
</script>