<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import HeadNav from './common/nav/headNav'
export default {
  components: { HeadNav }
}

</script>
<style>
 .ivu-form .ivu-form-item-label{
   font-size: 14px!important;
 }

</style>
