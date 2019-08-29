<template>
  <div>
     <div class="cardBox">
      <Card class="Card">
        <div class="content">
          <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
            <Row>
              <Col span="4">生活方式</Col>
              <Col span="1" offset="19">
                <Button type="primary">保存</Button>
              </Col>
            </Row>
          </div>
          <div class="lifeStyleTableBox">
            <table class="liefStyleTable">
              <tr>
                 <!--体育锻炼-->
                <td width="10%" class="td_left">体育锻炼</td>
                <td width="90%">
                  <div class="dlpl_table_item">
                    <span>锻炼频率：</span>
                     <Select v-model="dlpl" style="width:120px;" @on-change='dlplHandle($event)'>
                       <Option value="0">不锻炼</Option>
                       <Option value="1">每天</Option>
                       <Option value="2">每周一次以上</Option>
                       <Option value="3">偶尔</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite" >
                    <span :class="{needValue:dlpl!=='0'&&mcdlsj.data==''}">每次锻炼时间：</span>
                    <input :disabled="dlpl=='0'" type="text" list="mcdlsj" v-model="mcdlsj.data" @input="$emit('input', $event.target.value)"/>
                    <datalist id="mcdlsj" >
                      <option v-for="item in mcdlsj.option" :key="item" :value="item"/>
                    </datalist>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span :class="{needValue:dlpl!=='0'&&jcdlsj.data==''}">坚持锻炼时间：</span>
                     <input :disabled="dlpl=='0'" type="text" list="jcdlsj" v-model="jcdlsj.data" />
                     <datalist id="jcdlsj">
                       <option v-for="item in jcdlsj.option" :key="item" :value="item"/>
                     </datalist>
                  </div>
                  <div class="dlpl_table_item">
                    <CheckboxGroup size="large" v-model='dlfs' :class="{needValue:dlpl!=='0'&&dlfs==''}">
                      <span>锻炼方式：</span>
                      <Checkbox label="散步"></Checkbox>
                      <Checkbox label="跑步"></Checkbox>
                      <Checkbox label="跳舞"></Checkbox>
                      <Checkbox label="太极拳"></Checkbox>
                    </CheckboxGroup>
                  </div>
                  <div class="dlpl_table_item">
                     <Input  type="text" v-model="dlfsOther" placeholder="其他" @on-blur="dlfsOtherHandle ()"></Input>
                  </div>
                </td>
              </tr>
              <tr>
                <!--饮食习惯-->
                <td class="td_left">饮食习惯</td>
                <td>
                  <div class="dlpl_table_item">
                    <span>饮食习惯：</span>
                     <Select style="width:120px;" v-model="ysxg" >
                       <Option value="0">荤素搭配</Option>
                       <Option value="1">荤食为主</Option>
                       <Option value="2">素食为主</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item">
                    <CheckboxGroup size="large" v-model="kwph" >
                      <span>口味偏好：</span>
                      <Checkbox label="嗜油"></Checkbox>
                      <Checkbox label="嗜盐"></Checkbox>
                      <Checkbox label="嗜糖"></Checkbox>
                    </CheckboxGroup>
                  </div>
                </td>
              </tr>
              <tr>
                <!--吸烟状况-->
                <td class="td_left">吸烟状况</td>
                <td>
                  <div class="dlpl_table_item">
                    <span>吸烟状况：</span>
                     <Select style="width:120px;" v-model="xyzk" @on-change="xyzkHandle()">
                       <Option value="0">从不吸烟</Option>
                       <Option value="1">戒烟</Option>
                       <Option value="2">吸烟</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>日吸烟量（支）：</span>
                     <input type="text" list="rxyl" v-model="rxyl.data" />
                     <datalist id="rxyl">
                       <option v-for="item in rxyl.option" :key="item" :value="item"/>
                     </datalist>
                  </div>
                  <span class="onespan">开始吸烟年龄：</span>
                  <div class="dlpl_table_item">
                     <Input type="text" style="width:120px;" v-model="ksxyAge"></Input>
                  </div>
                  <span class="onespan">戒烟年龄：</span>
                  <div class="dlpl_table_item">
                     <Input type="text" style="width:120px;" v-model="jyAge" ></Input>
                  </div>
                </td>
              </tr>
              <tr>
                <!--饮酒情况-->
                <td style="height: 120px; font-size: 16px;font-weight: 700;text-align: center;">饮酒情况</td>
                <td>
                  <div class="dlpl_table_item">
                    <span>饮酒频率：</span>
                     <Select style="width:120px;" v-model="yjpl" @on-change="yjplHandle()" >
                       <Option value="0">从不</Option>
                       <Option value="1">经常</Option>
                       <Option value="2">偶尔</Option>
                       <Option value="3">每天</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>日饮酒量（两）：</span>
                     <input type="text" list="ryjl" v-model="ryjl.data" />
                     <datalist id="ryjl">
                       <option v-for="item in ryjl.option" :key="item" :value="item"/>
                     </datalist>
                  </div>
                  <div class="dlpl_table_item">
                    <span>是否戒酒：</span>
                     <Select style="width:120px;" v-model="sfjj" >
                       <Option value="0">已戒酒</Option>
                       <Option value="1">未戒酒</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>开始饮酒年龄：</span>
                    <Input type="text" style="width:120px;" v-model="ksyjAge" ></Input>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>戒酒年龄：</span>
                    <Input type="text" style="width:120px;" v-model="jjAge" ></Input>
                  </div>
                  <div class="dlpl_table_item">
                    <span>近一年是否醉酒：</span>
                     <Select style="width:120px;" v-model="jynsfzj" >
                       <Option value="0">是</Option>
                       <Option value="1">否</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item">
                    <CheckboxGroup size="large" v-model="yjzl">
                      <span>饮酒种类：</span>
                      <Checkbox label="白酒"></Checkbox>
                      <Checkbox label="啤酒"></Checkbox>
                      <Checkbox label="红酒"></Checkbox>
                      <Checkbox label="黄酒"></Checkbox>
                    </CheckboxGroup>
                  </div>
                  <div class="dlpl_table_item">
                     <Input type="text" placeholder='其他'></Input>
                  </div>
                </td>
              </tr>
              <tr>
                <!--职业病危害因素接触史 -->
                <td style="height: 240px; font-size: 16px;font-weight: 700;text-align: center;">职业病危害因素接触史</td>
                <td >
                  <div class="dlpl_table_item">
                     <Select style="width:60px;">
                       <Option value="0">有</Option>
                       <Option value="1">无</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item">
                    <span>工种：</span>
                    <Input type="text" style="width:120px;"></Input>
                  </div>
                  <div class="dlpl_table_item">
                    <span>从业时间（年）：</span>
                    <Input type="text" style="width:120px;"></Input>
                  </div>
                  <div class="dwzl">
                    <Row>
                      <Col span="4">
                        <span class="onespan">毒物种类:</span>
                        </Col>
                      <Col span="16">
                        <div class="dwzlType" v-for="(item,index) in dwzl">
                          <span style="width: 80px;display: inline-block;">{{item.typeText}}</span>
                          <Input type="text" v-model="item.type" style='width: 120px;margin-left: 10px;'></Input>
                          <span style="width: 80px;display: inline-block;margin-left: 10px;">防护措施</span>
                          <Input type="text" v-model="item.fhcs" style='width: 120px;'></Input>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Card>
     </div>
     {{dlfs}}
     <p>口味偏好{{kwph}}</p>
     <p>每次锻炼频率{{mcdlsj.data}}</p>
  </div>
