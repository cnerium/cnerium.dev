<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">

        <div class="footer-brand">
          <span class="footer-logo">
            <span class="brand-dot small" aria-hidden="true"></span>
            cnerium
          </span>
          <p class="footer-text">{{ site.footer.text }}</p>
        </div>

        <nav class="footer-links" aria-label="Footer navigation">
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
        </nav>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../data/site'
</script>
