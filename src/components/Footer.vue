<template>
  <footer class="h-[10vh] bg-black py-8">
    <div class="container mx-auto flex items-center justify-center gap-12">
      <p class="text-xs uppercase text-white">spacex &copy; {{ date }}</p>
      <a
        class="text-xs uppercase text-white transition-opacity hover:opacity-60"
        href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
        target="_blank"
        >privacy policy</a
      >
    </div>
  </footer>
</template>

<script setup>
const date = new Date().getFullYear();
console.log(date);
</script>
