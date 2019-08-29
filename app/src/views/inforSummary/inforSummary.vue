<template>
<div class="inforSummaryBox">
  <Row>
    <Col span="5" class="inforSummaryLeft">
      <h4>个人基本信息</h4>
      <div class="headPortrait">
        <img src="../../../public/images/dhssh.png" alt="">
      </div>
      <Form>
        <div class="formItem">
          <span>姓名</span>
          <Input type="text" class="shortInput" ></Input>
        </div>
         <div class="formItem">
           <span>性别</span>
           <Select class="shortInput">
             <Option value="0">男</Option>
             <Option value="1">女</Option>
           </Select>
         </div>
        <div class="formItem">
          <span>年龄</span>
          <Input type="text" class="shortInput"></Input>
        </div>
        <div class="formItem">
          <span>出生日期</span>
          <Input type="text" class="longInput"></Input>
        </div>
        <div class="formItem">
          <span>身份证号</span>
          <Input type="text" class="longInput"></Input>
        </div>
        <div class="formItem">
          <span>本人电话</span>
          <Input type="text" class="longInput"></Input>
        </div>
        <div class="formItem">
          <span>联系人</span>
          <Input type="text" class="longInput"></Input>
        </div>
        <div class="formItem">
          <span>联系人电话</span>
          <Input type="text" class="longInput"></Input>
        </div>
        <div class="formItem">
          <span>户籍地址</span>
          <Input type="textarea" class="inforSummanyLocation" :autosize="{minRows: 2,maxRows: 5}" ></Input>
        </div>
      </Form>
    </Col>
    <Col span="19" class="inforSummaryRight">
      <div class="inforSummaryRightContent">
        <Tabs value="name1">
          <TabPane label="健康体检" name="name1">
            <jktj></jktj>
          </TabPane>
          <TabPane label="自理能力" name="name2">标签二的内容</TabPane>
          <TabPane label="中医体质" name="name3">标签三的内容</TabPane>
          <TabPane label="心电图" name="name4">标签四的内容</TabPane>
          <TabPane label="B超" name="name5">标签五的内容</TabPane>
          <Button @click="handleInforSummanySave()"  id="handleInforSummanySave" type="primary" size="small" slot="extra">保存</Button>
        </Tabs>
      </div>
    </Col>
  </Row>
</div>
</template>

<script>
import jktj from './jktj/jktj'
export default {
  name: 'inforSummary',
  components: { jktj },
  data () {
    return {

    }
  },
  methods: {
    handleInforSummanySave () {

    }
  }
}
</script>

<style scoped>
.headPortrait{
   text-align: center;
   vertical-align: middle;
}
.headPortrait img{
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;

}
.inforSummaryLeft{
  background: white;
}
.inforSummaryLeft span{
  font-weight: 700;
}
.inforSummaryLeft .formItem{
  margin: 10px 5px;
}
.inforSummaryLeft h4{
  margin-top: 10px;
  text-align: center;
  background:rgba(236,249,255,1);
}
.shortInput{
  width: 143px;
}
.longInput{
 width: 179px;margin-left: 32px;
}
.inforSummanyLocation{
  width: 179px;
  margin-left: 32px;
}
.inforSummaryLeft span{
  margin-left: 32px;
  margin-right: 10px;
}
.headPortrait{
  width: 156px;
  height: 105px;
  background:rgba(236,249,255,1);
  background: #E9FBFF;
  margin:10px auto;
}
.inforSummaryRightContent{
  width:1058px;
  height:680px;
  background:rgba(255,255,255,1);
  border-radius:4px 4px 0px 0px;
  margin: 8px 0 0 10px;
}
#handleInforSummanySave{
   margin:7px 40px;
}

</style>
