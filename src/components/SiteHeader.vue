<template>
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="/" aria-label="Cnerium home" @click="closeMenu">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-text">{{ site.name }}</span>
        </a>

        <button
          class="mobile-menu-button"
          type="button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="site-navigation"
          @click="toggleMenu"
        >
          {{ menuOpen ? 'Close' : 'Menu' }}
        </button>

        <div
          id="site-navigation"
          class="nav-links"
          :class="{ open: menuOpen }"
        >
          <a
            v-for="item in site.navigation"
            :key="item.label"
            class="nav-link"
            :class="{ 'nav-cta': item.label === 'Registry' }"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer' : undefined"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { site } from '../data/site'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, (isOpen) => {
  document.body.classList.toggle('no-scroll', isOpen)
})

onBeforeUnmount(() => {
  document.body.classList.remove('no-scroll')
})
</script>
