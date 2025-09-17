<script setup lang="ts">

import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
  <header class="container">
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
        <Button color="green">Contact Us</Button>
      </div>
  </header>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 162px;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.logo img {
  display: block;
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
</style>
