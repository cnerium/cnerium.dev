<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="eyebrow">{{ site.hero.eyebrow }}</span>

          <h1 class="hero-title">
            {{ site.hero.title }}
          </h1>

          <p class="hero-subtitle">
            {{ site.hero.subtitle }}
          </p>

          <p class="hero-text">
            {{ site.hero.text }}
          </p>

          <div class="hero-actions">
            <a class="button button-primary" :href="site.hero.primaryAction.href">
              {{ site.hero.primaryAction.label }}
            </a>

            <a
              class="button button-secondary"
              :href="site.hero.secondaryAction.href"
              :target="site.hero.secondaryAction.external ? '_blank' : undefined"
              :rel="site.hero.secondaryAction.external ? 'noreferrer' : undefined"
            >
              {{ site.hero.secondaryAction.label }}
            </a>
          </div>

          <div class="hero-meta" aria-label="Cnerium highlights">
            <span class="hero-pill">Minimal C++ API</span>
            <span class="hero-pill">Built for Vix</span>
            <span class="hero-pill">Runtime powered</span>
          </div>
        </div>

        <div class="hero-visual" aria-label="Cnerium visual identity">
          <div class="logo-card">
            <div class="logo-card-inner">
              <img
                class="logo-image"
                src="/logo.png"
                alt="Cnerium logo"
              />

              <div class="logo-caption">
                <div>
                  <p class="logo-caption-title">
                    Fast web layer for Vix
                  </p>
                  <p class="logo-caption-text">
                    Routing, JSON, middleware, and runtime access.
                  </p>
                </div>

                <span class="logo-status">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../data/site'
</script>
