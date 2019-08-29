<template>
  <Content>
    <information-collection></information-collection>
    <barcode-handle></barcode-handle>
  </Content>
</template>
<script>
  import InformationCollection from './InformationCollection'
  import BarcodeHandle from './barcodeHandle/barcodeHandle'
  export default {
    mounted(){
    },
    data () {
      return {

      }
    },
    components: {
      BarcodeHandle,
      InformationCollection,
    },

  }
</script>

<style>
</style>
