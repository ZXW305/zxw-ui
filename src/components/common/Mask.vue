<template>
  <div>
    <div v-show="vShow" class="ftk-mui-mask">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      vShow:{
        type:Boolean,
        default:true,
      }
    },
    mounted(){
      console.log(this.vShow)
    }
  }
</script>
<style scoped>
.ftk-mui-mask{
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:rgba(0,0,0,.5);
  z-index:100;
}
</style>
