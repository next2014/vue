<template>
 <div>
   <div class="topNav">
     <ul>
       <li>推荐</li>
       <li>好吃的</li>
       <li>好玩的</li>
       <li>活动</li>
       <li>更多</li>
       <li>全部</li>
      </ul>
      <div class="ad">
        <img src="/static/images/index/home/1_03.jpg" alt="">
      </div>
      <div class="noice">
        <p><img src="/static/images/icon/share.png" alt=""> <span>公告</span> 49.9元超值价抢购欧美城海洋世界..</p>
      </div>
   </div>
   <div class="user">用户</div>
    <div class="project">
      <ul>
         <li>
           <img src="/static/images/index/icon/1_06_03.jpg" alt="">
           <p>海洋世界</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_05.jpg" alt="">
           <p>婚博中心</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_07.jpg" alt="">
           <p>卡丁车</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_09.jpg" alt="">
           <p>真人CS体验</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_15.jpg" alt="">
           <p>欧欧之家</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_16.jpg" alt="">
           <p>美食天地</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_18.jpg" alt="">
           <p>欧欧酒店</p>
         </li>
         <li>
           <img src="/static/images/index/icon/1_06_19.jpg" alt="">
           <p>充值中心</p>
         </li>
      </ul>
   </div>
   <div class="module01">
      <div class="title">最新活动</div>
   </div>
   <div class="module02">
      <div class="title">在线购票</div>
   </div>
   <div class="module03">
      <div class="title">游玩推荐</div>
   </div>
   <div class="module04">
      <div class="title">最新资讯</div>
   </div>
   <div class="module05">
      <div class="title">美食天地</div>
   </div>
   <div class="module06">
      <div class="title">休闲娱乐</div>
   </div>
   <div class="module07">
      <div class="title">欧欧主题酒店</div>
   </div>
 </div>
</template>
<script>
export default {}
</script>

<style>
  .topNav{
      width: 100%;
  }
  .topNav li{
     float: left;
  }
  .ad{
     height: 160rpx;
  }
  .ad img{
     width: 100%;
     height: 160rpx;
  }
  .noice {
     background-color: #FDE024;
  }
  .noice p{
     width: 90%;
     height: 60rpx;
     overflow: hidden;
     padding:0 20rpx;
  }
  .noice img{
     width:45rpx;
     height:45rpx;
     vertical-align: middle;
  }
  .project{
     width: 100%;
     height: 500rpx;
     padding:0 20rpx;
  }
  .project li{
     width:150rpx;
     float: left;
     padding:0 15rpx 40rpx 15rpx;
     text-align: center;
  }
  .project li p{
     font-size:26rpx;
     color: #333333;
  }
  .project img{
     width: 100rpx;
     height: 100rpx;
     margin:0 auto;
  }
</style>
