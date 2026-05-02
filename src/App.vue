<template>
  <div class="page-shell">
    <SiteHeader />

    <main>
      <HeroSection />
      <CodePreview />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import CodePreview from './components/CodePreview.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
