<template>
   <transition name="actionsheet">
      <div v-show="show" :class="{'actionsheet':true,'actionsheet-content-up':show,'actionsheet-content-down':actionHide}">
        <ul>
          <li v-for="item in dataList" class="sheet-item" @click="chooseItem(item)">
            <div>
              {{item}}
            </div>
          </li>
        </ul>
      </div>
   </transition>
</template>
<script>
  export default{
    props:{
      show:{
        type:Boolean,
        default:true
      },
      title:{
        type:String,
        default:'title'
      },
      dataList:{
        type:Array,
        default:[],
      }
    },
    data(){
      return {
        actionHide:false,
      }
    },
    methods:{
      chooseItem(item){
        this.actionHide = true;
        setTimeout(() => this.actionHide = false,300)
        this.$emit('choose',item)
      }
    }
  }
</script>
<style>
  .actionsheet{
    position:fixed;
    width:-webkit-fill-available;
    bottom:-2.1rem;
    border-top:solid 1px #f6f6f6;
    min-height:1rem;
    max-height:2rem;
  }
  .actionsheet-content-up{
     bottom:0;
     animation:actionsheetUp 1s forwards;
  }
  .actionsheet-content-down{
     animation:actionsheetDown 1s forwards;
  }
  .sheet-item{
    display:flex;
    justify-content:center;
    align-items:center;
    height:.36rem;
    border-top:solid .01rem #f6f6f6;
    border-bottom:solid .01rem #f6f6f6;
  }
  @keyframes actionsheetUp{
   from{
       bottom:-2.1rem;
     }
     to{
       bottom:0;
     }
  }
  @keyframes actionsheetDown{
    from{
      bottom:0;
    }
    to{
      bottom:-2.1rem;
    }
  }
</style>
