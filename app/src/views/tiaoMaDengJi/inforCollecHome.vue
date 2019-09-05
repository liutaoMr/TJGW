<template>
  <Content>
    <information-collection></information-collection>
    <barcode-handle></barcode-handle>
  </Content>
</template>
<script>
import InformationCollection from './InformationCollection'
import BarcodeHandle from './tiaoMaCaoZuo/barcodeHandle'
export default {
  mounted () {
  },
  data () {
    return {

    }
  },
  components: {
    BarcodeHandle,
    InformationCollection
  }

}
</script>

<style scoped>
.ivu-form .ivu-form-item-label{
	font-size: 15px!important;
}
.ivu-input {
	font-size: 15px!important;
}
	.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
	   font-size: 15px!important;
	}
</style>