</template>

<script>
export default {
  name: 'lifeStyle',
  data () {
    return {
      // 锻炼频率
      dlpl: '0',
      // 锻炼方式
      dlfs: ['散步'],
      dlfsOther: '',
      mcdlsj: {
        data: '',
        option: [15, 20, 30, 40, 50, 60, 70, 80, 120]
      },
      jcdlsj: {
        data: '',
        option: [0.08, 0.17, 0.25, 0.5, 0.75, 1, 2, 3]
      },
      // 饮食习惯
      ysxg: '0',
      // 口味偏好
      kwph: ['嗜油'],
      // 吸烟状况
      xyzk: '0',
      rxyl: {
        data: '',
        option: [5, 10, 15, 20, 30, 40, 50, 60]
      },
      ksxyAge: '18',
      jyAge: '20',
      // 饮酒情况
      yjpl: '0',
      ryjl: {
        data: '',
        option: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]
      },
      sfjj: '0',
      ksyjAge: '9',
      jjAge: '10',
      jynsfzj: '0',
      yjzl: ['红酒'],

      // 职业病危害防护
      dwzl: [
        { typeText: '粉尘', type: '1', fhcs: '无' },
        { typeText: '放射物质', type: '2', fhcs: '' },
        { typeText: '物理因素', type: '3', fhcs: '' },
        { typeText: '化学物质', type: '4', fhcs: '' },
        { typeText: '其他', type: '5', fhcs: '' }
      ]
    }
  },
  methods: {
    dlfsOtherHandle () {
      const _this = this
      if (_this.dlfsOther == '') { return }
      if (!_this.dlfs.includes(_this.dlfsOther)) { _this.dlfs.push(_this.dlfsOther) }
    },
    // 不锻炼选项清空值
    dlplHandle () {
      const that = this
      if (that.dlpl == '0') {
        console.log('不锻炼')
        that.dlfs = []
        that.dlfsOther = ''
        that.$set(that.mcdlsj, 'data', '')
        that.$set(that.jcdlsj, 'data', '')
      }
    },
    // 不吸烟清空值
    xyzkHandle () {
      const that = this
      if (that.xyzk == '0') {
        that.$set(that.rxyl, 'data', '')
        that.ksxyAge = ''
        that.jyAge = ''
      }
    },
    // 不饮酒清空值
    yjplHandle() {
     const that = this
     if (that.yjpl == '0') {
       that.$set(that.ryjl, 'data', '')
       that.sfjj = ''
       that.ksyjAge = ''
       that.jjAge = ''
       that.jynsfzj = ''
       that.yjzl = []
     }
    }
  },
  watch: {
    kwph: {
      handler (newValue) {
        const that = this
        if (newValue.length > 2) {
          that.$delete(that.kwph, `0`)
        }
      }
    }
  },
  mounted () {

  }

}
</script>

<style scoped>
table,tr,td{
  font-weight: 700;
  font-size: 14px;
  border:1px solid #ccc;
  border-collapse:collapse;
}
.lifeStyleTableBox{
  margin:15px 0 0 20px;
}
.liefStyleTable{
  width: 100%;
}
.liefStyleTable .td_left{
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
.liefStyleTable tr{
  height: 52px;
}
.dlpl_table_item{
  margin-top:8px;
  margin-left: 8px;
  display:inline-block;
}
.selectWhite input[type="text"]{
    border-radius: 4px;
    display: inline-block;
    width: 114px;
    height: 31px;
    border: 1px solid #EEEEEE;
    color: #067af2;
    font-weight: 600;
    border-bottom: 1px solid #747577;
    background-color: #fafafa;
  }
  .onespan{
    margin-left:8px ;
  }
  .dwzl{
    margin-top: 10px;
  }
  .dwzlType{
    margin-top: 3px;
    margin-left: 10px;
    display: inline-block;
  }
  .needValue{
    background: red;
  }
</style>
