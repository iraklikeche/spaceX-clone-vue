<template>
  <main v-for="vehicle in vehicleData" :key="vehicle.id">
    <section
      :style="{ backgroundImage: `url(${vehicle.bg_url})` }"
      class="bg-cover bg-center bg-no-repeat"
    >
      <div
        class="container mx-auto flex h-screen flex-col items-center justify-center gap-4"
      >
        <h1 class="text-8xl font-bold text-white">
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
              <h3>{{ vehicle.vehicle.replace("-", " ") }}</h3>
              <h2>Overview</h2>
              <ul class="min-w-[30rem]">
                <li class="flex justify-between border-b border-slate-700">
                  <span>{{ vehicle.overview.param.name }}</span>
                  <span>{{ vehicle.overview.param.size }}</span>
                </li>
                <li class="flex justify-between border-b border-slate-700">
                  <span>{{ vehicle.overview.param_1.name }}</span>
                  <span>{{ vehicle.overview.param_1.size }}</span>
                </li>
                <li class="flex justify-between border-b border-slate-700">
                  <span>{{ vehicle.overview.param_2.name }}</span>
                  <span>{{ vehicle.overview.param_2.mass }}</span>
                </li>
                <li class="flex justify-between border-b border-slate-700">
                  <span>{{ vehicle.overview.param_3.name }}</span>
                  <span>{{ vehicle.overview.param_3.mass }}</span>
                </li>
                <li class="flex justify-between border-b border-slate-700">
                  <span>{{ vehicle.overview.param_4.name }}</span>
                  <span>{{ vehicle.overview.param_4.mass }}</span>
                </li>
                <li class="flex justify-between border-b border-slate-700">
                  <span>{{ vehicle.overview.param_5.name }}</span>
                  <span>{{ vehicle.overview.param_5.mass }}</span>
                </li>
              </ul>
            </div>
            <img class="absolute -z-20" :src="vehicle.overviewBg" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex h-screen w-full items-center justify-start px-24">
            <div class="flex flex-col items-start text-white">
              <h3>{{ vehicle.vehicle.replace("-", " ") }}</h3>
              <h2>Overview</h2>
              <p>{{ vehicle.first_stage.overview }}</p>
              <span>{{ vehicle.first_stage.span }}</span>
            </div>
            <img class="absolute -z-20" :src="vehicle.overviewBg" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide class="flex flex-col gap-6">
          <div class="flex h-screen w-full items-center justify-start px-24">
            <div class="flex flex-col items-start text-white">
              <h3>{{ vehicle.vehicle.replace("-", " ") }}</h3>
              <h2>Overview</h2>
              <p>{{ vehicle.interstage.overview }}</p>
              <span>{{ vehicle.interstage.grid_fins }} </span>
            </div>
            <img
              class="absolute -z-20"
              :src="vehicle.interstage.overviewBg"
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide class="flex flex-col gap-6">
          <div class="flex h-screen w-full items-center justify-start px-24">
            <div class="flex flex-col items-start text-white">
              <h3>{{ vehicle.vehicle.replace("-", " ") }}</h3>
              <h2>Overview</h2>
              <p>{{ vehicle.second_stage.overview }}</p>
            </div>
            <img
              class="absolute -z-20"
              :src="vehicle.second_stage.overviewBg"
              alt=""
            />
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
      <div class="flex h-screen flex-col justify-center px-24">
        <div class="flex w-1/2 flex-col items-start justify-center text-white">
          <h2>Engine</h2>
          <h2>Engine</h2>
          <h2>Engine</h2>
          <p class="font-medium text-white opacity-80">
            Falcon 9 is a reusable, two-stage rocket designed and manufactured
            by SpaceX for the reliable and safe transport of people and payloads
            into Earth orbit and beyond. Falcon 9 is the world’s first orbital
            class reusable rocket. Reusability allows SpaceX to refly the most
            expensive parts of the rocket, which in turn drives down the cost of
            space access.
          </p>
        </div>

        <ul class="w-1/2 text-white">
          <li class="flex justify-between border-b border-slate-700">
            <span>1</span>
            <span>2</span>
          </li>
          <li class="flex justify-between border-b border-slate-700">
            <span>1</span>
            <span>2</span>
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
        <swiper-slide>
          <div class="flex h-screen w-full items-center justify-start">
            <div class="flex w-1/2 flex-col items-start px-24 text-white">
              <p class="px-12 text-xl font-semibold">
                Falcon 9 launches Dragon to the international space station from
                launch complex 39A
              </p>
            </div>
            <img
              class="absolute -z-20"
              src="https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide class="flex flex-col gap-6">
          <img
            src="https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg"
            alt=""
          /> </swiper-slide
        ><swiper-slide class="flex flex-col gap-6">
          <img
            src="https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="flex flex-col gap-6">
          <img
            src="https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg"
            alt=""
          />
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
console.log(vehicleData);

// watch(isHovered, (newValue, oldValue) => {
//   console.log("isHovered changed:", newValue);
// });
</script>

<style scoped>
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
