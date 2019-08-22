<template>
  <transition name="fdialog">
    <div v-show="show">
      <div class="ftk-mui-mask">
        <div class="ftk-dialog-box">
          <div class="ftk-dialog">
            <div class="ftk-dialog-body">
              <span v-html="title" class="ftk-dialog-title"></span>
              <div class="ftk-dialog-content">{{content}}</div>
            </div>
            <div class="ftk-dialog-footer">
              <button :class="`cancel ${animationCancel && btnName === 'cancel' ? 'cancel_animation' : '' }`" @click="ftkBtnCancelClk">{{cTitle}}</button>
              <button v-if="title.length" :class="`confirm ${animationConfirm && btnName === 'confirm' ? 'ok_animation' : '' }`" @click="ftkBtnCancelCfm">确 认</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    mounted(){
      console.log(this.show)
    },
    computed:{
      cTitle(){
        return this.title.length === 0 ? '我知道了':'取 消'
      }
    },
    props:{
      show:{
        type:Boolean,
        default:true,
      },
      title:{
        type:String,
        default:'标题1'
      },
      content:{
        type:String,
        default:'删除后将从你的记录里消失，无法找回',
      },
    },
    data(){
      return {
         btns:[{class:'ok',text:'提交'},{class:'cancel',text:'取消'}],
         animationConfirm:false,
         animationCancel:false,
         btnName:'',
         clickInterval:100,
      }
    },
    components:{
    },
    methods:{
      ftkBtnCancelClk(target){
        console.log(target)
        this.btnName = 'cancel'
        this.animationCancel = true
        setTimeout(() => {
          this.animationCancel = false;
          this.show = false
          this.$emit('btnCancel',target)
        },this.clickInterval)
      },
      ftkBtnCancelCfm(target){
        console.log(target)
        this.btnName = 'confirm'
        this.animationConfirm = true
        setTimeout(() => {
          this.animationConfirm = false
          this.$emit('btnConfirm',target)
        },this.clickInterval)
      }
    },
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
.ftk-dialog-box{
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  display:flex;
  justify-content:center;
  align-items:center;
}
.ftk-dialog{
  background:white;
  max-height:1.5rem;
  border-radius:.04rem;
  width:80%;
  display:flex;
  flex-direction:column;
}
.ftk-dialog-body{
  padding:.3rem .2rem .2rem;
  display:flex;
  justify-content:center;
  flex-direction:column;
}
.ftk-dialog-title{
  text-align:center;
  font-size: .16rem;
  padding-bottom: .08rem;
}
.ftk-dialog-content{
  font-size:.14rem;
  color:#848484;
  text-align:center;
  padding-bottom:.1rem;
}
.ftk-dialog-footer{
  display: flex;
  width:100%;
  border-radius: 0 0 .03rem .03rem;
  overflow: hidden;
  height:.5rem;
}
.ftk-dialog-footer button{
  width:100%;
  font-size:.14rem;
  border:none;
  position:relative;
}
.ftk-dialog-footer .cancel{
  border-right:solid .01rem #dddddd;
  border-top:solid .01rem #dddddd;
  background:white;
}
.ftk-dialog-footer .confirm{
  background:#2196f3;
  color:white;
}
.ok_animation{
  animation: btn_ok_animation .2s;
}
.cancel_animation{
  animation:btn_cancel_animation .2s;
}
.fdialog-enter-active, .fdialog-leave-active {
  transition: opacity 13ms;
}
.fdialog-enter, .fdialog-leave-to{
  opacity: 0;
}
@keyframes btn_ok_animation{
  from {background-color: #2196f3;}
  50% {background-color: #57758c;}
  to {background-color: #2196f3;}
}
@keyframes btn_cancel_animation{
  from{background-color: #dddddd}
  50% {background-color: #c7b3b3}
  to {background-color: #dddddd}
}
</style>
