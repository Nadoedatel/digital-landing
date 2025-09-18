<script setup lang="ts">

import Header from "@/Layouts/Header.vue";
import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <footer class="container">
    <div class="footer__container-nav">
      <div class="logo">
        <div>
          <img src="../../public/Logo.svg" alt="logo" />
        </div>
        <div>
          <img src="../assets/images/SquareUp.svg" alt="squareUp" />
        </div>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="services">Services</RouterLink>
            </li>
            <li>
              <RouterLink to="work">Work</RouterLink>
            </li>
            <li>
              <RouterLink to="process">Process</RouterLink>
            </li>
            <li>
              <RouterLink to="about">About</RouterLink>
            </li>
            <li>
              <RouterLink to="careers">Careers</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div class="footer">
          <h3>Stay Connected</h3>
          <img src="@/assets/images/Footer/Facebook.svg" alt="facebook" />
          <img src="@/assets/images/Footer/Twitter.svg" alt="twitter" />
          <img src="@/assets/images/Footer/LinkedIn.svg" alt="LinkedIn" />
        </div>
      </div>
    </div>
    <div class="footer__container-info">
      <div class="footer__contact">
        <div class="footer__contact-item">
          <img src="@/assets/images/Footer/Mail.svg" alt="mail" />
          <p>hello@squareup.com</p>
        </div>
        <div class="footer__contact-item">
          <img src="@/assets/images/Footer/Phone.svg" alt="phone" />
          <p>+91 91813 23 2309</p>
        </div>
        <div class="footer__contact-item">
          <img src="@/assets/images/Footer/Location.svg" alt="location" />
          <p>Somewhere in the World</p>
        </div>
      </div>
      <p>© 2023 SquareUp. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 162px;
  gap: 50px;
}

.footer__container-info {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.footer__container-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

nav ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

ul li {
  background: none;
  border: none;
  color: var(--vt-c-text-light);
  cursor: pointer;
  padding: 14px 24px;
  border-radius: 8px;
}

ul li:hover {
  background-color: var(--vt-c-primary-hover);
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 24px;
  border: 1px solid var(--vt-c-text-dark);
  border-radius: 12px;
  gap: 20px;
}

.footer__contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.footer__contact-item {
  padding: 16px;
  border-bottom: 1px solid var(--vt-c-gray-15);
}
</style>
