<template>
  <div class="picker-content-list">
    <ul class="picke-roller" ref="roller">
      <li class="picker-roller-item" v-for="(item,index) in dataList"
      :style="setRollerStyle(index + 1)"
      :class="{ 'picker-roller-item-hidden': isHidden(index+1) }"
      >{{item}}</li>
    </ul>
    <div class="picker-content">
      <ul class="picker-content-panel">
        <li class="picker-content-item" v-for="(item,index) in dataList">{{item}}</li>
      </ul>
    </div>
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
        if (index >= this.currIndex + 10 || index <= this.currIndex - 10) {
          return true;
        } else {
          return false;
        }
      },
      setMove(){

      },
      setRollerStyle(index) {
        return `transform: rotate3d(1, 0, 0, ${-this.rotation * index}deg) translate3d(0px, 0px, 105px)`;
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
  .picker-content-list{
    flex: 1;
    position: relative;
    height: 2.52rem;
    overflow: hidden;
    text-align: center;
  }
  .picker-content{
    position: absolute;
    top: .95rem;;
    width: 100%;
    height: .36rem;
    background: #fff;
    z-index: 2;
    overflow: hidden;
   }
  .picke-roller{
    position: absolute;
    top: .95rem;
    width: 100%;
    height: 36px;
    z-index: 1;
    transform-style:preserve-3d;
    transform: rotate3d(1, 0, 0, 60deg);
  }
  .picker-roller-item{
    height: .36rem;
    line-height:.36rem;
    width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    color: #848484;
  }
  .picker-content-item{
    height:.36rem;
    line-height:.36rem;
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
