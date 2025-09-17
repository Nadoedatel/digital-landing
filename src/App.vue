<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/Layouts/Header.vue";
import Footer from "@/Layouts/Footer.vue";
</script>

<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>
