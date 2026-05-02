<template>
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="/" aria-label="Cnerium home" @click="closeMenu">
          <span class="brand-mark" aria-hidden="true">
            <span class="brand-core"></span>
          </span>
          <span class="brand-text">cnerium</span>
        </a>

        <div
          id="site-navigation"
          class="nav-links"
          :class="{ open: menuOpen }"
        >
          <a
            v-for="item in site.navigation"
            :key="item.label"
            class="nav-link"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer' : undefined"
            @click="closeMenu"
          >
            <span>{{ item.label }}</span>
            <span v-if="item.external" class="nav-ext-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <button
          class="mobile-menu-button"
          type="button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="site-navigation"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <span class="hamburger" :class="{ open: menuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
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

watch(menuOpen, (value) => {
  document.body.classList.toggle('no-scroll', value)
})

onBeforeUnmount(() => {
  document.body.classList.remove('no-scroll')
})
</script>
