<template>
  <header class="container relative mx-auto">
    <nav class="absolute flex items-center justify-between px-24 py-8">
      <RouterLink to="/" class="block w-1/5">
        <img :src="logo" />
      </RouterLink>
      <ul class="flex items-center gap-8 font-bold uppercase text-white">
        <li class="hover:border-b hover:border-white">
          <RouterLink
            :to="{
              name: 'vehicle',
              params: { vehicle: vehicleData[0].vehicle },
            }"
            >Falcon 9</RouterLink
          >
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/">Falcon Heavy</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/">Dragon</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/">Starship</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/">Human Spaceflight</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/">Human Spaceflight</RouterLink>
        </li>

        <li class="hover:border-b hover:border-white">
          <RouterLink to="/">starshield</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import logo from "../assets/spacex.svg";
import vehicleData from "../vehicleData.json";
</script>
