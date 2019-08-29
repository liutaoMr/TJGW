<template>
  <div class="gwtjb">
    <div class="gwtjbTitle">国家基本公共卫生服务项目健康体检表</div>
    <Row class="gwtjbHead">
      <Col span="12">
        <span>姓名：</span><span>零零发</span>
      </Col>
      <Col span="12">
        <span>编号：</span><span>007</span>
      </Col>
    </Row>
    <table>
      <tbody>
        <tr>
          <td>体检日期</td>
          <td>2019-10-29</td>
          <td>责任医生</td>
          <td>王某某</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'jktj',
  data () {
    return {

    }
  },
  created () {
    // 在这里通过父组件传来的标识来请求数据。
    console.log('公卫体检加载数据')
  }
}
</script>

<style scoped>
  /* 公卫体检Css */
  table,tr,td{
      border:1px solid #ccc;
      border-collapse:collapse;
  }
  .gwtjb{
    text-align: center;
   }
   .gwtjbTitle{
     font-size: 18px;
     font-weight: 800;
   }
   .gwtjbHead{
     font-weight: 800;
   }
</style>
