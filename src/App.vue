<template>
<header-component></header-component>
 <router-view></router-view>
</template>

<script>

import HeaderComponent from './components/sections/HeaderComponent.vue'

export default {
  name: 'App',
  components : {
    HeaderComponent,
  }
 
}
</script>

<style>

</style>
