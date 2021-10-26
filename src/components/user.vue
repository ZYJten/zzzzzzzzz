<template>
  <div>
    <h1>我是用户</h1>
    <p>{{userId}}</p>
  </div>
</template>
<script>
export default {
  name:"User",
  computed:{
    userId(){
      return this.$route.params.id
    }
  }
}
</script>