<script setup lang="ts">

import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <section>
    <div class="thank-container">
      <img src="/Logo.svg" alt="Logo" />
      <div class="thank-title">
        <h1 class="">Thank you for your Interest in SquareUp.</h1>
        <p class="">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
      </div>
      <Button color="green">Start Project</Button>
    </div>
    <div class="">
      <div class="">
        <div class="">
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.thank-container {
  background: url("@/assets/images/HomePage/ThankYou/ThankYouBg.svg") no-repeat;
  background-size: cover;
  padding: 120px 350px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}

.thank-title {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
