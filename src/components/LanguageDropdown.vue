<template>
  <button class="flex relative" @click="showLanguageDropdown = true;" :class="showLanguageDropdown && 'active'">
    <LanguageIcon />
    <ArrowIcon />
    <transition name="slide">
      <menu ref="languageDropdown" v-if="showLanguageDropdown"
        class="languageDropdown absolute w-42 flex flex-col justify-start top-8 -left-4  p-1 rounded-8px border-light-700 border-1 bg-white">
        <button @click="$i18n.locale = lang;"
          class="py-2 flex items-center gap-2 px-4 flex w-full justify-start hover:bg-light-800 hover:bg-light-900 font-semibold text-black rounded-6px"
          v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" :class="$i18n.locale == lang && 'active'">
          <enUS v-if="lang == 'en-US'" class="h-3 w-auto rounded-2px" />
          <elGR v-if="lang == 'el-GR'" class="h-3 w-auto rounded-2px" />
          <bgBG v-if="lang == 'bg-BG'" class="h-3 w-auto rounded-2px" />
          {{ $t(lang) }}
        </button>
      </menu>
    </transition>
  </button>
</template>

<script setup lang="ts">
import LanguageIcon from "../assets/icons/LanguageIcon.vue";
import ArrowIcon from "../assets/icons/ArrowIcon.vue";
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

import elGR from "../assets/flags/el-GR.vue";
import enUS from "../assets/flags/en-US.vue";
import bgBG from "../assets/flags/bg-BG.vue";

const langs = ref(['en-US', 'el-GR', 'bg-BG']);
const showLanguageDropdown = ref(false);
const languageDropdown = ref(null)


const closeLanguageDropdown = () => {
  showLanguageDropdown.value = false;
}

onClickOutside(languageDropdown, () => closeLanguageDropdown());


</script>

<style scoped lang="postcss">
.languageDropdown .active {
  @apply bg-black text-white;
}

button.active {
  @apply text-[#DAC0A0];
}

.slide-enter-active,
.slide-leave-active {
  @apply duration-200 opacity-100 translate-y-0;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0 transform-gpu translate-y-8;
}
</style>