<template>
  <section
    v-for="launch in launches"
    :key="launch.key"
    class="bg-cover bg-center bg-no-repeat px-8 xl:px-24"
    :style="{ backgroundImage: `url(${launch.background})` }"
  >
    <div v-if="launch.video" class="object-cover">
      <video
        autoplay
        muted
        loop
        id="myVideo"
        class="absolute bottom-0 right-0 -z-10"
      >
        <source :src="launch.video" type="video/mp4" />
      </video>
    </div>
    <div
      class="container mx-auto flex h-screen flex-col items-start justify-end gap-2 pb-24 pl-12 sm:pl-0 lg:gap-4"
    >
      <h2 class="text-2xl font-normal uppercase text-white md:text-3xl">
        {{ launch.launch }}
      </h2>
      <h1
        class="w-1/2 text-3xl font-semibold uppercase text-white md:text-4xl lg:text-5xl"
      >
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
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
