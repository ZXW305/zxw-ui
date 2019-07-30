<template>
  <div>
    <div :class="{'cheader':true,'left':textPosition && textPosition==='left'}"><span class="back" @click="back"></span>{{title}}</div>
    <slot name="optBtns">
    </slot>
  </div>
</template>
<script>
  export default{
    name:'header',
    props:{
      title:String,
      textPosition:String,
    },
    methods:{
      back(){
        history.go(-1)
      },
    }
  }
</script>

<style scoped>
  .cheader{
    text-align:center;
    font-size:.14rem;
    height:.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:solid .01rem #eee;
  }
  .left{
    justify-content:left;
    padding-left:.35rem;
  }
  .back{
    display: inline-block;
    height: .29rem;
    width: .29rem;
    position: absolute;
    left: .05rem;
    background-image:url('../../assets/images/left-angle.png');
    background-size:.29rem;
}
</style>
