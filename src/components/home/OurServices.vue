<script setup lang="ts">

import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <section>
    <div class="our__service">
      <h1 class="out__title">Our Services</h1>
      <p class="out__paragraph">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
    </div>
    <div class="card__container">
      <div class="card__item">
        <div class="card__item--text">
          <img src="@/assets/images/HomePage/OurServices/pen.svg" alt="pen">
          <div>
            <h3>Design</h3>
            <p>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
          </div>
        </div>
        <Button color="gray-15">Learn More</Button>
      </div>
      <div class="card__item">
        <div class="card__item--text">
          <img src="@/assets/images/HomePage/OurServices/puzzle.svg" alt="puzzle">
          <div>
            <h3>Engineering</h3>
            <p>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
          </div>
        </div>
        <Button color="gray-15">Learn More</Button>
      </div>
      <div class="card__item">
        <div class="card__item--text">
          <img src="@/assets/images/HomePage/OurServices/accumulator.svg" alt="accumulator">
          <div>
            <h3>Project Management</h3>
            <p>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
          </div>
        </div>
        <Button color="gray-15">Learn More</Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.our__service {
  display: flex;
  flex-direction: column;
  padding: 120px 300px;
  background: linear-gradient(rgba(41, 46, 32, 0.3), rgba(32, 48, 6, 0.5)), url("@/assets/images/HomePage/OurServices/OurServicesBg.svg");
  background-size: cover;
  text-align: center;
  gap: 14px;
}

.out__title {
  font-size: 48px;
}

.out__paragraph {
  font-size: 18px;
}

.card__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card__item {
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 50px 50px;
  border: 1px solid var(--vt-c-gray-15);
}

.card__item--text {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.card__item img {
  max-width: 48px;
  max-height: 48px;
}
</style>
