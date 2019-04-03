<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
    type:String,
    default:'welcome to my zoon'
    }
  }
}
</script>
<style>
</style>
