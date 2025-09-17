<script setup lang="ts">

import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <section>
    <div class="question__container">
      <h1 class="">Frequently Asked Questions</h1>
      <p class="">Still you have any questions? Contact our Team via hello@squareup.com</p>
    </div>
    <div class="question__body">
      <div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
      </div>
      <div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
        <div class="question__item">
          <img src="@/assets/images/HomePage/FrequentlyQuestions/numOne.svg"  alt="1" />
          <h1>What services does SquareUp provide?</h1>
          <Button color="gray">+</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.question__container {
  padding: 120px 300px;
  background: url("@/assets/images/HomePage/FrequentlyQuestions/FrequentlyQuestionsBg.svg") no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.question__body {
  border: 1px solid var(--vt-c-gray-15);
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.question__item {
  border: 1px solid var(--vt-c-gray-15);
  padding: 30px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
</style>
