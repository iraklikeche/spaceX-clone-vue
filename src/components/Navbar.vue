<template>
  <header class="container relative mx-auto">
    <nav class="absolute flex items-center justify-between px-8 py-8">
      <RouterLink to="/" class="block w-1/5" @click="isOpened = false">
        <img :src="logo" />
      </RouterLink>
      <div class="lg:hidden">
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          @click="openMenu"
          class="cursor-pointer"
        >
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      </div>
      <ul
        class="absolute right-[-100%] top-0 flex h-screen w-[60%] flex-col items-start gap-4 overflow-hidden bg-[#0E0E0E] pl-12 font-bold uppercase text-white duration-500 ease-in-out lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:pl-0"
        :class="{ 'right-[-20%]': isOpened }"
      >
        <div class="mb-6 mt-12 lg:hidden" @click="closeMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            class="cursor-pointer fill-white"
          >
            <path
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
            ></path>
          </svg>
        </div>
        <li
          class="first:pt-24 hover:border-b hover:border-white lg:first:pt-0"
          v-for="vehicle in vehicleData"
          :key="vehicle.id"
        >
          <RouterLink
            :to="`/vehicle/${vehicle.vehicle}`"
            @click="isOpened = false"
            >{{ vehicle.vehicle.replace("-", " ") }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import logo from "../assets/spacex.svg";
import vehicleData from "../vehicleData.json";
import { ref, watch } from "vue";

const isOpened = ref(false);
console.log(isOpened.value);

const openMenu = () => {
  isOpened.value = !isOpened.value;
  console.log(1);
  console.log(isOpened.value);
};

const closeMenu = () => {
  isOpened.value = !isOpened.value;
  console.log(2);
  console.log(isOpened.value);
};

watch(isOpened, (newValue, oldValue) => {
  console.log(`isOpened changed from ${oldValue} to ${newValue}`);
});
</script>
