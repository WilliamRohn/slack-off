<template>
  <div class="com_2">
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
    console.log('com_2>>>>beforeCreate');
  },
  created() {
    console.log('com_2>>>>created');
  },
  beforeMount() {
    console.log('com_2>>>>beforeMount');
  },
  mounted() {
    console.log('com_2>>>>mounted');
  },
  beforeUpdate() {
    console.log('com_2>>>>beforeUpdate');
  },
  updated() {
    console.log('com_2>>>>updated');
  },
  beforeDestory() {
    console.log('com_2>>>>beforeDestory');
  },
  destoryed() {
    console.log('com_2>>>>destoryed');
  },
  activated(){
    console.log('com_2>>>>activated');
  },
  deactivated(){
    console.log('com_2>>>>deactivated');
  },
}
</script>

<style lang="scss" scoped>
.com_2{
  width: 100%;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
    background: url('../../../assets/imgs/login_bg_2.JPG') no-repeat 100%;
    background-size: 100%;
  }
}
</style>