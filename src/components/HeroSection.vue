<template>
  <section
    v-for="launch in launches"
    :key="launch.key"
    class="h-[85vh] bg-[url('https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_2_Homepage_Desktop_a3d65abd76.jpg')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="container mx-auto flex h-full flex-col items-start justify-end gap-4 px-24 pb-24"
    >
      <h2 class="text-3xl font-normal uppercase text-white">Upcoming launch</h2>
      <h1 class="text-5xl font-bold uppercase text-white">
        Starship's second <br />
        flight test
      </h1>
      <button
        class="mt-4 border-2 px-10 py-4 text-xs font-extrabold uppercase tracking-tight text-white"
      >
        Learn More
      </button>
    </div>
  </section>
</template>

<script setup>
import launches from "../data.json";
</script>
