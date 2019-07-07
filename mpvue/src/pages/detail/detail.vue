<template>
    <div class="detailContainer">
       <img class="detail_img" :src="detailObj.detail_img" alt="">
       <div class="avatar_date">
         <img :src="detailObj.avatar" alt="">
         <span>{{detailObj.author}}</span>
         <span>发布于</span>
         <span>{{detailObj.date}}</span>
       </div>
       <p class="company">{{detailObj.title}}</p>
       <div class="collection_share_container">
        <div class="collection_share">
          <img @tap="handleCollection" :src="isCollected?'/static/images/icon/collection-anti.png':'/static/images/icon/collection.png'" alt="">
          <img src="/static/images/icon/share-anti.png" alt="">
        </div>
        <div class="line"></div>
       </div>
       <Button>转发此文章</Button>
       <p class="content">{{detailObj.detail_content}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  // onLoad (options) {
  //   console.log(options)
  // }
  data () {
    return {
      detailObj: {},
      isCollected: false
    }
  },
  beforeMount () {
    console.log(this)
    this.index = this.$mp.query.index

    let oldStorage = wx.getStorageSync('isCollected')
    if (!oldStorage) {
      wx.setStorage({
        key: 'isCollected',
        data: {}
      })
    } else {
      // oldStorage[this.index]
      this.isCollected = oldStorage[this.index]
    }
  },
  mounted () {
    console.log(this)
    this.detailObj = this.listTmp[this.$mp.query.index]
  },
  computed: {
    ...mapState(['listTmp'])
  },
  methods: {
    handleCollection () {
      let isCollected = !this.isCollected
      this.isCollected = isCollected
      let title = isCollected ? '收藏成功 ' : '取消收藏'
      wx.showToast({
        title,
        icon: 'success'
      })

      let oldStorage = wx.getStorageSync('isCollected')
      oldStorage = {}
      oldStorage[this.index] = isCollected

      wx.setStorage({
        key: 'isCollected',
        data: oldStorage
      })
    }
  }
}
</script>

<style>
  .detailContainer {
    display: flex;
    flex-direction: column;
  }

  .detail_img {
    width: 100%;
    height: 460rpx;
  }
  .avatar_date{
    padding:10rpx;
  }
  .avatar_date img {
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
  }

  .avatar_date span {
    font-weight: 28rpx;
    margin-left: 6rpx;
  }

  .company {
    font-size: 32rpx;
    font-weight: bold;
    padding:10rpx;
  }
  
  .collection_share_container {
    position: relative;
  }
  
  .collection_share {
    float: right;
    margin-right: 30rpx;
  }

  .collection_share img {
    width: 90rpx;
    height: 90rpx;
    margin-right: 20rpx;
  }

  .line {
    position: absolute;
    top: 45rpx;
    left: 5%;
    width: 90%;
    height:1rpx;
    background: #eee;
    z-index: -1;
  }

  .content {
    font-size: 32rpx;
    text-indent: 32rpx;
    letter-spacing: 3rpx;
    line-height: 50rpx;
  }

  .music_img {
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: 200rpx;
    left: 50%;
    margin-left: -30rpx;
  }

</style>
