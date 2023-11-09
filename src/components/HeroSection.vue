<template>
  <section
    v-for="launch in launches"
    :key="launch.key"
    class="h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${launch.background})` }"
  >
    <video
      v-if="launch.video"
      autoplay
      muted
      loop
      id="myVideo"
      class="absolute bottom-0 right-0 -z-10 aspect-video"
    >
      <source :src="launch.video" type="video/mp4" />
    </video>
    <div
      class="container mx-auto flex h-full flex-col items-start justify-end gap-4 px-24 pb-24"
    >
      <h2 class="text-3xl font-normal uppercase text-white">
        {{ launch.launch }}
      </h2>
      <h1 class="text-5xl font-bold uppercase text-white">
        {{ launch.desc }}
      </h1>
      <button
        class="mt-4 min-w-[10rem] border-2 px-10 py-4 text-xs font-extrabold uppercase tracking-tight text-white"
      >
        {{ launch.reWatch ? "Watch" : "Learn More" }}
      </button>
    </div>
  </section>
</template>

<script setup>
import launches from "../data.json";
</script>
