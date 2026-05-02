<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-title">
            {{ site.name }}
          </p>

          <p class="footer-text">
            {{ site.footer.text }}
          </p>
        </div>

        <div class="footer-links">
          <a
            v-for="link in site.footer.links"
            :key="link.label"
            class="footer-link"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../data/site'
</script>
