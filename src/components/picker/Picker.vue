<template>
  <transition name="picker">
    <div v-show="show" :class="{'picker':true,'picker-content-up':show,'picker-content-down':pickerHide}">
      <div class="btnGrp" @click="pickerUpOrDown"><span class="cancel">取消</span><span>{{title}}</span><span class="confirm">确认</span></div>
      <div class="picker-panel">
        <template v-for="list in dataList">
          <pickerslot :dataList="list" @chooseItem="chooseItem"></pickerslot>
        </template>
      </div>
    </div>
  </transition>
</template>
<script>
import pickerslot from './Picker-slot.vue'
  export default {
    props:{
      show:{
        type:Boolean,
        default:true
      },
      title:{
        type:String,
        default:'选择城市'
      },
      dataList:{
        type:Array,
        default:[],
      }
    },
    components:{
      pickerslot,
    },
    data(){
      return {
        pickerHide:false
      }
    },
    methods:{
      pickerUpOrDown(){
        this.pickerHide = true;
        setTimeout(() => {
          this.pickerHide = false;
          this.$parent.show = false
        },1000)
      },
      chooseItem(item,index){
        console.log(item,index)
      }
    }
  }
</script>
<style scoped>
.btnGrp{
  height:.3rem;
  width:-webkit-fill-available;
  border-bottom:solid 1px #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .1rem;
}
.btnGrp .cancel,.btnGrp .confirm{
  font-size:.14rem;
  color:#2196f3;
  background:none;
  border:none;
  letter-spacing:5px
}
.picker{
  position:fixed;
  width:-webkit-fill-available;
  bottom:-2.1rem;
  border-top:solid 1px #f6f6f6;
}
.picker-content-up{
   bottom:0;
   animation:pickerUp 1s forwards;
}
.picker-content-down{
   animation:pickerDown 1s forwards;
}
.picker-panel{
  height:2.5rem;
  display:flex;
}

@keyframes pickerUp{
 from{
     bottom:-2.1rem;
   }
   to{
     bottom:0;
   }
}
@keyframes pickerDown{
  from{
    bottom:0;
  }
  to{
    bottom:-2.1rem;
  }
}
</style>
