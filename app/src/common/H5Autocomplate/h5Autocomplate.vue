<template>
  <div>
    <input type="text" list="ide" :value="value.data" @input="$emit('input', $event.target.value)" />
    <datalist id="ide">
      <option v-for="item in value.option" :key="item" :value="item"/>
    </datalist>
  </div>
</template>

<script>

export default {
  name: 'h5Autocomplate',
  props: ['value'],
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped>
  input[type="text"]{
    display: inline-block;
    width: 114px;
    height: 31px;
    border: 1px solid #EEEEEE;
    color: #067af2;
    font-weight: 600;
    border-bottom: 1px solid #747577;
    background-color: #fafafa;
  }
 

</style>
