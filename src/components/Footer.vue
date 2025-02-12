<template>
  <footer
    class="bg-[#0C0C0C] p-8 sm:p-16 2xl:p-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex items-top justify-between  text-[#C9C9C9A8] font-semibold gap-8 md:gap-24 xl:gap-8">
    <div class="flex flex-col gap-8">
      <section class="flex flex-col">
        <a class="duration-100 hover:text-white" target="_blank" href="https://maps.app.goo.gl/NurGNPLSBU8AmFtG7">
          <p>
            <PlaneIcon />
            {{ $t('address') }}
          </p>
        </a>

        <a class="duration-100 hover:text-white" target="_blank" href="https://g.co/kgs/ZTd1acs">
          <p>
            <CoordsIcon />
            {{ $t('coordinates') }}
          </p>
        </a>

        <a class="duration-100 hover:text-white" target="_blank" href="mailto:deligiannis.pds@gmail.com">
          <p>
            <EmailIcon />
            deligiannis.pds@gmail.com
          </p>
        </a>

        <a class="duration-100 hover:text-white" target="_blank" :href="`tel:${$t('telephone')}`">
          <p>
            <TelephoneIcon />
            {{ $t('telephone') }}
          </p>
        </a>
      </section>
      <Pds_logo class="w-128px sm:w-128px h-auto" />
    </div>

    <section class="footerSection">
      <p class="text-white">{{ $t('navigation') }}</p>
      <router-link :to="{ name: 'home' }">{{ $t('home') }}</router-link>
      <router-link :to="{ name: 'services' }">{{ $t('services') }}</router-link>
      <router-link :to="{ name: 'projects' }">{{ $t('services') }}</router-link>
      <router-link :to="{ name: 'training' }">{{ $t('training') }}</router-link>
      <router-link :to="{ name: 'contact' }">{{ $t('contact') }}</router-link>
    </section>

    <section class="footerSection hours whitespace-nowrap">
      <p class="text-white">{{ $t('opening.hours') }}</p>
      <div>
        <p>{{ $t('monday') }}</p>
        <p>09:00 - 17:00</p>
      </div>
      <div>
        <p>{{ $t('tuesday') }}</p>
        <p>09:00 - 17:00</p>
      </div>
      <div>
        <p>{{ $t('wednesday') }}</p>
        <p>09:00 - 17:00</p>
      </div>
      <div>
        <p>{{ $t('thursday') }}</p>
        <p>09:00 - 17:00</p>
      </div>
      <div>
        <p>{{ $t('friday') }}</p>
        <p>09:00 - 17:00</p>
      </div>
      <div>
        <p>{{ $t('saturday') }}</p>
        <p>{{ $t('closed') }}</p>
      </div>
      <div class="opacity-50">
        <p>{{ $t('sunday') }}</p>
        <p>{{ $t('closed') }}</p>
      </div>
    </section>

    <section class="footerSection socials">
      <p class="text-white">{{ $t('follow.us') }}</p>

      <a class='button' target="_blank" href="https://www.instagram.com/prime_detailing_studio_pds">
        <InstagramIcon />
      </a>
    </section>


  </footer>
</template>

<script setup lang="ts">
import EmailIcon from '../assets/icons/EmailIcon.vue';
import PlaneIcon from '../assets/icons/PlaneIcon.vue';
import TelephoneIcon from '../assets/icons/TelephoneIcon.vue';
import Pds_logo from '../assets/pds_logo.vue';
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import CoordsIcon from '../assets/icons/CoordsIcon.vue';

</script>

<style scoped lang="postcss">
footer {
  @apply overflow-auto;
}

section p {
  @apply flex gap-2 items-center py-1;
}

.footerSection {
  @apply flex flex-col min-w-64;

  a {
    @apply py-1 duration-100 hover:text-white;
  }

  &.hours div {
    @apply flex items-center justify-between gap-20 w-full;
  }
}
</style>