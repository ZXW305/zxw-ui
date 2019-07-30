<template>
  <transition name="ftoast">
    <div class="ftk-toast" v-show="showToast">
      <div class="ftk-toast-box">
        <span v-if="type !== 'text'" :class="iconClass">
        </span>
        <span v-html="msg" :class="{'ftk-toast-type-nottext':type !== 'text'}"></span>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    props:{
      type:{
        type:String,
        default:'text'
      },
      msg:{
        type:String,
        default:'这是一个吐司提示',
      },
      during:{
        type:Number,
        default:1,// 单位秒
      }
    },
    data(){
      return {
        showToast: true,
        types:['success','fail','warn','loading']
      }
    },
    methods:{
      hideToast(){
        this.showToast = false
      }
    },
    computed:{
      iconClass(){
        let classObj = {'icon':true}
        if(this.types.includes(this.type)){
          classObj[this.type] = true
        }
        console.log(classObj)
        return classObj
      }
    },
    mounted(){
      setTimeout(() => {
        //this.hideToast()
      },(this.during*1000))
      console.log(this.type)
    }
  }
</script>
<style>
  .ftk-toast-box .icon{
    background-image:url('../../assets/images/success.png');
    background-size: .4rem;
    display: flex;
    height: .6rem;
    width: .6rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-size: .4rem;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ftk-toast-box .success{
    background-image:url('../../assets/images/success.png');
  }
  .ftk-toast-box .fail{
    background-image:url('../../assets/images/fail.png');
  }
  .ftk-toast-box .warn{
    background-image:url('../../assets/images/warn.png');
  }
  .ftk-toast-box .loading{
    background-image:url('../../assets/images/loading.png');
    animation: loadingRoate 2s linear infinite
  }
  .ftk-toast-type-nottext{
    width:.6rem;
    text-align:center;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
  }
  .ftk-toast{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ftk-toast-box{
    background:rgba(0,0,0,.5);
    min-height:.2rem;
    max-width:2.64rem;
    color:white;
    padding:.1rem .2rem;
    border-radius:.05rem;
  }
  .ftoast-enter-active, .ftoast-leave-active {
    transition: opacity .6s;
  }
  .ftoast-enter, .ftoast-leave-to{
    opacity: 0;
  }
  .ftk-toast-incimg{

  }
  @keyframes loadingRoate{
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
