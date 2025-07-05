<script setup>
import ContentCenter from '@/layouts/ContentCenter.vue'
import LoadingBar from './LoadingBar.vue'
</script>

<template>
  <ContentCenter class="bg-black">
    <template #center>
      <div class="md:w-4/12 w-64 ml-5">
        <img src="/img/logo-portfolio-white.webp" :alt="$t('alt.logoStart')" />
      </div>
    </template>

    <template #bottom-center>
      <LoadingBar />
    </template>

    <template #bottom>
      <div class="app-container absolute bottom-0 md:my-16 my-8">
        <div>
          <div class="flex justify-between items-center gap-8 text-white">
            <div>
              <h1 class="md:text-xl text-sm">{{ $t('message.welcome') }}</h1>
            </div>
            <div>
              <p class="text-sm tracking-tighter font-helvetica font-semibold">Copyright Paul Jaguin</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ContentCenter>
</template>
