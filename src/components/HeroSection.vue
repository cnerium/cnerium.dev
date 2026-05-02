<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-left">
          <h1 class="hero-title">{{ site.hero.title }}</h1>

          <p class="hero-subtitle">
            {{ site.hero.subtitle }}
          </p>

          <div class="hero-actions">
            <a
              class="btn btn-primary"
              :href="site.hero.primaryAction.href"
              :target="site.hero.primaryAction.external ? '_blank' : undefined"
              :rel="site.hero.primaryAction.external ? 'noreferrer' : undefined"
            >
              {{ site.hero.primaryAction.label }}
            </a>

            <a
              class="btn btn-secondary"
              :href="site.hero.secondaryAction.href"
              :target="site.hero.secondaryAction.external ? '_blank' : undefined"
              :rel="site.hero.secondaryAction.external ? 'noreferrer' : undefined"
            >
              {{ site.hero.secondaryAction.label }}
            </a>
          </div>

          <a
            v-if="site.hero.version"
            class="version-badge"
            :href="site.hero.version.href"
            target="_blank"
            rel="noreferrer"
          >
            <span class="version-dot"></span>
            {{ site.hero.version.label }}
          </a>
        </div>

        <div class="hero-right">
          <div class="code-panel">
            <div class="code-tabs" role="tablist" aria-label="Code examples">
              <button
                v-for="(tab, index) in site.codeTabs"
                :key="tab.label"
                class="code-tab"
                :class="{ active: activeTab === index }"
                type="button"
                role="tab"
                :aria-selected="activeTab === index ? 'true' : 'false'"
                @click="setActiveTab(index)"
              >
                {{ tab.label }}
              </button>
            </div>

            <div class="code-body">
              <div class="code-line-numbers" aria-hidden="true">
                <span v-for="line in lineCount" :key="line">
                  {{ line }}
                </span>
              </div>

              <pre class="code-content"><code v-html="highlightedCode"></code></pre>
            </div>

            <div class="code-footer">
              <span class="code-lang">
                {{ currentLanguage }}
              </span>

              <button
                class="copy-btn"
                type="button"
                :class="{ copied }"
                @click="copyCode"
              >
                <svg
                  v-if="!copied"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="5"
                    width="8"
                    height="8"
                    rx="1.5"
                    stroke="currentColor"
                    stroke-width="1.2"
                  />
                  <path
                    d="M3 11V3.5A1.5 1.5 0 0 1 4.5 2H11"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  />
                </svg>

                <svg
                  v-else
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5L6.5 12L13 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                {{ copied ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>

          <p class="docs-hint">
            Full API in the
            <a
              :href="site.links.docs"
              target="_blank"
              rel="noreferrer"
              class="docs-link"
            >
              documentation →
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { site } from '../data/site'

const activeTab = ref(0)
const copied = ref(false)

const currentTab = computed(() => site.codeTabs[activeTab.value])

const lineCount = computed(() => {
  return currentTab.value.code.split('\n').length
})

const currentLanguage = computed(() => {
  return currentTab.value.filename === 'terminal' ? 'Shell' : 'C++'
})

const highlightedCode = computed(() => {
  const isShell = currentTab.value.filename === 'terminal'

  if (isShell) {
    return highlightShell(currentTab.value.code)
  }

  return highlightCpp(currentTab.value.code)
})

function setActiveTab(index) {
  activeTab.value = index
  copied.value = false
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlightShell(code) {
  const escaped = escapeHtml(code)

  return escaped.replace(
    /(#.*$)|\b(vix)\b/gm,
    (match, comment, command) => {
      if (comment) {
        return `<span class="sh-comment">${comment}</span>`
      }

      if (command) {
        return `<span class="kw">${command}</span>`
      }

      return match
    },
  )
}

function highlightCpp(code) {
  const escaped = escapeHtml(code)

  return escaped.replace(
    /(\/\/.*$)|("(?:\\.|[^"\\])*")|(#include\s+&lt;[^&]+&gt;)|\b(using|namespace|int|auto|return|void|true|false|nullptr)\b|\b(AppContext|App|ctx|app|next)\b|\b(\d+)\b/gm,
    (match, comment, stringLiteral, includeDirective, keyword, identifier, number) => {
      if (comment) {
        return `<span class="cpp-comment">${comment}</span>`
      }

      if (stringLiteral) {
        return `<span class="str">${stringLiteral}</span>`
      }

      if (includeDirective) {
        return `<span class="inc">${includeDirective}</span>`
      }

      if (keyword) {
        return `<span class="kw">${keyword}</span>`
      }

      if (identifier) {
        return `<span class="id">${identifier}</span>`
      }

      if (number) {
        return `<span class="num">${number}</span>`
      }

      return match
    },
  )
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(currentTab.value.code)
    copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
  }
}
</script>
