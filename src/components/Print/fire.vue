<template>
  <div>
    <div ref="print">
      <div>
        <div>
          <div class="title_print">公安县殡葬管理所殡仪服务申请单</div>
          <div class="prinr_foot" style="display:flex;justify-content:space-between">
            <span style="font-size:20px">编号: {{ list.numberplate }}{{ list.number }}</span> <span>{{ currentdate }}</span>
          </div>
          <table id="fire_print" class="table_print">
            <tr>
              <td>逝者姓名</td>
              <td>{{ list.o_name }}</td>
              <td>性别</td>
              <td>{{ list.o_sex }}</td>
              <td>年龄</td>
              <td>{{ list.o_age }}</td>
            </tr>
            <tr>
              <td>地址</td>
              <td colspan="3">{{ list.o_registered }}</td>
              <td>经办人</td>
              <td>{{ list.operator }}</td>
            </tr>

            <tr>
              <th colspan="6">已 选 服 务 项 目</th>
            </tr>
            <tr>
              <td colspan="2">服务项目</td>
              <td>数量</td>
              <td>单价</td>
              <td>总价</td>
              <td>备注</td>
            </tr>
            <tr v-for="(val,item,index) in server" :key="index">
              <td colspan="2">{{ val.title }}</td>
              <td>{{ val.number }}</td>
              <td>{{ val.price }}</td>
              <td>{{ val.totalprice }}</td>
              <td style="width:150px" />
            </tr>
          </table>
          <div class="fire_p">
            <p>1、此表所选服务项目由核对后，交给接待员，由接待员安排服务事宜。</p>
            <p>2、家属凭此表办理结算手续，并领取骨灰。</p>
            <p>3、公安县户口减免基本火化费320元。</p>
            <p>申请人签名: <img :src="list.signature" alt="" width="200" style="vertical-align: middle;"></p>
          </div>
        </div>
        <div style="margin-top:100px">
          <p class="print_title">公安县殡葬管理所殡仪服务申请单</p>
          <div class="prinr_foot" style="display:flex;justify-content:space-between">
            <span style="font-size:20px">编号:  {{ list.numberplate }}{{ list.number }}</span> <span>{{ currentdate }}</span>
          </div>
          <table id="fire_print" class="table_print">
            <tr>
              <td>逝者姓名</td>
              <td>{{ list.o_name }}</td>
              <td>性别</td>
              <td>{{ list.o_sex }}</td>
              <td>年龄</td>
              <td>{{ list.o_age }}</td>
            </tr>
            <tr>
              <td>地址</td>
              <td colspan="3">{{ list.o_registered }}</td>
              <td>经办人</td>
              <td>{{ list.operator }}</td>
            </tr>

            <tr>
              <th colspan="6">已 选 服 务 项 目</th>
            </tr>
            <tr>
              <td colspan="2">服务项目</td>
              <td>数量</td>
              <td>单价</td>
              <td>总价</td>
              <td>备注</td>
            </tr>
            <tr v-for="(val,item,index) in server" :key="index">
              <div v-if="val.servertype == 2 || val.servertype == 3">
                <td colspan="2"><div style="font-size:20px;font-weight: 800;">{{ val.title }}</div></td>
                <td>{{ val.number }}</td>
                <td>{{ val.price }}</td>
                <td>{{ val.totalprice }}</td>
                <td style="width:150px" />
              </div>
            </tr>
          </table>
        <!-- <div class="fire_p">
          <p>1、此表所选服务项目由核对后，交给接待员，由接待员安排服务事宜。</p>
          <p>2、家属凭此表办理结算手续，并领取骨灰。</p>
          <p>3、公安县户口减免基本火化费320元。</p>
          <p>申请人签名: <img :src="list.signature" alt="" width="200" style="vertical-align: middle;"></p>
        </div> -->
        </div>
      <!-- <div>
        <h3 class="print_title">公安县殡葬管理所殡仪服务申请单</h3>
        <div class="prinr_foot" style="display:flex;justify-content:space-between">
          <span>编号: {{ list.number }}</span> <span>{{ currentdate }}</span>
        </div>
        <table id="fire_print" class="table_print">
          <tr>
            <td>逝者姓名</td>
            <td>{{ list.o_name }}</td>
            <td>性别</td>
            <td>{{ list.o_sex }}</td>
            <td>年龄</td>
            <td>{{ list.o_age }}</td>
          </tr>
          <tr>
            <td>地址</td>
            <td colspan="3">{{ list.o_registered }}</td>
            <td>经办人</td>
            <td>{{ list.operator }}</td>
          </tr>

          <tr>
            <th colspan="6">已 选 服 务 项 目</th>
          </tr>
          <tr>
            <td colspan="2">服务项目</td>
            <td>数量</td>
            <td>单价</td>
            <td>总价</td>
            <td>备注</td>
          </tr>
          <tr v-for="(val,item,index) in server" :key="index">
            <div v-if="val.servertype == 3">
              <td colspan="2">{{ val.title }}</td>
              <td>{{ val.number }}</td>
              <td>{{ val.price }}</td>
              <td>{{ val.totalprice }}</td>
              <td style="width:150px" />
            </div>
          </tr>
        </table>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { vuexData } from '@/utils/mixin'
export default {
  mixins: [vuexData],
  data() {
    return {
      list: {

      },
      server: null,
      currentdate: ''
    }
  },
  created() {
    this.getNowFormatDate()
  },
  methods: {
    print() {
      this.$print(this.$refs.print)
    },
    init(v) {
      console.log(v)
      this.server = v.server
      this.list = v.list
      //   this.list = Object.assign({}, data)
      this.$nextTick(() => {
        this.print()
      })
    },
    getNowFormatDate() {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      this.currentdate = year + '年' + month + '月' + strDate + '日'
    }
  }
}
</script>
<style>
#fire_print tr td{
   height:25px;
   line-height: 25px;
}
#fire_print tr th{
   height:30px;
   line-height: 30px;
}
.print_title{
  margin:0;
  height: 40px;
  margin-top: 20px;
}
.fire_p p{
  height: 10px;
  line-height: 10px;
}
</style>
