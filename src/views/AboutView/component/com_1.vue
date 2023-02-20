<template>
  <div class="com_1">
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  beforeCreate() {
    console.log('com_1>>>>beforeCreate');
  },
  created() {
    console.log('com_1>>>>created');
  },
  beforeMount() {
    console.log('com_1>>>>beforeMount');
  },
  mounted() {
    console.log('com_1>>>>mounted');
  },
  beforeUpdate() {
    console.log('com_1>>>>beforeUpdate');
  },
  updated() {
    console.log('com_1>>>>updated');
  },
  beforeDestory() {
    console.log('com_1>>>>beforeDestory');
  },
  destoryed() {
    console.log('com_1>>>>destoryed');
  },
  activated(){
    console.log('com_1>>>>activated');
  },
  deactivated(){
    console.log('com_1>>>>deactivated');
  },
}
</script>

<style lang="scss" scoped>
.com_1{
  width: 100%;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
    background: url('../../../assets/imgs/login_bg.JPG') no-repeat 100%;
    background-size: 100%;
  }
}
</style>