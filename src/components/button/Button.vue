<template>
  <Button :class="btnStyle" :disabled="disabled" @click="clickHandler">
    <span :style="{color:this.color}"><slot></slot></span>
  </Button>
</template>
<script>
  export default{
    name: 'button',
    props:{
      type:{
        type: String,
        default:'',
      },
      disabled:{
        type: Boolean,
      },
      small:{
        type: Boolean,
      },
      block:{
        type: Boolean,
      },
      color:{
        type: String,
        default: '',
      },
      shape:{
        type: String,
        default: '',
      }
    },
    data(){
      return {

      }
    },
    methods:{
      clickHandler(){
        this.$emit('click')
      },
    },
    computed:{
      btnStyle(){
        const { small, block, type, shape, disabled } = this
        let cls = 'button '
        cls += `${type} ${shape} `
        cls += small ? 'small ' : ''
        cls += block ? 'block' : ''
        cls += disabled ? 'disabled' : ''
        return cls
      }
    }
  }
</script>
<style scoped>
  .button{
    cursor: pointer;
    height: .4rem;
    background-color: #2196f3;
    border: solid 1px #2196f3;
    font-size: .14rem;
    padding: 0 .4rem;
  }
  .disabled{
    background: #dadada;
    color: #f6f6f6;
    border: solid 1px #f6f6f6;
    cursor: not-allowed;
  }
  .small{
    height: .3rem;
    padding: 0 .15rem;
    font-size:.12rem;
  }
  .block{
    width:-webkit-fill-available;
  }
  .circle{
    border-radius:.5rem;
  }
  .light{
    background:white;
    border:none
  }
</style>
