<template>
  <div>
    <div ref="print">
      <div class="h1_">客  户  须  知</div>
      <div class="main_">
        <p>尊敬的客户：</p>
        <p>为了使您顺利地办好殡殓事宜，在治丧的过程中得到更好的服务，请您仔细阅读本须知，确认后请签名：</p>
        <p>1.丧事承办人</p>
        <p>根据我国殡葬法规的规定，逝者有亲属的，亲属是丧事承办人；逝者没有亲属的，其生前单位或者临终居住地的居（村）民委员会是丧事承办人。为了便于联系，希望丧事承办人能够指定专人出面联系治丧事宜。</p>
        <p>在医院死亡的，丧事承办人应持医疗机构出具的死亡证明到殡仪馆办理殡殓手续，并签订《殡仪服务合同》，必要时还应出示本人的身份证明。</p>
        <p>在家中或者养老机构死亡的，丧事承办人应持由所在地的社区卫生服务中心出具的死亡证明原件到殡仪馆办理手续，并签订《殡仪服务合同》，必要时还应出示本人的身份证明。</p>
        <p>非正常死亡的，须由事发地或者户口所在地公安、司法机关出具的相关证明。</p>
        <p>2.治丧一般过程</p>
        <p>遗体在灵堂安放好后，家属或丧事承办人应到业务接待大厅和工作人员洽谈服务项目，签订《客户须知》和《殡仪服务合同》，家属或丧事承办人签字确认后视为正式服务合同，然后由工作人员安排服务。如有疑问可向工作人员咨询，客户如需变更服务项目，应提前告知工作人员办理变更手续。对已经履行的服务项目，客户需按照公示的收费标准付费；</p>
        <p>3.确定服务项目</p>
        <p>殡仪服务所有项目和收费标准是公开的，客户可以自主选择；在服务过程中因故不能履行预定的某些服务项目时.应提前告知客户并按照更改后的项目收费。</p>
        <p>4.结  账</p>
        <p>客户应持《殡仪服务合同》和《殡仪服务申请单》办理结账手续。结账完毕，收款人员会向客户出具发票、《领取骨灰凭证》和《火化证明》，客户应在柜台前当面查收。</p>
        <p>5.领取骨灰</p>
        <p>客户持《领取骨灰凭证》领取骨灰。</p>
        <p>6.客户咨询与投诉</p>
        <p>客户咨询服务，工作人员应该耐心解释，如有争议不能解决，请到业务接待大厅向值班人员反映，或拨打殡仪服务投诉电话；也可向上级主管部门投诉。</p>
        <p>殡仪服务咨询电话：5110789</p>
        <p>投诉电话：5110275  5226566（周一至周五，上午8:30至下午5:00）</p>
        <p style="font-family: '楷体';margin:10px 0">本人已经知晓客户须知的相关内容，并且郑重承诺：我所提供的相关证明证件、信息资料是合法、真实、有效的，否则将承担因此发生的一切后果和责任。</p>
        <div style="text-align:right;height:60px;line-height:60px;padding-right:50px"> 丧事承办人（签名）：<img :src="list.signature" alt="" width="200" style="vertical-align: middle;"></div>
        <div style="text-align:right">公安县殡葬管理所</div>
        <div style="text-align:right">{{ currentdate }}</div>
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
     font-size: 22px;
 }
 .main_ p{
     margin: 0;
     text-indent: 2em;
     font-size: 18px;
     line-height: 25px;
 }
</style>
