<template>
  <transition name="slide">
    <div class="bg-black  text-white h-full w-80 p-4 fixed right-0 z-20" v-if="state.isShowingMobileNavigation.value">
      <div class="flex justify-end">
        <span @click="closeNavigation" class="p-2 hover:text-[#DAC0A0] cursor-pointer duration-100">
          <CloseIcon />
        </span>
      </div>

      <div class="p-4">
        <nav class="flex flex-col gap-2 text-white font-semibold">
          <router-link @click="closeNavigation" :to="{ name: 'home' }">{{ $t('home') }}</router-link>
          <!-- <router-link @click="closeNavigation" :to="{ name: 'services' }">{{ $t('services') }}</router-link> -->
        </nav>
        <div class="my-4 h-1px w-full bg-white bg-opacity-20" />

        <a class="navigations" target="_blank" href="https://maps.app.goo.gl/dWMSjUmPSfeESPDK6">
          <PlaneIcon /> {{ $t('directions') }}
        </a>

        <div class="my-4 h-1px w-full bg-white bg-opacity-20" />

        <LanguageDropdown />

        <div class="my-4 h-1px w-full bg-white bg-opacity-20" />

        <div class="flex gap-2">
          <!-- <a class='button' target="_blank" href="https://www.facebook.com/p/Rev1-Detailing-Wrapping-100083076285508/">
            <FacebookIcon />
          </a> -->
          <a class='button' target="_blank" :href="`https://www.instagram.com/${$t('instagram.username')}`">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import CloseIcon from '../assets/icons/CloseIcon.vue';
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
// import FacebookIcon from "../assets/icons/FacebookIcon.vue";
import { state } from "../state";
import PlaneIcon from "../assets/icons/PlaneIcon.vue";
import LanguageDropdown from "../components/LanguageDropdown.vue";

const closeNavigation = () => {
  state.isShowingMobileNavigation.value = false;
}
</script>

<style scoped lang="postcss">
nav {
  a {
    @apply duration-100;

    &:hover {
      @apply text-[#DAC0A0];
    }
  }
}

.navigations {
  @apply bg-white items-center text-black py-2 justify-center rounded-full font-semibold duration-100 flex gap-2;

  &:hover {
    @apply bg-[#DAC0A0] text-white;
  }
}

.slide-enter-active,
.slide-leave-active {
  @apply duration-200 opacity-100 translate-y-0;
}

.slide-enter-from,
.slide-leave-to {
  @apply transform-gpu translate-x-80;
}
</style>