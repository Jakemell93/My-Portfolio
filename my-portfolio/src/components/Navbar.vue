<template>
  <nav class="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 backdrop-blur-md z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo / Brand -->
      <div class="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
        MyPortfolio
      </div>

      <!-- Nav Links -->
      <ul class="flex items-center space-x-6">
        <li v-for="(item, i) in links" :key="i">
          <router-link
            :to="item.to"
            class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-2 py-1 rounded-md transition"
            :class="{
              'text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-2': isActive(item.to)
            }"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  { label: 'Projects',to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

// helper to check active route
function isActive(path) {
  return route.path === path
}
</script>
