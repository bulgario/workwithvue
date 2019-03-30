<template>
  <v-app>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<style>
  @import './assets/css/style.css';
  @import './assets/css/reset.css';
</style>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
