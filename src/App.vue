<template>
  <div id="app">
    <Head :style="headStyle" fontSize=".2rem"></Head>
    <Dialog :show="show" @btnConfirm="btnConfirm" @btnCancel="btnCancel" title=""></Dialog>
    <FormItem :item="item"></FormItem>
    <FTKButton  :disabled="btnDisabled" @click="click" color="blue" small="small" >sdfsdf</FTKButton>
    <div><TextInput label="1231" @blur="onBlur" @input="input" required="required" maxLength="5"  :value="inputVal" placeholder="请输入12123123"></TextInput></div>
    <Toast :during="during"></Toast>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import TabBar from './components/nav/TabBar.vue'
import FormItem from './components/common/FormItem.vue'
import Picker from './components/picker/Picker.vue'
import ActionSheet from './components/actionsheet/ActionSheet.vue'
import Head from './components/common/Head.vue'
import FTKButton from './components/button/Button.vue'
import FTKMask from './components/common/Mask.vue'
import Dialog from './components/dialog/Dialog.vue'
import TextInput from './components/input/TextInput.vue'
import Toast from './components/toast/Toast.vue'
export default {
  name: 'app',
  components: {
    Welcome,
    TabBar,
    FormItem,
    Picker,
    ActionSheet,
    Head,
    FTKButton,
    FTKMask,
    Dialog,
    TextInput,
    hasBorder:false,
    Toast,
  },
  data(){
    return {
        item:{labelText: '还款账号 ',require: true,inputType: 'input', pdata: 'backCardNo'  },
        show:true,
        backCardNo:'',
        dataList:[1,3,4,5,6,7,8],
        pickerData:[[1,3,4,5,6,7,8],[1,3,4,5,6,7,8],[1,3,4,5,6,7,8]],
        btnBlock:true,
        btnDisabled: true,
        required:true,
        inputVal: '123123asfdasd',
        headStyle: {color:'red',fontSize:'22px'},
        during:1,
    }
  },
  methods:{
    input(val){
       this.inputVal = val
    },
    btnConfirm(){
      this.show = false
    },
    btnCancel(){
      this.show = false
    },
    click(){
      this.show = true;
    },
    add(){
      this.show = true;
    },
    choose(item){
      console.log(item)
      this.show = false;
    },
    onBlur(event){
      console.log(event.target.value)
    }
  },
}
</script>

<style>

</style>
