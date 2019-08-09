<template>
  <div id="app">
    <Picker :show="show" title="picker 拾取器" :dataList="dataList"></Picker>
    <button style="width:2rem;height:.5rem;" @click="add"></button>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import TabBar from './components/nav/TabBar.vue'
import FormItem from './components/common/FormItem.vue'
import Picker from './components/picker/Picker.vue'
export default {
  name: 'app',
  components: {
    Welcome,
    TabBar,
    FormItem,
    Picker
  },
  data(){
    return {
        item:{labelText: '开户银行 ',require: true,inputType: 'showText', text: '招商银行'},
        show:false,
        dataList:[[1,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9]]
    }
  },
  methods:{
    add(){
      this.show = true
    }
  }
}
</script>

<style>

</style>
