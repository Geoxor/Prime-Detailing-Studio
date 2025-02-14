<template>
  <div>
    <div class="w-full h-100vh overflow-hidden bg-red bg-cover bg-center"
      style="background-image: url('/pictures/map.png');" />
    <div class="mainbg bg-grad absolute flex flex-col text-white px-24 gap-4 pl-90 justify-center top-0 right-0 h-full w-1/2">

      <h1 class="font-light text-20px">Contact Information</h1>

      <p class="">{{ $t('address') }}</p>

      <a class="duration-100 flex items-center gap-2" target="_blank"
        href="https://maps.app.goo.gl/dWMSjUmPSfeESPDK6">
        <PlaneIcon />
        <p>
          {{ $t('address.location') }}
        </p>
      </a>

      <a class="duration-100 flex items-center gap-2" target="_blank" href="https://g.co/kgs/ZTd1acs">
        <CoordsIcon />
        <p>
          {{ $t('coordinates') }}
        </p>
      </a>

      <a class="duration-100 flex items-center gap-2" target="_blank"
        :href="`mailto:${$t('email.address')}`">
        <EmailIcon />
        <p>
          {{ $t('email.address') }}
        </p>
      </a>

      <p class="">{{ $t('socials') }}</p>

      <a class='duration-100 flex items-center gap-2' target="_blank" :href="`https://www.instagram.com/${$t('instagram.username')}`">
        <InstagramIcon />
        <p>
          {{ $t('instagram.username') }}
        </p>
      </a>

      <p class="">{{ $t('telephone') }}</p>

      <a class="duration-100 flex items-center gap-2" target="_blank"
        :href="`tel:${$t('telephone.number')}`">
        <TelephoneIcon />
        <p>
          {{ $t('telephone.number') }}
        </p>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{}>();
defineEmits([]);

import EmailIcon from '../assets/icons/EmailIcon.vue';
import PlaneIcon from '../assets/icons/PlaneIcon.vue';
import TelephoneIcon from '../assets/icons/TelephoneIcon.vue';
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import CoordsIcon from '../assets/icons/CoordsIcon.vue';

</script>

<style scoped lang="postcss">
.mainbg {
  background: linear-gradient(90deg, rgba(12, 12, 12, 0) 0%, rgba(12, 12, 12, 1) 25%, rgba(12, 12, 12, 1) 100%);
}

p {
  @apply font-bold;
}

h1 {
  font-family: lexend_zetta, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: -3px;
}
</style>