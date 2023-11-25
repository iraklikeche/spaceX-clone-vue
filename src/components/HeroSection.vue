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

      <a
        :href="launch.url"
        target="_blank"
        class="relative mt-4 flex min-w-[10rem] items-center justify-center border-2 px-10 py-4 text-xs font-extrabold uppercase tracking-tight text-white transition duration-1000 ease-in-out hover:text-black"
      >
        <span class="relative z-10">
          {{ launch.reWatch ? "Watch" : "Learn More" }}
        </span>
      </a>
    </div>
  </section>
</template>

<script setup>
import launches from "../data.json";
</script>

<style scoped>
a::before {
  content: "";
  background: #fff;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.3s ease-in-out;
}

a:hover::before {
  width: 100%;
}
</style>
