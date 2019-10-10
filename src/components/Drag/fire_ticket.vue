<template>
  <div style="height:550px">
    <el-button
      type="primary"
      plain
      size="small"
      style="position: absolute;
    right: 80px;"
      @click="print"
    >打印</el-button>
    <section ref="print">
      <template>
        <template v-for="(item,index) in vert">
          <drag :key="index" :child="item" />
        </template>
      </template>
    </section>
  </div>
</template>
<script>
import Drag from '@/components/Drag'
// import { get_cemetery_data } from '@/api/cemetery'
export default {
  components: { Drag },
  data() {
    return {
      vert: [
        {
          t: '12',
          left: '10',
          top: '80',
          id: 0
        },
        {
          t: '3',
          left: '10',
          top: '155',
          id: 1
        },
        {
          t: '13',
          left: '10',
          top: '230',
          id: 2
        },
        {
          t: '344',
          left: '10',
          top: '310',
          id: 3
        },
        {
          t: '34',
          left: '10',
          top: '397',
          id: 3
        },

        {
          t: '',
          left: '10',
          top: '471',
          id: 98
        },

        {
          t: '',
          left: '10',
          top: '555',
          id: 3
        },
        {
          t: '',
          left: '155',
          top: '555',
          id: 98
        },
        {
          t: '',
          left: '260',
          top: '555',
          id: 98
        },
        {
          t: '',
          left: '10',
          top: '640',
          id: 3
        },
        {
          t: new Date().getFullYear(),
          left: '630',
          top: '670'
        },
        {
          t: new Date().getMonth() + 1,
          left: '730',
          top: '670'
        },
        {
          t: new Date().getDate(),
          left: '805',
          top: '670'
        }
      ],
      list: null,
      sum: 0,
      date: new Date(),
      cname: null,
      tombname: null
    }
  },
  created() {},
  methods: {
    print() {
      this.$print(this.$refs.print)
    }
    // get_print(v) {
    //   get_cemetery_data(v).then(res => {
    //     ['buyer_name', 'sex', 'job', 'birth', 'death', 'birth'].forEach((v, y) => {
    //       console.log(res.data.order[v])
    //       this.vert[y].t = res.data.order[v]
    //     })
    //     var arr = ['classify_id', 'ix', 'iy']
    //     arr.forEach((v, y) => {
    //       this.vert[y + 6].t = res.data.cemetery[v]
    //     })
    //   })
    // }
  }
}
</script>

