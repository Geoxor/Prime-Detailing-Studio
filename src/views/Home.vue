<template>
  <div class="home">
    <div class="h-full w-full">
      <video disable-picture-in-picture="true" src="/bg.webm" autoplay muted loop oncontextmenu="return false;"
        class="opacity-20 select-none  object-cover h-full w-full" />
      <span class="absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion ">
        <transition name="slide">
          <Pds v-if="showLogo" class="text-white w-64 sm:w-96 md:w-128 xl:w-168 h-auto " />
        </transition>
        <ScrollAnimation class="absolute -bottom-80 left-1/2 transform-gpu -translate-x-1/2 " />
      </span>
    </div>
  </div>
  <Sponsors />
  <Hashtags />
</template>

<script setup lang="ts">
import Sponsors from '../components/Sponsors.vue'
import Hashtags from '../components/Hashtags.vue'
import ScrollAnimation from '../components/ScrollAnimation.vue'
import Pds from '../assets/pds_logo_colorless.vue';

import { onMounted, ref } from "vue";

const showLogo = ref(false);

onMounted(() => {
  setTimeout(() => {
    showLogo.value = true;
  }, 50);
});

</script>

<style scoped lang="postcss">
.home {
  @apply h-100vh;
}

.slide-enter-active,
.slide-leave-active {
  @apply duration-500 opacity-100 translate-y-0;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0 transform-gpu translate-y-24;
}
</style>