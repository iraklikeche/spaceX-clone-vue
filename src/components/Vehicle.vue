<template>
  <main>
    <section
      :style="{ backgroundImage: `url(${spacecraft.bg_url})` }"
      class="bg-cover bg-center bg-no-repeat"
    >
      <div
        class="container mx-auto flex h-screen flex-col items-center justify-center gap-4 pb-24"
      >
        <h1
          class="text-6xl font-bold uppercase text-white sm:text-7xl lg:text-8xl"
        >
          {{ spacecraft.vehicle.replace(/-/g, " ") }}
        </h1>
        <p class="text-white sm:text-lg lg:text-xl">
          {{ spacecraft.vehicle_description }}
        </p>
      </div>
    </section>

    <!-- TOTALS SECTION-->

    <section class="bg-black" v-if="spacecraft.totals">
      <div>
        <div class="flex justify-evenly py-24 text-white" ref="targetElement">
          <div class="flex flex-col items-center gap-4">
            <span
              class="text-6xl font-semibold sm:text-7xl lg:text-9xl"
              ref="launch"
            ></span>
            <span class="text-lg font-medium uppercase sm:text-xl lg:text-2xl"
              >TOTAL launches</span
            >
          </div>
          <div class="flex flex-col items-center gap-4">
            <span
              class="text-6xl font-semibold sm:text-7xl lg:text-9xl"
              ref="landing"
            ></span>
            <span class="text-lg font-medium uppercase sm:text-xl lg:text-2xl"
              >TOTAL landings</span
            >
          </div>
          <div class="flex flex-col items-center gap-4">
            <span
              class="text-6xl font-semibold sm:text-7xl lg:text-9xl"
              ref="reFlight"
            ></span>
            <span class="text-lg font-medium uppercase sm:text-xl lg:text-2xl"
              >TOTAL reflights</span
            >
          </div>
        </div>

        <div
          class="flex h-screen bg-cover bg-center bg-no-repeat px-12 xl:px-24"
          :style="{ backgroundImage: `url(${spacecraft.drawing})` }"
        >
          <div class="flex w-3/4 items-center justify-center sm:w-1/2">
            <p class="font-medium text-white opacity-80">
              {{ spacecraft.detailed_description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- OVERVIEW SECTION -->

    <section class="bg-black py-4 md:py-24">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :navigation="true"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide>
          <div
            class="flex h-screen w-full items-center justify-start px-12 xl:px-24"
          >
            <div class="flex flex-col items-start text-white">
              <h3 class="text-3xl uppercase xl:text-4xl">
                {{ spacecraft.vehicle.replace("-", " ") }}
              </h3>
              <h2 class="text-5xl font-bold uppercase xl:text-6xl">Overview</h2>
              <p
                v-if="spacecraft.sliderDesc"
                class="mt-8 w-full text-left sm:w-1/2 xl:w-2/5"
              >
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
          <div
            class="flex h-screen w-full items-center justify-start px-12 xl:px-24"
          >
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
      class="relative h-screen bg-cover bg-center bg-no-repeat px-12 text-white xl:px-24"
      :style="{ backgroundImage: `url(${spacecraft.videoBg})` }"
    >
      <a
        :href="spacecraft.videoURL"
        target="_blank"
        class="flex h-full items-end"
      >
        <img
          :src="play"
          class="absolute right-[50%] top-[50%] w-[50px] -translate-y-1/2 transition-all duration-500"
          :class="{ 'scale-75  ': isHovered }"
        />
        <div class="mb-24">
          <span class="text-xl font-semibold uppercase">video</span>
          <h2 class="text-4xl font-bold uppercase">
            {{ spacecraft.vehicle.replace(/-/g, " ") }} in motion
          </h2>
        </div>
      </a>
    </section>

    <!-- ENGINE SECTION -->
    <section
      class="bg-black bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${spacecraft.engineURL})` }"
    >
      <div
        class="flex h-screen flex-col justify-center px-12 lg:w-3/4 xl:px-24"
      >
        <div
          class="flex w-3/4 flex-col items-start justify-center text-white sm:w-1/2"
        >
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
    <section class="bg-black py-4 md:py-24">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :navigation="true"
        :modules="modules"
        class="mySwiper relative"
      >
        <swiper-slide v-for="image in spacecraft.images">
          <div class="flex h-screen w-full items-center justify-start">
            <div class="flex w-1/2 flex-col text-white xl:px-24">
              <p
                class="balance text-lg font-bold uppercase sm:text-2xl xl:px-12"
              >
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
import { ref, watch, onMounted, onUnmounted } from "vue";
import vehicleData from "../vehicleData.json";
import { useRoute } from "vue-router";
import anime from "animejs/lib/anime.es.js";

const modules = [Navigation];
const props = defineProps(["totalInfo"]);

const route = useRoute();
const isHovered = ref(false);
const spacecraft = ref(null);

const launch = ref(null);
const landing = ref(null);
const reFlight = ref(null);

const targetElement = ref(null);
const observer = ref(null);

const totalInfo = vehicleData.map((item) => {
  const totals = item.totals || {};
  return {
    id: item.id,
    vehicle: item.vehicle,
    launches: totals.launches || 0,
    landings: totals.landings || 0,
    reFlights: totals.reFlights || 0,
  };
});

// Callback function for Intersection Observer
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Target element is in the viewport!");
      updateAnime();
    } else {
      console.log("Target element is out of the viewport!");
    }
  });
};

// Setup Intersection Observer on component mount
onMounted(() => {
  if (targetElement.value) {
    observer.value = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    observer.value.observe(targetElement.value);
  }
});

// Cleanup Intersection Observer on component unmount
onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});

function updateAnime() {
  if (spacecraft.value && spacecraft.value.totals) {
    const { launches, landings, reFlights } = spacecraft.value.totals;

    anime({
      targets: launch.value,
      innerHTML: [0, launches],
      round: 1,
      easing: "easeInOutExpo",
    });
    anime({
      targets: landing.value,
      innerHTML: [0, landings],
      round: 1,
      easing: "easeInOutExpo",
    });
    anime({
      targets: reFlight.value,
      innerHTML: [0, reFlights],
      round: 1,
      easing: "easeInOutExpo",
    });

    totalInfo.value = { launches, landings, reFlights };
  }
}

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
