<script setup lang="ts">
import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <section class="hero">
    <div class="hero-sub-container">
      <h1>A Digital Product Studio<br>that will Work</h1>
      <p class="tags">
        For
        <span class="tag">Startups</span>,
        <span class="tag">Enterprise leaders</span>,
        <span class="tag">Media & Publishers</span>
        and
        <span class="tag">Social Good</span>
      </p>
    </div>
    <div class="hero-btn">
      <Button :color="'gray'" >Our Works</Button>
      <Button :color="'green'">Contact Us</Button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding:112px 0 274px 0;
  text-align: center;
  background-image: url("@/assets/images/HomePage/Hero/HeroSection.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.hero h1 {
  font-size: 68px;
}

.hero-sub-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.tags {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 40px;
  border-radius: 12px;
  background-color: rgba(36, 36, 36, 0.2);
  backdrop-filter: blur(10px);
  border:1px solid var(--vt-c-gray-15);
  gap: 6px;
}

.tag {
  padding: 12px 14px;
  border-radius: 10px;
  background-color: var(--vt-c-gray-15);
}

.hero-btn {
  display: flex;
  justify-content: center;
  gap: 13px;
}
</style>
