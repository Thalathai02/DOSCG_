<template>
<div id="app">
  <header> <NavBAR/></header>
 <router-view/>  
  <footer>
      <Footer/>
  </footer>
  </div>
</template>

<script>
import NavBAR from '@/components/navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { NavBAR,Footer }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
