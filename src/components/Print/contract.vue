<template>
  <div>
    <div ref="print">

      <div class="h1_">公安县殡葬管理所殡仪服务合同</div>
      <div style="text-align:right;margin-bottom:20px;">合同编号：{{ list.serial }}</div>
      <div class="main_">
        <div style="margin-bottom:15px;font-size:18px">承&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 办&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方 : (以下称甲方) <input type="text" style="border:none;boder-bottom:1px solid #000;width:60px"></div>
        <div style="margin-bottom:15px;font-size:18px">殡仪服务单位 : (以下称已方) <u /></div>
        <p>根据《中华人民共和国合同法》、《中华人民共和国消费者权益保护法》及相关法律、法规，结合本次殡仪服务的具体情况，甲、乙双方在平等、自愿、公平、诚实信用的基础上，经协商一致，达成如下协议。</p>
        <p>第一条  基本信息</p>
        <table id="hall_print" class="table_print">
          <tr>
            <td>逝者姓名</td>
            <td style="width:120px">{{ list.name }}</td>
            <td>性别</td>
            <td>{{ list.sex }}</td>
            <td>年龄</td>
            <td style="width:80px">{{ list.age }}</td>
          </tr>
          <tr>
            <td>身份证号</td>
            <td colspan="5">{{ list.card }}</td>
          </tr>
          <tr>
            <td>承办人姓名</td>
            <td>{{ list.linkman }}</td>
            <td>性别</td>
            <td>{{ list.linksex }}</td>
            <td>与逝者关系</td>
            <td>{{ list.reason }}</td>
          </tr>
          <tr>
            <td>身份证号</td>
            <td colspan="5">{{ list.linkcard }}</td>
          </tr>
          <tr>
            <td>接运时间</td>
            <td style="width:120px;line-height:20px">{{ list.carry_date }}</td>
            <td>接运地点</td>
            <td>{{ list.carry_address }}</td>
            <td>悼念厅</td>
            <td style="width:80px">{{ list.mourn ? list.mourn.title : '' }}</td>
          </tr>
          <tr>
            <td>单位和住址</td>
            <td colspan="2">{{ list.registered }}</td>
            <td>联系电话</td>
            <td colspan="2">{{ list.linkphone }}</td>
          </tr>
        </table>
        <p>第二条  服务事项</p>
        <!-- <p>1、乙方为甲方提供殡仪服务内容如下：</p> -->
        <p>1、服务项目和收费标准按照发改局文件执行。</p>
        <p>第三条 甲方义务</p>
        <p>1、甲方应严格遵照本合同的内容，如实填写相关资料，并保证其真实性；</p>
        <p>2、甲方应按照合同约定的项目和价格支付服务费用；</p>
        <p>3、甲方应遵守国家相关法律法规及乙方的各项管理规定。</p>
        <p>4、遗体生前因肝病、糖尿病、心脏病、血栓阻塞、呼吸道疾病和非正常死亡，可能出现肤色变化、口鼻流血、水肿等现象均属正常，出现此类现象与遗体冷藏无关；</p>
        <p>第四条  乙方义务</p>
        <p>1、乙方应严格遵照本合同的内容，安全、有效、及时地完成服务事项；</p>
        <p>2、乙方对提供的各项服务及收费价格，应向甲方明确告知；</p>
        <p>3、乙方要确保服务质量，解决甲方在治丧过程中的合理诉求，并负责处理服务投诉问题；</p>
        <p>第五条  违约责任</p>
        <p>1、因乙方过错未能完成服务内容的，应向甲方解释并道歉；</p>
        <p>2、因乙方过失，对甲方造成经济、精神损失的，甲方应按照《湖北省殡葬服务单位规范管理办法》的有关规定予以赔偿。</p>
        <p>3、非乙方过错或不可抗拒的因素（自然灾害、战争等）造成甲方经济、精神损失的，乙方不予赔偿。</p>
        <p>第六条  争议解决方式</p>
        <p>因合同发生的争议，由双方当事人协商解决，或向消费者权益保护委员会申请调解，如仍不能解决的，可向当地人民法院起诉。</p>
        <p>第七条  本合同一式两份，甲、乙双方各执一份，双方签字或盖章之日起生效，至服务项目完成后合同终止。</p>
        <div style="display:flex;justify-content:space-between;height:100px;line-height:100px;"><span> 承办方（签名）：<img :src="list.signature" alt="" width="200" style="vertical-align: middle;"></span>乙方单位盖章:<span /></div>
        <div style="text-align:right;padding-right:150px;margin-bottom:50px">业务员签字:</div>
        <div style="text-align:right">日期：{{ currentdate }}</div>
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
      this.list = v.list
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
<style scoped>
 .h1_{
     text-align: center;
     font-size: 30px;
     margin-bottom: 30px;
 }
 .main_ p{
     margin: 0;
     text-indent: 2em;
     font-size: 18px;
     line-height: 35px;
 }
</style>
