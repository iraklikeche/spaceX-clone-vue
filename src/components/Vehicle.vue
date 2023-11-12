<template>
  <main v-for="vehicle in vehicleData" :key="vehicle.id">
    <section
      :style="{ backgroundImage: `url(${vehicle.bg_url})` }"
      class="bg-cover bg-center bg-no-repeat"
    >
      <div
        class="container mx-auto flex h-screen flex-col items-center justify-center gap-4"
      >
        <h1 class="text-8xl font-bold uppercase text-white">
          {{ vehicle.vehicle.replace(/-/g, " ") }}
        </h1>
        <p class="text-xl text-white">
          {{ vehicle.vehicle_description }}
        </p>
      </div>
    </section>

    <section class="bg-black">
      <div class="container mx-auto">
        <div class="flex justify-evenly py-24 text-white">
          <div class="flex flex-col gap-4">
            <span class="text-9xl font-semibold">{{
              vehicle.totals.launches
            }}</span>
            <span class="text-3xl font-light">TOTAL launches</span>
          </div>
          <div class="flex flex-col gap-4">
            <span class="text-9xl font-semibold">{{
              vehicle.totals.landings
            }}</span>
            <span class="text-3xl font-light">TOTAL landings</span>
          </div>
          <div class="flex flex-col gap-4">
            <span class="text-9xl font-semibold">{{
              vehicle.totals.re_flights
            }}</span>
            <span class="text-3xl font-light">TOTAL relfights</span>
          </div>
        </div>

        <div
          class="flex h-screen bg-cover bg-center bg-no-repeat px-24"
          :style="{ backgroundImage: `url(${vehicle.drawing})` }"
        >
          <div class="flex w-1/2 items-center justify-center">
            <p class="font-medium text-white opacity-80">
              {{ vehicle.detailed_description }}
            </p>
          </div>
        </div>
      </div>
    </section>

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
              <h3 class="text-2xl uppercase">
                {{ vehicle.vehicle.replace("-", " ") }}
              </h3>
              <h2 class="text-6xl font-bold uppercase">Overview</h2>
              <ul class="mt-12 min-w-[30rem]">
                <li
                  v-for="param in vehicle.params"
                  class="flex items-center justify-between border-b border-slate-700 py-4"
                >
                  <span class="text-sm font-semibold uppercase">{{
                    param.name
                  }}</span>
                  <span class="font-semibold">{{ param.size }}</span>
                </li>
              </ul>
            </div>
            <img class="absolute -z-20" :src="vehicle.overviewBg" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide v-for="stage in vehicle.stages">
          <div class="flex h-screen w-full items-center justify-start px-24">
            <div class="flex flex-col items-start text-white">
              <h3 class="text-xl uppercase">
                {{ vehicle.vehicle.replace("-", " ") }}
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
                  {{ grid_fins.replace("_", " ") }}
                </h4>
                <span class="font-semibold">{{ stage.grid_fins }}</span>
              </div>
            </div>
            <img class="absolute -z-20" :src="stage.overviewBg" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <section
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative h-screen bg-[url('https://www.spacex.com/static/images/backgrounds/f9_video.jpg')] bg-cover bg-center bg-no-repeat px-24 text-white"
    >
      <img
        :src="play"
        class="absolute right-[50%] top-[50%] w-[50px] -translate-y-1/2 transition-all duration-500"
        :class="{ 'scale-75  ': isHovered }"
      />
      <a
        href="https://www.youtube.com/watch?v=Z4TXCZG_NEY&t=12s"
        target="_blank"
        class="flex h-full items-end only:flex-col"
      >
        <div class="mb-24">
          <span class="text-xl font-semibold">VIDEO</span>
          <h2 class="text-4xl font-bold">VEHICLE IN MOTION</h2>
        </div>
      </a>
    </section>

    <section
      class="bg-black bg-[url('https://www.spacex.com/static/images/falcon-9/desktop/Merlin.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="flex h-screen w-3/4 flex-col justify-center px-24">
        <div class="flex w-1/2 flex-col items-start justify-center text-white">
          <h2 class="text-lg font-semibold uppercase">Engines</h2>
          <h2 class="mb-16 text-5xl font-bold uppercase">
            {{ vehicle.engine.name }}
          </h2>

          <p class="mb-12 font-medium text-white opacity-80">
            {{ vehicle.engine.desc }}
          </p>
        </div>

        <ul class="w-1/2 text-white">
          <li class="mb-4 flex justify-between border-b border-slate-700 pb-4">
            <span class="font-bold uppercase">{{ engineParam[2] }}</span>
            <span class="font-bold uppercase">{{
              vehicle.engine.propellant
            }}</span>
          </li>
          <li class="flex justify-between border-b border-slate-700 pb-4">
            <span class="font-bold uppercase">{{ engineParam[3] }}</span>
            <span class="font-bold uppercase">{{ vehicle.engine.thrust }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-black py-24">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :navigation="true"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide v-for="image in vehicle.images">
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
const modules = [Navigation];

const isHovered = ref(false);

const engineParam = Object.keys(vehicleData[0].engine);

const keys = Object.keys(vehicleData[0].stages[1]);
const grid_fins = keys[3];

// watch(isHovered, (newValue, oldValue) => {
//   console.log("isHovered changed:", newValue);
// });
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
  /* background: #fff; */

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
