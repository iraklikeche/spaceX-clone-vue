<template>
  <header class="container relative mx-auto">
    <nav class="absolute flex items-center justify-between px-24 py-8">
      <RouterLink to="/" class="block w-1/5">
        <img :src="logo" />
      </RouterLink>
      <ul class="flex items-center gap-8 font-bold uppercase text-white">
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">Falcon 9</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">Falcon Heavy</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">Dragon</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">Starship</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">Human Spaceflight</RouterLink>
        </li>
        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">Human Spaceflight</RouterLink>
        </li>

        <li class="hover:border-b hover:border-white">
          <RouterLink to="/about">starshield</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import logo from "../assets/spacex.svg";
</script>
