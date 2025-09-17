<script setup lang="ts">

import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <section>
    <div class="client__container">
      <h1 class="">What our Clients say About us</h1>
      <p class="">At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
    </div>
    <div class="client__container-reviews">
      <div class="client__item">
        <div class="client__title-review">
          <h1>SquareUp has been Instrumental in Transforming our Online Presence. </h1>
          <p>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</p>
        </div>
        <div class="client__card-review">
          <div class="client__card-profile">
            <img src="@/assets/images/HomePage/WhatClientsSay/Jonh.svg" alt="jonh">
            <div>
              <h2>John Smith</h2>
              <p>CEO of Chic Boutique</p>
            </div>
          </div>
          <Button color="gray-15">Open Website</Button>
        </div>
      </div>
      <div class="client__item">
        <div class="client__title-review">
          <h1>Working with SquareUp was a breeze.</h1>
          <p>They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.</p>
        </div>
        <div class="client__card-review">
          <div class="client__card-profile">
            <img src="@/assets/images/HomePage/WhatClientsSay/Sarah.svg" alt="sarah">
            <div>
              <h2>Sarah Johnson</h2>
              <p>CFounder of HungryBites.</p>
            </div>
          </div>
          <Button color="gray-15">Open Website</Button>
        </div>
      </div>
      <div class="client__item">
        <div class="client__title-review">
          <h1>SquareUp developed a comprehensive booking and reservation system for our event management company</h1>
          <p>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.</p>
        </div>
        <div class="client__card-review">
          <div class="client__card-profile">
            <img src="@/assets/images/HomePage/WhatClientsSay/Mark.svg" alt="mark">
            <div>
              <h2>Mark Thompson</h2>
              <p>CEO of EventMasters</p>
            </div>
          </div>
          <Button color="gray-15">Open Website</Button>
        </div>
      </div>
      <div class="client__item">
        <div class="client__title-review">
          <h1>ProTech Solutions turned to SquareUp to automate our workflow</h1>
          <p>They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.</p>
        </div>
        <div class="client__card-review">
          <div class="client__card-profile">
            <img src="@/assets/images/HomePage/WhatClientsSay/Laura.svg" alt="laura">
            <div>
              <h2>Laura Adams</h2>
              <p>COO of ProTech Solutions.</p>
            </div>
          </div>
          <Button color="gray-15">Open Website</Button>
        </div>
      </div>
      <div class="client__item">
        <div class="client__title-review">
          <h1>SquareUp designed and developed a captivating web portal for showcasing our real estate listings.</h1>
          <p>The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.</p>
        </div>
        <div class="client__card-review">
          <div class="client__card-profile">
            <img src="@/assets/images/HomePage/WhatClientsSay/Michael.svg" alt="michael">
            <div>
              <h2>Michael Anderson</h2>
              <p>Founder of Dream Homes Realty.</p>
            </div>
          </div>
          <Button color="gray-15">Open Website</Button>
        </div>
      </div>
      <div class="client__item">
        <div class="client__title-review">
          <h1>FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.</h1>
          <p>SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.</p>
        </div>
        <div class="client__card-review">
          <div class="client__card-profile">
            <img src="@/assets/images/HomePage/WhatClientsSay/Emily.svg" alt="">
            <div>
              <h2>Emily Turner</h2>
              <p>CEO of FitLife Tracker</p>
            </div>
          </div>
          <Button color="gray-15">Open Website</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.client__container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  padding: 120px 300px;
  background: url("@/assets/images/HomePage/WhatClientsSay/WhatClientsSayBg.svg");
  background-size: cover;
}

.client__title-review {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.client__title-review h1 {
  font-size: 28px ;
  color: var(--vt-c-green-80);
}

.client__title-review p {
  font-size: 18px
}

.client__container-reviews {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.client__card-review {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
}

.client__card-profile {
  display: flex;
  flex-direction: row;
  gap: 18px;
}

.client__item {
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  border:1px solid var(--vt-c-gray-15);
}
</style>
