<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component"></component>
      </div>
    </transition>
  </RouterView>
  <!-- <RouterView /> -->
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
