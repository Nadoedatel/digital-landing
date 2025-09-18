<script setup lang="ts">
import Button from "@/components/ui/Button/Button.vue";
import {ref} from "vue";
const selected = ref<string[]>([]);
</script>

<template>
  <section>
    <div class="thank__container">
      <img src="/Logo.svg" alt="Logo" />
      <div class="thank__title">
        <h1 class="">Thank you for your Interest in SquareUp.</h1>
        <p class="">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
      </div>
      <Button color="green">Start Project</Button>
    </div>
    <div class="thank__wrapper">
      <div class="thank__container-items">
        <div class="thank__item">
          <p>Full Name</p>
          <input type="text" placeholder="Type here" />
        </div>
        <div class="thank__item">
          <p>Email</p>
          <input type="email" placeholder="Type here" />
        </div>
        <div class="thank__item wide">
          <p>Why are you contacting us?</p>
          <div class="checkbox-group">
            <label class="checkbox">
              <input type="checkbox" v-model="selected" value="Web Design" />
              <span class="custom"></span>
              <span class="text">Web Design</span>
            </label>

            <label class="checkbox">
              <input type="checkbox" v-model="selected" value="Mobile App Design" />
              <span class="custom"></span>
              <span class="text">Mobile App Design</span>
            </label>

            <label class="checkbox">
              <input type="checkbox" v-model="selected" value="Collaboration" />
              <span class="custom"></span>
              <span class="text">Collaboration</span>
            </label>

            <label class="checkbox">
              <input type="checkbox" v-model="selected" value="Others" />
              <span class="custom"></span>
              <span class="text">Others</span>
            </label>
          </div>
        </div>
        <div class="thank__item wide">
          <p>Your Budget</p>
          <p>Slide to indicate your budget range</p>
        </div>
        <div class="thank__item wide">
          <p>Your Message</p>
          <input type="text" placeholder="Type here" />
        </div>
        <Button class="wide__btn" color="green">Submit</Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.thank__container {
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

.thank__title {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wide {
  grid-column: 1 / -1;
}

.wide__btn {
  grid-column: 1/ -1;
  justify-self: center;
}

.thank__container-items {
  display: grid;
  padding: 80px 80px;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  border: 1px solid var(--vt-c-gray-15);
}

.thank__container-items p {
  font-size: 22px;
}

.thank__wrapper {
  padding: 0 268px;
}

.thank__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(36, 36, 36, 0.5);
  border-radius: 8px;
  padding: 24px 40px;
  border: 1px solid var(--vt-c-gray-15);
}

.thank__item input {
  color: var(--vt-c-gray-40);
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  padding-bottom: 6px;
  border-bottom:1px solid var(--vt-c-gray-40);
}

.checkbox-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  color: #fff;
}

.checkbox input {
  display: none;
}

.checkbox .custom {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s, background 0.3s;
  position: relative;
}

.checkbox .custom::after {
  content: "";
  width: 6px;
  height: 12px;
  border-right: 2px solid var(--vt-c-green-50);
  border-bottom: 2px solid var(--vt-c-green-50);
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s;
}

.checkbox input:checked + .custom::after {
  opacity: 1;
}

</style>
