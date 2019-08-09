<template>
  <div class="picker-content-list">
    <ul class="picke-roller" ref="roller" style="transform: rotate3d(1, 0, 0, 60deg);">
      <li class="picker-roller-item" v-for="(item,index) in dataList"
      :style="setRollerStyle(index + 1)"
      :class="{ 'picker-roller-item-hidden': isHidden(index+1) }"
      >{{item}}</li>
    </ul>
    <div class="picker-indicator"></div>
  </div>
</template>
<script>
  export default {
    props:{
      dataList:{
        type:Array,
        default:[],
      }
    },
    data(){
      return {
        scrollDistance: 0,
        transformY: 0,
        currIndex:1,
        lineSpacing:36,
        rotation:20,
        touchParams: {
          startY: 0,
          endY: 0,
          startTime: 0,
          endTime: 0
        },
      }
    },
    methods:{
      isHidden(index) {
        if (index >= this.currIndex + 8 || index <= this.currIndex - 8) {
          return true;
        } else {
          return false;
        }
      },
      setMove(){

      },
      setRollerStyle(index) {
        return `transform: rotate3d(1, 0, 0, ${-this.rotation * index}deg) translate3d(0px, 0px, 100px)`;
      },
      touchStart(event) {
        event.preventDefault();
        let changedTouches = event.changedTouches[0];
        this.touchParams.startY = changedTouches.pageY;
        this.touchParams.startTime = event.timestamp || Date.now();
        this.transformY = this.scrollDistance;
      },
      touchMove(event) {
        event.preventDefault();
        let changedTouches = event.changedTouches[0];
        this.touchParams.lastY = changedTouches.pageY;
        this.touchParams.lastTime = event.timestamp || Date.now();
        let move = this.touchParams.lastY - this.touchParams.startY;
        this.setMove(move);
      },
      touchEnd(event) {
        event.preventDefault();
        let changedTouches = event.changedTouches[0];
        this.touchParams.lastY = changedTouches.pageY;
        this.touchParams.lastTime = event.timestamp || Date.now();
        let move = this.touchParams.lastY - this.touchParams.startY;
        let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
        if (moveTime <= 300) {
          move = move * 2;
          moveTime = moveTime + 1000;
          this.setMove(move, 'end', moveTime);
        } else {
          this.setMove(move, 'end');
        }
      },
    }
  }
</script>
<style>
  .picker-content{

  }
  .picke-roller{

  }
  .picker-roller-item{
    display:flex;
    justify-content:center;
    height: .36rem;
    align-items: center;
    position:absolute;
    width:100%;
    backface-visibility: hidden;
    text-overflow: ellipsis;
    overflow: hidden;

  }
  .picker-roller-item-hidden{
    visibility:hidden;
  }
  .picker-indicator{
    height:.36rem;
    position:absolute;
    width:100%;
    border-top:1px solid #dadada;
    border-bottom: 1px solid #dadada;
    z-index:3;
    top:.95rem;
  }
</style>
