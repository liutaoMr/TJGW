<template>
  <div class="handleBox">
    <person-type-nav></person-type-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import PersonTypeNav from '../../common/personTypeNav/personTypeNav'
export default {
  name: 'handle',
  components: { PersonTypeNav }
}
</script>

<style scoped>
  .handleBox{
    background: white;
  }
</style>
