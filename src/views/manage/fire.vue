<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.search_data"
        clearable
        class="filter-item"
        style="width: 200px;"
        placeholder="请输入关键字"
      />
      <el-button

        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >查找</el-button>
      <el-button

        class="filter-item"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >添加</el-button>
    </div>

    <!-- 查询结果 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="正在查询中。。。"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="业务编号" prop="number" width="100">
        <template slot-scope="scope">
          {{ scope.row.numberplate }}{{ scope.row.number }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="逝者姓名" prop="o_name" />
      <el-table-column align="center" label="性别" prop="o_sex" width="80" />
      <el-table-column align="center" label="联系人" prop="o_linkman" />
      <el-table-column align="center" label="联系电话" prop="o_linkphone" />
      <el-table-column align="center" label="死亡原因" prop="o_reason" />
      <el-table-column align="center" label="悼念厅" prop="hall" />
      <el-table-column align="center" label="告别时间" prop="o_farewelltime" />
      <el-table-column align="center" label="状态" prop="state">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state | carFilter"> {{ scope.row.state = scope.row.state==null ? 1 : scope.row.state | cremationstate_stype }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" class-name="small-padding" width="360">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.state == 1"
            type="danger"
            size="mini"
            @click="handleFire(scope.row)"
          >开始火化</el-button>
          <el-button
            v-else
            type="info"
            size="mini"
            @click="handleQu(scope.row)"
          >取灰</el-button>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >办理</el-button>
          <el-button

            icon="el-icon-search"
            type="primary"
            size="mini"
            @click="handleSign(scope.row)"
          >详情</el-button>
          <el-button
            type="primary"
            size="mini"
            @click="handleDelete(scope.row)"
          >删除</el-button>
          <!-- <template v-if="scope.row.c_ifsignature == 0 || scope.row.c_ifsignature ==null">
            <el-button

              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="handleUpdate(scope.row)"
            >办理</el-button>
            <el-button

              icon="el-icon-search"
              type="primary"
              size="mini"
              @click="handleSign(scope.row)"
            >详情</el-button>
          </template>
          <template v-else>
            <el-button
              v-if="scope.row.c_state == 2"

              type="warning"
              size="mini"
              @click="handleOver(scope.row)"
            >结束火化</el-button>
            <el-button
              v-if="scope.row.c_state == 1"

              type="danger"
              size="mini"
              @click="handleFire(scope.row)"
            >开始火化</el-button>
            <template v-if="scope.row.c_state == 3">
              <el-button

                type="info"
                size="mini"
                @click="handleQu(scope.row)"
              >取灰</el-button>

            </template>
            <el-button
              v-if="scope.row.c_state == 4 || scope.row.c_state == 5"

              type="danger"
              plain
              size="mini"
            >已完结</el-button>
          </template> -->
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
    <!-- <el-dialog :close-on-click-modal="false" title="取灰信息" :visible.sync="dialogFormVisibleGo">
      <el-form
        ref="send"
        :inline="true"
        :model="send"
        status-icon
        label-position="left"
        label-width="100px"
      >
        <el-form-item label="逝者姓名" prop="name">
          <el-input v-model="send.name" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="send.sex" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="send.age" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="send.address" />
        </el-form-item>
        <el-form-item label="出车时间" prop="outtime">
          <el-date-picker
            v-model="send.outtime"
            style="width:185px"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="联系人" prop="linkman">
          <el-input v-model="send.linkman" />
        </el-form-item>
        <el-form-item label="联系电话" prop="linkphone">
          <el-input v-model="send.linkphone" />
        </el-form-item>

        <el-form-item label="司机" prop="driver">
          <el-input v-model="send.driver" />
        </el-form-item>
        <el-form-item label="接运类型" prop="recetype">
          <el-select v-model="send.recetype" placeholder="" clearable class="filter-item" style="width:185px">
            <el-option v-for="(item,value,index) in recetype" :key="index" :label="item" :value="Number(value)" />
          </el-select>
        </el-form-item>
        <el-form-item label="接运价格" prop="totalprice">
          <el-input v-model="send.totalprice" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="send.remark" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="createsSendData">自取</el-button>
        <el-button type="primary" @click="createGoData">确定</el-button>
        <el-button @click="dialogFormVisibleGo = false">取消</el-button>
      </div>
    </el-dialog> -->

    <!-- <el-dialog :close-on-click-modal="false" title="添加寄存" :visible.sync="dialogFormVisibleSave">
      <el-form
        ref="save"
        :inline="true"
        :model="save"
        status-icon
        label-position="left"
        label-width="100px"
      >
        <el-form-item label="寄存编号" prop="serial">
          <el-input v-model="save.serial" />
        </el-form-item>
        <el-form-item label="逝者姓名" prop="name">
          <el-input v-model="save.name" />
        </el-form-item>
        <el-form-item label="开始时间" prop="startime">
          <el-date-picker
            v-model="save.startime"
            style="width:185px"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="结束时间" prop="endtime">
          <el-date-picker
            v-model="save.endtime"
            style="width:185px"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="联系人" prop="linkman">
          <el-input v-model="save.linkman" />
        </el-form-item>
        <el-form-item label="联系电话" prop="linkphone">
          <el-input v-model="save.linkphone" />
        </el-form-item>
        <el-form-item label="联系地址" prop="linkaddress">
          <el-input v-model="save.linkaddress" />
        </el-form-item>
        <el-form-item label="寄存价格" prop="totalprice">
          <el-input v-model="save.totalprice" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createSaveData">确定</el-button>
        <el-button @click="dialogFormVisibleSave = false">取消</el-button>
      </div>
    </el-dialog> -->
    <el-dialog :close-on-click-modal="false" title="火化炉列表" :visible.sync="dialogFormVisibleper" append-to-body>
      <el-form
        ref="furnaces"
        :rules="furnaces"
        :inline="true"
        :model="furnace"
        status-icon
        label-position="left"
        label-width="100px"
      >
        <el-form-item label="请选择炉型" prop="setServer">
          <el-radio-group v-model="furnace.setServer">
            <el-radio
              v-for="(value, item) in getservice"
              :key="item"
              border
              :label="value.id"
            >{{ value.title }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleper = false">取消</el-button>
        <el-button type="primary" @click="updateDataPer()">确定</el-button>
      </div>
    </el-dialog>
    <!-- 添加或修改对话框 -->
    <el-dialog :close-on-click-modal="false" :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="基本信息" name="info">
          <div style="margin-bottom:10px">
            <el-button size="mini" type="primary" @click="getCard(0)">逝者信息</el-button>
            <el-button size="mini" type="primary" @click="getCard(1)">联系人信息</el-button>
            <el-button size="mini" type="primary" @click="resetForm">清空信息</el-button>
          </div>
          <el-form
            ref="dataForm"
            :rules="rules"
            :inline="true"
            :model="dataForm"
            status-icon
            label-position="left"
            label-width="100px"
          >
            <el-form-item label="逝者姓名" prop="name">
              <el-input v-model="dataForm.name" />
            </el-form-item>
            <el-form-item label="逝者性别" prop="sex">
              <el-select
                v-model="dataForm.sex"
                placeholder="选择性别"
                clearable
                class="filter-item"
                style="width:185px"
              >
                <el-option v-for="(item,index) in sex" :key="index" :label="item" :value="item" />
              </el-select>
            </el-form-item>
            <el-form-item label="逝者年龄" prop="age">
              <el-input v-model="dataForm.age" />
            </el-form-item>
            <el-form-item label="民族" prop="nation">
              <el-input v-model="dataForm.nation" />
            </el-form-item>
            <el-form-item label="身份证" prop="card">
              <el-input v-model="dataForm.card" />
            </el-form-item>
            <el-form-item label="户口所在地" prop="registered">
              <el-input v-model="dataForm.registered" />
            </el-form-item>
            <el-form-item label="死亡时间" prop="dietime">
              <el-date-picker
                v-model="dataForm.dietime"
                style="width:185px"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              />
            </el-form-item>
            <el-form-item label="死亡原因" prop="reason">
              <el-input v-model="dataForm.reason" />
            </el-form-item>

            <el-form-item label="联系人" prop="linkman">
              <el-input v-model="dataForm.linkman" />
            </el-form-item>
            <el-form-item label="联系人性别" prop="linksex">
              <el-select
                v-model="dataForm.linksex"
                placeholder="选择性别"
                clearable
                class="filter-item"
                style="width:185px"
              >
                <el-option v-for="(item,index) in sex" :key="index" :label="item" :value="item" />
              </el-select>
            </el-form-item>
            <el-form-item label="联系人身份证" prop="linkcard">
              <el-input v-model="dataForm.linkcard" />
            </el-form-item>
            <el-form-item label="联系人电话" prop="linkphone">
              <el-input v-model="dataForm.linkphone" />
            </el-form-item>
            <el-form-item label="逝者关系" prop="relation">
              <el-input v-model="dataForm.relation" />
            </el-form-item>
            <el-form-item label="牌号" prop="number">
              <el-input v-model="dataForm.number" />
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input v-model="dataForm.remark" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="选择服务" name="second">
          <service ref="server" @service_data="service_data" />
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog :close-on-click-modal="false" title="查看" :visible.sync="dialogFormVisibleInfo">
      <div class="bury_car">
        <h1 class="bury_car_h1">逝者信息</h1>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content">
              <p><span> 逝者姓名 : </span>{{ dataForm.o_name }}</p>
              <p><span> 逝者民族 : </span>{{ dataForm.o_nation }}</p>
              <p><span> 户口所在地 : </span>{{ dataForm.o_registered }}</p>
              <p><span> 联系人性别 : </span>{{ dataForm.o_linksex }}</p>
              <p><span> 承运人 : </span>{{ dataForm.haulier }}</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p><span> 逝者性别 : </span>{{ dataForm.o_sex }}</p>
              <p><span> 死亡原因 : </span>{{ dataForm.o_reason }}</p>
              <p><span> 死亡时间 : </span>{{ dataForm.o_dietime }}</p>
              <p><span> 联系人电话 : </span>{{ dataForm.o_linkphone }}</p>
              <p><span> 备注 : </span>{{ dataForm.remark }}</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p><span> 逝者年龄 : </span>{{ dataForm.o_age }}</p>
              <p><span> 身份证 : </span>{{ dataForm.o_card }}</p>
              <p><span> 联系人 : </span>{{ dataForm.o_linkman }}</p>
              <p><span> 与逝者关系 : </span>{{ dataForm.o_relation }}</p>
              <p><span> 操作员 : </span>{{ dataForm.operator }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-if="server ? server.length > 0 : false" class="bury_car" style="border:1px solid #23C6C8;margin-top:10px;">
        <h1 class="bury_car_h1" style="background:#23C6C8;color:#fff">所选服务</h1>
        <el-row :gutter="20">
          <div v-for="(item,index) in server" :key="index">
            <el-col :span="8">
              <div class="grid-content">
                <p><span> 服务名称 : </span>{{ item.title }}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <p><span> 数量 : </span>{{ item.number }}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <p><span> 合计 : </span>{{ item.totalprice }}</p>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <span v-if="record_sign" class="sign_" style="bottom:20px">签字确认：<img :src="record_sign" alt="" @click="dialogFormSign = true"> </span>
        <span style="color:red;font-size:14px;margin-right:10px;">应付总价：<b>{{ totalprice }}</b> 元</span>
        <el-button type="primary" @click="sign_open()">签字</el-button>
        <el-button type="primary" @click="handleticket()">发票打印</el-button>
        <el-button type="primary" @click="handlePrint()">服务打印</el-button>
        <el-button @click="dialogFormVisibleInfo = false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog :close-on-click-modal="false" title="签名" class="sign_dialog" :visible.sync="dialogFormVisibleSign">
      <sign ref="sign" @cancel="cancel" @imgData="imgData" />
    </el-dialog>
    <fire v-show="false" ref="fire_" />
    <el-dialog
      :close-on-click-modal="false"
      class="dialog"
      :visible.sync="dialogFormVisiblegm"
      top="1vh"
      width="750px"
      append-to-body
    >
      <ticket ref="ticket_" />
    </el-dialog>
  </div>
</template>
<script>
import {
  commonCremation,
  infoCremation,
  addfire,
  listfire,
  editfire,
  signfire,
  statefire,
  checkfire,
  sendfire,
  cremationsign,
  cremationdel,
  createcarcommon
} from '@/api/manage'
import axios from 'axios'
import Pagination from '@/components/Pagination'
import service from '@/components/Service'
import ticket from '@/components/Drag/fire_ticket'
import { vuexData } from '@/utils/mixin'
import { listfurnace } from '@/api/setting'
import sign from '@/components/Sign'
import fire from '@/components/Print/fire'
export default {
  name: 'VueGarden',
  components: { Pagination, service, sign, fire, ticket },
  mixins: [vuexData],
  data() {
    return {
      list: null,
      total: 0,
      recetype: null,
      // signature: '',
      // ifsignature: '',
      signatureid: '',
      record_sign: '',
      record_ifsign: '',
      activeName: 'info',
      totalprice: '',
      dialogFormVisibleper: false,
      dialogFormVisibleGo: false,
      dialogFormVisibleInfo: false,
      // dialogFormVisibleSave: false,
      dialogFormVisiblegm: false,
      dialogFormVisibleSign: false,
      dialogFormSign: false,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        search_data: '',
        sort: 'add_time',
        order: 'desc'
      },
      sex: ['男', '女'],
      send: {
        name: '',
        sex: '',
        age: '',
        address: '',
        recetype: '',
        outtime: null,
        linkman: '',
        totalprice: '',
        linkphone: '',
        driver: '',
        cid: '',
        c_id: '',
        operator: '',
        remark: '',
        oid: ''
      },
      print_id: '',
      go: {
        id: '',
        c_id: '',
        state: ''
      },
      // save: {
      //   name: '',
      //   serial: '',
      //   startime: null,
      //   endtime: null,
      //   signature: '',
      //   linkman: '',
      //   linkphone: '',
      //   linkaddress: '',
      //   operator: '',
      //   totalprice: '',
      //   c_id: '',
      //   oid: ''
      // },
      dataForm: {
        name: '',
        sex: '',
        age: '',
        card: '',
        registered: '',
        reason: '',
        linkman: '',
        linkcard: '',
        number: '',
        relation: '',
        dietime: null,
        linksex: '',
        nation: '',
        haulier: '',
        linkphone: '',
        operator: '',
        server: null,
        remark: '',
        oid: '',
        id: ''
      },
      setServer: [],
      getservice: [],
      server: null,
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '办理火化',
        create: '创建'
      },
      furnace: {
        setServer: '',
        state: '',
        id: '',
        oid: ''
      },
      rules: {

      },
      furnaces: {
        setServer: [
          { required: true, message: '请至少选择一个火化炉', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.getList()
    createcarcommon().then(res => {
      this.recetype = res.data.recetype
    })
  },
  methods: {
    getList() {
      this.listLoading = true
      listfire(this.listQuery)
        .then(res => {
          this.list = res.data.data
          this.total = res.data.total || 0
          this.listLoading = false
        })
        .catch(() => {
          this.list = []
          this.total = 0
          this.listLoading = false
        })
    },
    getCommon(v) {
      commonCremation().then(res => {
        this.server = res.data.services
        const data = {
          type: v,
          server: this.server
        }
        this.$refs.server.showService(data)
      })
    },
    getCard(val) {
      var url = 'http://127.0.0.1:38088/card=idcard'
      var params = ''
      axios
        .post(url, params)
        .then(res => {
          if (res.data.code == 0) {
            var info = res.data.IDCardInfo
            this.$notify.success({
              title: '成功',
              message: '身份信息获取成功'
            })
            if (val == 0) {
              this.dataForm.name = info.name
              this.dataForm.sex = info.sex
              this.dataForm.card = info.cardID
              this.dataForm.registered = info.address
            } else {
              this.dataForm.linkman = info.name
              this.dataForm.linksex = info.sex
              this.dataForm.linkcard = info.cardID
            }
          } else {
            this.$notify.error({
              title: '获取身份信息失败',
              message: res.msg
            })
          }
        })
        .catch(res => {
          this.$notify.error({
            title: '未检测到系统设备',
            message: '网络错误'
          })
        })
    },
    handleSign(row) {
      this.print_id = row.id
      this.dataForm = Object.assign({}, row)
      const data = { id: row.id, oid: row.oid, type: 2 }
      infoCremation(data).then(res => {
        var editRow = []
        res.data.services.forEach((v, k) => {
          editRow.push(v.services)
        })
        this.server = [].concat.apply([], editRow)
        this.dialogFormVisibleInfo = true
        this.signatureid = row.id
        this.totalprice = res.data.services_totalprice
        this.record_sign = row.signature
        this.record_ifsign = row.ifsignature
      })
    },
    service_data(data) {
      this.dataForm.server = data
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetForm() {
      this.dataForm = {
        name: '',
        sex: '',
        age: '',
        card: '',
        registered: '',
        reason: '',
        linkman: '',
        relation: '',
        linkphone: '',
        dietime: null,
        nation: '',
        number: '',
        linksex: '',
        linkcard: '',
        operator: '',
        remark: '',
        haulier: '',
        server: null
      }
    },
    handleticket() {
      this.dialogFormVisiblegm = true
      // this.$nextTick(() => {
      //   this.$refs.ticket_.print()
      // })
    },
    createGoData() {
      sendfire(this.send).then(res => {
        if (res.code == 0) {
          this.getList()
          this.dialogFormVisibleGo = false
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        }
      })
    },
    createsSendData() {
      const data = {
        id: this.go.id,
        c_id: this.go.c_id,
        state: this.go.state
      }
      statefire(data).then(res => {
        if (res.code == 0) {
          this.getList()
          this.dialogFormVisibleGo = false
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        }
      })
    },
    imgData(v) {
      this.record_sign = v
      const data = {
        id: this.print_id,
        signature: v
      }
      cremationsign(data)
    },
    sign_open() {
      this.dialogFormVisibleSign = true
      this.$refs.sign.overwrite()
    },
    cancel() {
      this.dialogFormVisibleSign = false
    },
    solo(arr) {
      var editRow = []
      arr.forEach((v, k) => {
        editRow.push(v.services)
      })
      return [].concat.apply([], editRow)
    },
    handlePrint() {
      const data = { oid: this.dataForm.oid, id: this.dataForm.id, type: 2 }
      infoCremation(data).then(res => {
        var server = []
        server = [].concat.apply([], res.data.services)
        this.serverPrint = this.solo(server)
        const data = {
          list: res.data.list,
          server: this.serverPrint
        }
        this.$refs.fire_.init(data)
      })
    },
    handleQu(v) {
      this.$confirm('是否取灰?', '提示', {
        confirmButtonText: '取灰',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const data = {
          id: v.id,
          oid: v.oid,
          fid: v.fid,
          state: 3
        }
        statefire(data).then(res => {
          if (res.code == 0) {
            this.getList()
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '操作取消'
        })
      })
    },
    // handleSave(row) {
    //   this.save = Object.assign({}, row)
    //   this.save.serial = ''
    //   this.dialogFormVisibleSave = true
    // },
    // createSaveData() {
    //   const data = {
    //     name: this.save.name,
    //     startime: this.save.startime,
    //     signature: '',
    //     serial: this.save.serial,
    //     endtime: this.save.endtime,
    //     linkman: this.save.linkman,
    //     linkphone: this.save.linkphone,
    //     linkaddress: this.save.linkaddress,
    //     operator: this.info.realname,
    //     totalprice: this.save.totalprice,
    //     c_id: this.save.c_id,
    //     oid: this.save.c_id
    //   }
    //   checkfire(data).then(res => {
    //     if (res.code == 0) {
    //       this.getList()
    //       this.$message({
    //         type: 'success',
    //         message: '操作成功!'
    //       })
    //       this.dialogFormVisibleSave = false
    //     }
    //   })
    // },
    handleOver(row) {
      this.$confirm('火化是否完成?', '提示', {
        confirmButtonText: '完成',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const data = {
          id: row.id,
          c_id: row.c_id,
          state: row.c_state
        }
        statefire(data).then(res => {
          if (res.code == 0) {
            this.getList()
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '操作取消'
        })
      })
    },
    updateDataPer() {
      this.$refs['furnaces'].validate((valid) => {
        if (valid) {
          const data = {
            crepelope: this.info.id,
            fid: this.furnace.setServer,
            state: this.furnace.state,
            id: this.furnace.id,
            oid: this.furnace.oid
          }
          statefire(data).then(res => {
            if (res.code == 0) {
              this.getList()
              this.$message({
                type: 'success',
                message: '操作成功!'
              })
            }
            this.dialogFormVisibleper = false
          })
        }
      })
    },
    handleFire(row) {
      this.furnace.setServer = ''
      this.furnace.state = row.state
      this.furnace.id = row.id
      this.furnace.oid = row.oid
      this.dialogFormVisibleper = true
      listfurnace().then(res => {
        this.getservice = res.data.data
        this.$forceUpdate()
      })
      // this.$prompt('请输入火化牌号', '信息', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputPattern: /^[0-9]*$/,
      //   inputErrorMessage: '请输入数字'
      // }).then(({ value }) => {
      //   const data = {
      //     id: row.id,
      //     c_id: row.c_id,
      //     state: row.c_state,
      //     number: value
      //   }
      //   statefire(data).then(res => {
      //     if (res.code == 0) {
      //       this.getList()
      //       this.$message({
      //         type: 'success',
      //         message: '操作成功!'
      //       })
      //     }
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '操作取消'
      //   })
      // })
    },
    handleCreate() {
      this.resetForm()
      this.getCommon(0)
      this.activeName = 'info'
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        const data = {
          server: this.server
        }
        this.$refs.server.showService(data)
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.dataForm.operator = this.info.realname
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          addfire(this.dataForm)
            .then(res => {
              this.getList()
              this.dialogFormVisible = false
              this.$notify.success({
                title: '成功',
                message: '添加成功'
              })
            })
            .catch(res => {
              this.$notify.error({
                title: '失败',
                message: res.msg
              })
            })
        }
      })
    },
    handleClick() {

    },
    SignSend() {
      const data = { signature: this.record_sign, id: this.signatureid }
      signfire(data).then(res => {
        if (res.code == 0) {
          this.$notify.success({
            title: '成功',
            message: '操作成功'
          })
          this.getList()
          this.dialogFormVisibleInfo = false
        } else {
          this.$notify.error({
            title: '失败',
            message: res.msg
          })
        }
      })
    },
    handleUpdate(row) {
      this.dataForm = Object.assign({}, row)
      this.dataForm = {
        name: row.o_name || '',
        sex: row.o_sex || '',
        age: row.o_age || '',
        card: row.o_card || '',
        registered: row.o_registered || '',
        reason: row.o_reason || '',
        dietime: row.o_dietime || '',
        linkman: row.o_linkman || '',
        relation: row.o_relation || '',
        linkphone: row.o_linkphone || '',
        nation: row.o_nation || '',
        number: row.number || '',
        linksex: row.o_linksex || '',
        operator: row.operator || '',
        c_remark: row.remark || '',
        haulier: row.haulier || '',
        id: row.id || '',
        oid: row.oid || '',
        server: null
      }
      this.getCommon(1)
      const data = { id: row.id, oid: row.oid, type: 1 }
      infoCremation(data).then(res => {
        this.$refs.server.editService(res.data.services)
      })
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.dataForm.operator = this.info.realname
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          editfire(this.dataForm)
            .then(() => {
              this.getList()
              this.dialogFormVisible = false
              this.$notify.success({
                title: '成功',
                message: '更新成功'
              })
            })
            .catch(res => {
              this.$notify.error({
                title: '失败',
                message: res.msg
              })
            })
        }
      })
    },
    handleDelete(row) {
      this.$confirm('您确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const data = { id: row.oid }
        cremationdel(data)
          .then(res => {
            const index = this.list.indexOf(row)
            this.list.splice(index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }

  }
}
</script>

