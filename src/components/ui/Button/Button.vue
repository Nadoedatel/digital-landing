<script setup lang="ts">
defineProps<{
  color: 'gray' | 'green' | 'gray-15'
}>()
</script>

<template>
  <button :class="['btn', color]">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 18px 28px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.btn.gray {
  border: var(--vt-c-gray-20);
  background-color: rgba(36, 36, 36, 0.2);
  backdrop-filter: blur(10px);
  color: var(--vt-c-text-light);
}

.btn.gray-15 {
  background-color: var(--vt-c-gray-15);
  color: var(--vt-c-text-light);
}

.btn.green {
  background-color: var(--vt-c-green-50);
}
</style>
