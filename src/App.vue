<template>
  <div class="page-shell">
    <header class="site-header">
      <nav class="nav">
        <a href="/" class="brand" aria-label="Cnerium home">
          <span class="brand-mark"></span>
          <span>Cnerium</span>
        </a>

        <button class="mobile-menu-button" type="button" @click="toggleMenu">
          Menu
        </button>

        <div class="nav-links" :class="{ open: menuOpen }">
          <a href="#features" @click="closeMenu">Features</a>
          <a href="#example" @click="closeMenu">Example</a>
          <a href="https://docs.cnerium.dev" @click="closeMenu">Docs</a>
          <a href="https://github.com/cnerium" target="_blank" rel="noreferrer" @click="closeMenu">
            GitHub
          </a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow">Web framework for Vix</p>

          <h1>The fast, minimalist web framework for Vix.</h1>

          <p class="hero-text">
            Cnerium is an Express-style C++ web framework built for the Vix runtime.
            It gives Vix a clean web layer and proves that a real ecosystem can grow
            through the Vix Registry.
          </p>

          <div class="hero-actions">
            <a class="button primary" href="https://docs.cnerium.dev">Read the docs</a>
            <a class="button secondary" href="https://github.com/cnerium" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </div>

        <div class="hero-card" aria-label="Cnerium example">
          <div class="terminal-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre><code>#include &lt;cnerium/app.hpp&gt;

int main()
{
    cnerium::App app;

    app.get("/", [](auto&amp; req, auto&amp; res) {
        res.send("Hello from Cnerium");
    });

    app.listen(3000);
}</code></pre>
        </div>
      </section>

      <section id="features" class="section">
        <div class="section-heading">
          <p class="eyebrow">Why Cnerium</p>
          <h2>A small framework with a clear role.</h2>
        </div>

        <div class="grid">
          <article class="feature-card" v-for="feature in features" :key="feature.title">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </section>

      <section id="example" class="section split">
        <div>
          <p class="eyebrow">Example</p>
          <h2>Express-style development for C++.</h2>
          <p class="section-text">
            The goal is to make web development with Vix direct, predictable,
            and easy to understand without hiding the runtime.
          </p>
        </div>

        <div class="code-card">
          <pre><code>vix add @cnerium/app
vix install
vix run server.cpp</code></pre>
        </div>
      </section>

      <section class="registry-section">
        <div>
          <p class="eyebrow">Vix Registry</p>
          <h2>Built to prove the Vix ecosystem.</h2>
          <p>
            Cnerium is not only a framework. It is also a proof that Vix Registry
            can host real packages, real tools, and real developer workflows.
          </p>
        </div>

        <a class="button primary" href="https://registry.vixcpp.com" target="_blank" rel="noreferrer">
          Open Vix Registry
        </a>
      </section>
    </main>

    <footer class="footer">
      <p>© 2026 Cnerium. Built for the Vix ecosystem.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const features = [
  {
    title: 'Minimal API',
    description:
      'Cnerium exposes a simple application layer for routes, middleware, handlers, and server startup.'
  },
  {
    title: 'Built for Vix',
    description:
      'It is designed to run naturally on top of the Vix runtime instead of copying traditional C++ framework patterns.'
  },
  {
    title: 'Ecosystem proof',
    description:
      'Cnerium shows that Vix Registry can distribute real packages, frameworks, and developer tools.'
  }
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>
