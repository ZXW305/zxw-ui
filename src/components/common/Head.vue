<template>
  <div :style="style">
    <div :class="{'cheader':true,'left':textPosition && textPosition==='left'}" :style="{ 'fontSize': fontSize}"><span class="back" @click="back"></span>{{title}}</div>
    <slot name="optBtns">
    </slot>
  </div>
</template>
<script>
  export default{
    name:'header',
    props:{
      title:{
        type:String,
        default:'我有一个美丽的头部'
      },
      textPosition:{
        type:String,
        default:'center'
      },
      style:{
        type:Object,
        default:() => {}
      },
      fontSize:{
        type:String,
        default: () => '.14rem'
      },
    },
    methods:{
      back(){
        this.$emit('back')
      },
    },
    mounted(){
      
    }
  }
</script>

<style scoped>
  .cheader{
    text-align:center;
    height:.4rem;
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
    background-image:url(data:image/png;base64,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);
    background-size:.29rem;
}
</style>
