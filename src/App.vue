<script setup>
import logo from "./assets/spacex.svg";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img :src="logo" />
      </RouterLink>
      <RouterLink to="/about">Falcon 9</RouterLink>
      <RouterLink to="/about">Falcon Heavy </RouterLink>
      <RouterLink to="/about">Dragon</RouterLink>
      <RouterLink to="/about">Starship</RouterLink>
      <RouterLink to="/about">Human Spaceflight</RouterLink>
      <RouterLink to="/about">starshield</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
