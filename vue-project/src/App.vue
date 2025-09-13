<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue"; // footer komponentini ham ulab oling
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Body qismi -->
    <main class="flex-grow container mx-auto p-4">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
