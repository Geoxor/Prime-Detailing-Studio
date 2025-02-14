<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Header />
  <Sidebar />
  <router-view />
  <Footer />
</template>

<style lang="postcss">
@font-face {
  font-family: lexend_zetta;
  src: url('./assets/fonts/lexend_zetta.ttf');
}
#app {
  @apply bg-black;
}

</style>
