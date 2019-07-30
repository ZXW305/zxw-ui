<template>
  <div :class="tabLocationClass">
    <div>
      <ul class="ftk-tabbar-list">
        <li class="ftk-tabbar-item" v-for="(item,index) in tabList" @click="routeTo(`${item.route?item.route:''}`)">
          <img :src="tabicon"/>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      tabList:{
        type:Array,
        default:() => [{title:'首页'},{title:'分类'}],
      },
      tabLocation:{
        type:String,
        default:'bottom'
      }
    },
    data(){
      return {
        tabicon:require('../../assets/images/tabbar_home.png'),
        loactions:['top','bottom']
      }
    },
    computed:{
      tabLocationClass(){
        let locObj = {'ftk-tabbar-box':true}
        if(this.loactions.includes(this.tabLocation)){
          locObj[this.tabLocation] = true
        }
        return locObj
      }
    },
    methods:{
      routeTo(route){
        if(route){
          this.$router.push(route)
        }
      }
    }
  }
</script>
<style>
.ftk-tabbar-box{
  position:fixed;
  width:-webkit-fill-available;
  padding:.05rem 0;
  background:white;
}
.bottom{
  bottom:0;
  border-top: .01rem solid #eee
}
.top{
  top:0;
  border-bottom: .01rem solid #eee
}
.ftk-tabbar-list{
  display:flex;
  justify-content:space-around;
}
.ftk-tabbar-item{
  display:flex;
  flex-direction:column;
  font-size:.14rem;
}
.ftk-tabbar-item img{
  width:.25rem;
  height:.25rem;
  margin:auto
}

</style>
