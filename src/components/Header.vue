<template>
  <header
    class="z-10 w-full h-96px fixed flex items-center justify-between px-8 sm:px-12 xl:px-16 2xl:px-32 select-none">
    <div class="flex flex-1 justify-center select-none">
      <span class="mr-auto select-none">
        <router-link :to="{ name: 'home' }">
          <Pds_logo @click="" class="cursor-pointer h-16 w-min select-none" />
        </router-link>
      </span>
    </div>

    <div class="xl:hidden flex text-white">
      <button class="p-4" @click="openNavigation">
        <BurgerIcon />
      </button>
    </div>

    <div class="hidden xl:flex flex-1 justify-center ">
      <span class="">
        <nav class="flex text-white font-semibold">
          <router-link :to="{ name: 'home' }">{{ $t('home') }}</router-link>
          <!-- <router-link :to="{ name: 'services' }">{{ $t('services') }}</router-link> -->
          <!-- <router-link :to="{ name: 'projects' }">{{ $t('projects') }}</router-link> -->
          <!-- <router-link :to="{ name: 'training' }">{{ $t('training') }}</router-link> -->
          <!-- <router-link :to="{ name: 'contact' }">{{ $t('contact') }}</router-link> -->
        </nav>
      </span>
    </div>

    <div class="hidden xl:flex flex-1 justify-center">
      <span class="ml-auto">
        <menu>
          <a class="navigations" target="_blank" href="https://maps.app.goo.gl/dWMSjUmPSfeESPDK6">
            <PlaneIcon /> {{ $t('directions') }}
          </a>
          <Spacer />
          <LanguageDropdown />
          <Spacer />
          <!-- <a class='button' target="_blank" href="https://www.facebook.com/p/Rev1-Detailing-Wrapping-100083076285508/">
          <FacebookIcon />
          </a> -->
          <a class='button' target="_blank" :href="`https://www.instagram.com/${$t('instagram.username')}`">
            <InstagramIcon />
          </a>
        </menu>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import Pds_logo from '../assets/pds_logo.vue';
import Spacer from '../components/Spacer.vue';
import PlaneIcon from "../assets/icons/PlaneIcon.vue";
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
// import FacebookIcon from "../assets/icons/FacebookIcon.vue";
import LanguageDropdown from "../components/LanguageDropdown.vue";
import BurgerIcon from '../assets/icons/BurgerIcon.vue';
import { state } from "../state";

const openNavigation = () => {
  state.isShowingMobileNavigation.value = true;
}

</script>

<style scoped lang="postcss">
header {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.00) 100%);
  @apply m-auto;
}

nav a {
  @apply p-4 duration-100;

  &:hover {
    @apply text-[#DAC0A0];
  }

  &.router-link-active {
    @apply text-[#DAC0A0];
  }
}

menu {
  @apply flex items-center text-white;

  a {
    @apply duration-100;

    &:hover {
      @apply text-[#DAC0A0];
    }
  }

  button:hover {
    @apply text-[#DAC0A0];
  }

  .navigations {
    @apply bg-white items-center text-black py-2 px-8 rounded-full font-semibold duration-100 flex gap-2;

    &:hover {
      @apply bg-[#DAC0A0] text-white;
    }
  }

  .button {
    @apply p-2;
  }
}
</style>