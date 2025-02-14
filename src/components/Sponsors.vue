<template>
  <div
    class="bg-[#1A1A1A] overflow-hidden overflow-x-auto flex md:flex-row flex-col items-center text-white py-16 pr-8 px-8 sm:px-16 xl:px-16 2xl:px-32 gap-16 xl:gap-32">
    <a target="_blank" href="https://www.stek-usa.com/">
      <StekIcon class="h-48 w-48" />
    </a>
    <a target="_blank" href="https://lakecountrymfg.com/">
      <LakeCountryLogo class="h-48 w-48" />
    </a>
    <a target="_blank" href="https://gyeon.co/">
      <GyeonIcon class="h-48 w-48" />
    </a>
  </div>
</template>

<script setup lang="ts">
import StekIcon from '../assets/icons/StekIcon.vue';
import GyeonIcon from '../assets/icons/GyeonIcon.vue';
import LakeCountryLogo from '../assets/icons/LakeCountryLogo.vue';
</script>

<style scoped lang="postcss">
a {
  @apply transform-gpu duration-100;

  svg {
    @apply h-16 xl:h-auto;
  }

  &:hover {
    @apply scale-110;
  }
}
</style>