<template>
  <section class="bg-yellow-400">
    <div
      class="container mx-auto flex h-screen flex-col items-center justify-center gap-4"
    >
      <h1 class="text-8xl font-bold text-white">VEHICLE NAME</h1>
      <p class="text-xl text-white">
        FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
      </p>
    </div>
  </section>

  <section class="bg-black">
    <div class="container mx-auto">
      <div class="flex justify-evenly py-24 text-white">
        <div class="flex flex-col gap-4">
          <span class="text-9xl font-semibold">111</span>
          <span class="text-3xl font-light">TOTAL launches</span>
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-9xl font-semibold">222</span>
          <span class="text-3xl font-light">TOTAL landings</span>
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-9xl font-semibold">333</span>
          <span class="text-3xl font-light">TOTAL relfights</span>
        </div>
      </div>

      <div
        class="flex h-screen bg-[url('https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.jpg')] bg-cover bg-center bg-no-repeat px-24"
      >
        <div class="flex w-1/2 items-center justify-center">
          <p class="font-medium text-white opacity-80">
            Falcon 9 is a reusable, two-stage rocket designed and manufactured
            by SpaceX for the reliable and safe transport of people and payloads
            into Earth orbit and beyond. Falcon 9 is the world’s first orbital
            class reusable rocket. Reusability allows SpaceX to refly the most
            expensive parts of the rocket, which in turn drives down the cost of
            space access.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black">
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
            <h3>NAME</h3>
            <h2>Overview</h2>
            <ul class="min-w-[30rem]">
              <li class="flex justify-between border-b border-slate-700">
                <span>1</span>
                <span>2</span>
              </li>
              <li class="flex justify-between border-b border-slate-700">
                <span>1</span>
                <span>2</span>
              </li>
              <li class="flex justify-between border-b border-slate-700">
                <span>1</span>
                <span>2</span>
              </li>
              <li class="flex justify-between border-b border-slate-700">
                <span>1</span>
                <span>2</span>
              </li>
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
          <img
            class="absolute -z-20"
            src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.jpg"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="flex flex-col gap-6">
        <img
          src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.jpg"
          alt=""
        /> </swiper-slide
      ><swiper-slide class="flex flex-col gap-6">
        <img
          src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="flex flex-col gap-6">
        <img
          src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const modules = [Navigation];
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
