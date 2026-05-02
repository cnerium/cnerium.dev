<template>
  <section class="code-preview-section" id="examples">
    <div class="container">
      <div class="code-preview-inner">
        <div class="section-header">
          <span class="eyebrow">{{ site.codePreview.label }}</span>

          <h2 class="section-title">
            {{ site.codePreview.title }}
          </h2>

          <p class="section-text">
            {{ site.codePreview.text }}
          </p>

          <div class="code-preview-action">
            <a
              class="button button-secondary"
              :href="site.codePreview.docsAction.href"
              :target="site.codePreview.docsAction.external ? '_blank' : undefined"
              :rel="site.codePreview.docsAction.external ? 'noreferrer' : undefined"
            >
              {{ site.codePreview.docsAction.label }}
            </a>
          </div>
        </div>

        <div class="code-card">
          <div class="code-card-header">
            <div class="code-window-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span class="code-filename">{{ site.codePreview.filename }}</span>
          </div>

          <pre><code>{{ site.codePreview.code }}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../data/site'
</script>
