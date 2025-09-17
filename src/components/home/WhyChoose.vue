<script setup lang="ts">

</script>

<template>
<section class="choose__container">
  <div class="choose__sub-container">
    <h1 class="choose__title">Why Choose SquareUp?</h1>
    <p class="choose__paragraph">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
  </div>
  <div class="choose__container-achievements">
    <div class="choose__item">
      <div class="choose__title-content">
        <img src="@/assets/images/HomePage/WhyChoose/reward.svg" alt="reward">
        <h2>Expertise</h2>
      </div>
      <p>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
    </div>
    <div class="choose__item">
      <div class="choose__title-content">
        <img src="@/assets/images/HomePage/WhyChoose/community.svg" alt="reward">
        <h2>Client-Centric Approach</h2>
      </div>
      <p>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
    </div>
    <div class="choose__item">
      <div class="choose__title-content">
        <img src="@/assets/images/HomePage/WhyChoose/security.svg" alt="reward">
        <h2>Results-Driven Solutions</h2>
      </div>
      <p>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
    </div>
    <div class="choose__item">
      <div class="choose__title-content">
        <img src="@/assets/images/HomePage/WhyChoose/king.svg" alt="reward">
        <h2>Collaborative Partnership</h2>
      </div>
      <p>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
    </div>
  </div>
</section>
</template>

<style scoped>
.choose__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.choose__sub-container {
  padding: 120px 300px;
  background: url("@/assets/images/HomePage/WhyChoose/WhyChooseBg.svg") no-repeat;
  background-size: cover;
}

.choose__title {
  font-size: var(--font-size-h1);
}

.choose__paragraph {
  font-size: var(--font-size-p);
}

.choose__item {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px 80px;
  border: 1px solid var(--vt-c-gray-15);
}

.choose__title-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.choose__container-achievements {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
