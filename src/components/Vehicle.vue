<template>
  <main>
    <section
      :style="{ backgroundImage: `url(${spacecraft.bg_url})` }"
      class="bg-cover bg-center bg-no-repeat"
    >
      <div
        class="container mx-auto flex h-screen flex-col items-center justify-center gap-4 pb-24"
      >
        <h1 class="text-8xl font-bold uppercase text-white">
          {{ spacecraft.vehicle.replace(/-/g, " ") }}
        </h1>
        <p class="text-xl text-white">
          {{ spacecraft.vehicle_description }}
        </p>
      </div>
    </section>

    <!-- TOTALS SECTION-->

    <section class="bg-black" v-if="spacecraft.totals">
      <div class="container mx-auto">
        <div class="flex justify-evenly py-24 text-white">
          <div class="flex flex-col items-center gap-4">
            <span class="text-9xl font-semibold">{{
              spacecraft.totals.launches
            }}</span>
            <span class="text-2xl font-medium uppercase">TOTAL launches</span>
          </div>
          <div class="flex flex-col items-center gap-4">
            <span class="text-9xl font-semibold">{{
              spacecraft.totals.landings
            }}</span>
            <span class="text-2xl font-medium uppercase">TOTAL landings</span>
          </div>
          <div class="flex flex-col items-center gap-4">
            <span class="text-9xl font-semibold">{{
              spacecraft.totals.re_flights
            }}</span>
            <span class="text-2xl font-medium uppercase">TOTAL relfights</span>
          </div>
        </div>

        <div
          class="flex h-screen bg-cover bg-center bg-no-repeat px-24"
          :style="{ backgroundImage: `url(${spacecraft.drawing})` }"
        >
          <div class="flex w-1/2 items-center justify-center">
            <p class="font-medium text-white opacity-80">
              {{ spacecraft.detailed_description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- OVERVIEW SECTION -->

    <section class="bg-black py-24">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :navigation="true"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide>
          <div class="flex h-screen w-full items-center justify-start px-24">
            <div class="flex flex-col items-start text-white">
              <h3 class="text-4xl uppercase">
                {{ spacecraft.vehicle.replace("-", " ") }}
              </h3>
              <h2 class="text-6xl font-bold uppercase">Overview</h2>
              <p v-if="spacecraft.sliderDesc" class="mt-8 w-2/5 text-left">
                {{ spacecraft.sliderDesc }}
              </p>
              <ul class="mt-12 min-w-[30rem]">
                <li
                  v-for="param in spacecraft.params"
                  class="flex items-center justify-between border-b border-slate-700 py-4"
                >
                  <span class="text-sm font-semibold uppercase">{{
                    param.name
                  }}</span>
                  <span class="font-semibold">{{ param.size }}</span>
                </li>
              </ul>
            </div>
            <img class="absolute -z-20" :src="spacecraft.overviewBg" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide v-for="stage in spacecraft.stages">
          <div class="flex h-screen w-full items-center justify-start px-24">
            <div class="flex flex-col items-start text-white">
              <h3 class="text-4xl uppercase">
                {{ spacecraft.vehicle.replace("-", " ") }}
              </h3>
              <h2 class="mb-12 text-6xl font-bold uppercase">
                {{ stage.stage }}
              </h2>
              <p class="mb-8 w-1/2 text-left font-semibold">
                {{ stage.overview }}
              </p>
              <span class="font-semibold" v-if="stage.span">{{
                stage.span
              }}</span>
              <div v-if="stage.grid_fins" class="w-1/2 text-left">
                <h4 class="mb-4 text-lg font-semibold uppercase">
                  {{ Object.keys(spacecraft.stages[1])[3].replace("_", " ") }}
                </h4>
                <span class="font-semibold">{{ stage.grid_fins }}</span>
              </div>
            </div>
            <img class="absolute -z-20" :src="stage.overviewBg" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <!-- VIDEO SECTION -->

    <section
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative h-screen bg-cover bg-center bg-no-repeat px-24 text-white"
      :style="{ backgroundImage: `url(${spacecraft.videoBg})` }"
    >
      <img
        :src="play"
        class="absolute right-[50%] top-[50%] w-[50px] -translate-y-1/2 transition-all duration-500"
        :class="{ 'scale-75  ': isHovered }"
      />
      <a
        :href="spacecraft.videoURL"
        target="_blank"
        class="flex h-full items-end only:flex-col"
      >
        <div class="mb-24">
          <span class="text-xl font-semibold">VIDEO</span>
          <h2 class="text-4xl font-bold">VEHICLE IN MOTION</h2>
        </div>
      </a>
    </section>

    <!-- ENGINE SECTION -->
    <section
      class="bg-black bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${spacecraft.engineURL})` }"
    >
      <div class="flex h-screen w-3/4 flex-col justify-center px-24">
        <div class="flex w-1/2 flex-col items-start justify-center text-white">
          <h2 class="text-lg font-semibold uppercase">Engines</h2>
          <h2 class="mb-16 text-5xl font-bold uppercase">
            {{ spacecraft.engine.name }}
          </h2>

          <p class="mb-12 font-medium text-white opacity-80">
            {{ spacecraft.engine.desc }}
          </p>
        </div>

        <ul class="w-1/2 text-white">
          <li class="mb-4 flex justify-between border-b border-slate-700 pb-4">
            <span class="font-bold uppercase">{{
              Object.keys(spacecraft.engine)[2]
            }}</span>
            <span class="font-bold uppercase">{{
              spacecraft.engine.propellant
            }}</span>
          </li>
          <li class="flex justify-between border-b border-slate-700 pb-4">
            <span class="font-bold uppercase">{{
              Object.keys(spacecraft.engine)[3]
            }}</span>
            <span class="font-bold uppercase">{{
              spacecraft.engine.thrust
            }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- IMAGE SLIDER -->
    <section class="bg-black py-24">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :navigation="true"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide v-for="image in spacecraft.images">
          <div class="flex h-screen w-full items-center justify-start">
            <div class="flex w-1/2 flex-col px-24 text-white">
              <p class="balance px-12 text-2xl font-bold uppercase">
                {{ image.desc }}
              </p>
            </div>
            <img class="absolute -z-20" :src="image.imgURL" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>

<script setup>
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import play from "../assets/play.svg";
import { ref, watch } from "vue";
import vehicleData from "../vehicleData.json";
import { useRoute } from "vue-router";

const modules = [Navigation];

const route = useRoute();
const isHovered = ref(false);
const spacecraft = ref(null);

console.log(route.params);

console.log(spacecraft);

watch(
  () => route.params.vehicle,
  (newVehicle) => {
    spacecraft.value = vehicleData.find((c) => c.vehicle === newVehicle);
  },
  { immediate: true }, // Trigger the watcher immediately when the component is created
);
</script>

<style scoped>
.balance {
  text-wrap: balance;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
