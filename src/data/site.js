export const site = {
  name: "Cnerium",
  tagline: "Fast minimalist web framework for Vix.",
  description:
    "Cnerium is a fast minimalist web framework built for Vix. It provides a clean App API, deterministic routing, middleware support, JSON responses, route parameters, and direct access to the underlying runtime when needed.",

  package: {
    name: "@cnerium/app",
    registryName: "cnerium/app",
    version: "0.5.0",
    registryUrl: "https://vixcpp.com/registry/pkg/cnerium/app",
  },

  links: {
    docs: "https://docs.cnerium.dev",
    registry: "https://vixcpp.com/registry/pkg/cnerium/app",
    vix: "https://vixcpp.com",
    github: "https://github.com/cnerium/app",
  },

  navigation: [
    {
      label: "Docs",
      href: "https://docs.cnerium.dev",
      external: true,
    },
    {
      label: "Registry",
      href: "https://vixcpp.com/registry/pkg/cnerium/app",
      external: true,
    },
    {
      label: "Vix",
      href: "https://vixcpp.com",
      external: true,
    },
  ],

  hero: {
    eyebrow: "Header-only. Deterministic. Built for Vix.",
    title: "Cnerium",
    subtitle: "Fast minimalist web framework for Vix.",
    text: "Build modern C++ web applications with a small App API, deterministic routing, middleware, JSON responses, and a runtime-powered foundation.",
    primaryAction: {
      label: "Read the docs",
      href: "https://docs.cnerium.dev",
      external: true,
    },
    secondaryAction: {
      label: "View package",
      href: "https://vixcpp.com/registry/pkg/cnerium/app",
      external: true,
    },
  },

  codePreview: {
    label: "Hello world",
    filename: "main.cpp",
    title: "Build a server in a few lines.",
    text: "Create an app, define a route, and run it directly. For routing, middleware, JSON, runtime access, and advanced examples, read the documentation.",
    docsAction: {
      label: "More in the docs",
      href: "https://docs.cnerium.dev",
      external: true,
    },
    code: `#include <cnerium/app/app.hpp>

using namespace cnerium::app;

int main()
{
  App app;

  app.get("/", [](AppContext &ctx)
          { ctx.text("Hello from Cnerium"); });

  app.run();
}`,
  },

  footer: {
    text: "Official website for Cnerium, the fast minimalist web framework for Vix.",
    links: [
      {
        label: "Docs",
        href: "https://docs.cnerium.dev",
      },
      {
        label: "Registry",
        href: "https://vixcpp.com/registry/pkg/cnerium/app",
      },
      {
        label: "GitHub",
        href: "https://github.com/cnerium/app",
      },
    ],
  },
};
