<template>
  <div
    id="hashtags"
    class="bg-white text overflow-hidden overflow-x-auto flex-col flex items-center text-black justify-center py-24 pr-8 px-8 sm:px-16 xl:px-16 2xl:px-32 gap-4 xl:gap-8">
    <p class="uppercase font-bold">{{$t('more.work')}}</p>

    <a target="_blank" href="https://www.instagram.com/explore/search/keyword/?q=%23primedetailingstudio">
      <h1 class="uppercase tracking-tighter text-4xl font-semibold">#primedetailingstudio</h1>
    </a>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="postcss">
#hashtags{
  font-family: lexend_zetta, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: -1px;
}

a {
  @apply transform-gpu duration-100;

  svg {
    @apply h-16 xl:h-auto;
  }

  &:hover {
    @apply underline;
  }
}
</style>