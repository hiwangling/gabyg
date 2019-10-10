<template>
  <div>
    <div ref="print">
      <h3 class="print_title">公安县殡葬管理所殡仪服务申请单</h3>
      <div class="prinr_foot">
        {{ currentdate }}
      </div>
      <table id="hall_print" class="table_print">
        <tr>
          <td>逝者姓名</td>
          <td>{{ list.name }}</td>
          <td>性别</td>
          <td>{{ list.sex }}</td>
          <td>年龄</td>
          <td>{{ list.age }}</td>
          <td>死亡原因</td>
          <td>{{ list.reason }}</td>
        </tr>
        <tr>
          <td>身份证号码</td>
          <td colspan="3">{{ list.card }}</td>
          <td>地址</td>
          <td colspan="3">{{ list.registered }}</td>
        </tr>
        <tr>
          <td>承办人</td>
          <td>{{ list.linkman }}</td>
          <td>性别</td>
          <td>{{ list.linksex }}</td>
          <td>年龄</td>
          <td>{{ list.linkphone }}</td>
          <td>与逝者关系</td>
          <td>{{ list.relation }}</td>
        </tr>
        <tr v-if="list.mourn">
          <th colspan="8">灵 堂 服 务</th>
        </tr>
        <tr v-if="list.mourn">
          <td>悼念厅</td>
          <td>{{ list.mourn.title }}</td>
          <td>开始时间</td>
          <td colspan="2">{{ list.mourn.create_time }}</td>
          <td>结束时间</td>
          <td colspan="2">{{ list.mourn.endtime }}</td>
        </tr>
        <tr>
          <th colspan="8">已 选 服 务 项 目</th>
        </tr>
        <tr class="servers">
          <td colspan="2">服务名称</td>
          <td>数量</td>
          <td>单位</td>
          <td colspan="2">单价</td>
          <td colspan="2">合计</td>
        </tr>
        <tr v-for="(val,item,index) in server" :key="index" class="servers">

          <td colspan="2">{{ val.title }}<span v-show="val.sid == 123 || val.sid == 146 || val.sid == 147"> ({{ val.star }} - {{ val.end }})</span> </td>
          <td>{{ val.number }}</td>
          <td>{{ val.unit }}</td>
          <td colspan="2">{{ val.price }}</td>
          <td colspan="2">{{ val.totalprice }}</td>
        </tr>
      </table>
      <div>
        <p>备注：悼念厅收费，不足半天按半天计算，不足一天按一天计算。</p>
        <p>以上服务项目和收费标准已经知晓，同意按此项目服务并收费。</p>
        <p>经办人: {{ list.operator }}</p>
        <p>承办人签名：<img :src="list.signature" alt="" width="200" style="vertical-align: middle;"></p>
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
      mourn: null,
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
      this.server = v.server
      this.list = v.list
      this.month = this.list.mourn
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
<style lang="stylus">

</style>
