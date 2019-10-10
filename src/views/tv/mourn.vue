<template>
  <div>
    <div class="header">
      <!-- <img :src="logo" alt="">  -->
      公安县殡仪馆悼念厅展示
    </div>
    <el-row :gutter="12" style="padding: 0 20px">
      <el-col v-for="(item,index) in list" :key="index" :span="6" shadow="always">
        <el-card>
          <div class="card_">
            <p class="card_title">{{ item.rtitle }}</p>
            <p>逝者姓名: <strong>{{ item.name }}</strong></p>
            <p>逝者性别: <strong>{{ item.sex }}</strong></p>
            <p>入厅时间: <strong>{{ item.starttime }}</strong></p>
            <p>出厅时间: <strong>{{ item.endtime }}</strong></p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import io from 'weapp.socket.io'
export default {
  data() {
    return {
      list: null,
      logo: require('../../assets/img/logo.jpg')
    }
  },
  created() {
    const socket = (this.socket = io('http://byg.gabz.net.cn:2120'))
    socket.on('connect', function() {
      socket.emit('login', 2)
    })
    socket.on('new_msg', v => {
      var theString = v.replace(/&quot;/g, '"')
      this.list = JSON.parse(theString)
    })
  },
  methods: {

  }
}
</script>
<style scoped>
.header {
    height: 70px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    font-family: '宋体';
    line-height: 70px;
    background: #1e8c87;
    margin-bottom: 5px;
}
.card_{
   height: 300px;
  padding: 10px;
  padding-top: 15px;
  text-align: center;
  border-radius: 5px;
  background:rgb(51, 121, 171)
}
.el-card{
  margin-bottom: 20px;
}
.el-card__body{
  padding:0!important
}
.card_ img{
  display: block;
 margin: 0 auto;
}
.card_ p {
    margin:  0;
    font-family: '楷体';
    color: #fff;
    text-align: left;
    margin-bottom: 15px;
    font-size: 20px;
}
.card_title{
  font-size:40px!important;
   text-align: center!important;
   padding-bottom:20px;
   font-weight: 800;
}
</style>
