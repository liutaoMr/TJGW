<template>
  <div class="handleBox">
    <person-type-nav></person-type-nav>
    <router-view></router-view>
  </div>
</template>

<script>
    import HeadNav from "../../common/nav/headNav";
    import PersonTypeNav from "../../common/personTypeNav/personTypeNav";
    import heightWeight from "../heightWeight/heightWeight"
    export default {
        name: "handle",
      components: {PersonTypeNav, HeadNav,heightWeight}
    }
</script>

<style scoped>
</style>
