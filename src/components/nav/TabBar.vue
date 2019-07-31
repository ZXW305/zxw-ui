<template>
  <div :class="tabLocationClass">
    <div>
      <ul class="ftk-tabbar-list">
        <li class="ftk-tabbar-item" v-for="(item,index) in tabList" @click="routeTo(`${item.route?item.route:''}`)">
          <img :class="{'tabicon':tabicon.length === 0}"/>
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
        tabicon:'',
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
  margin:auto;
  background-image:url(data:image/png;base64,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)
}

</style>
