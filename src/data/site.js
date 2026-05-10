export const site = {
  name: "Cnerium",
  tagline: "A fast minimalist web framework for Vix.",

  package: {
    name: "cnerium/app",
    version: "0.5.0",
    registryUrl: "https://registry.vixcpp.com/pkg/cnerium/app",
  },

  links: {
    docs: "https://docs.cnerium.dev",
    registry: "https://registry.vixcpp.com/pkg/cnerium/app",
    github: "https://github.com/cnerium/app",
    releases: "https://github.com/cnerium/app/releases",
    vix: "https://vixcpp.com",
    softadastra: "https://softadastra.com",
  },

  navigation: [
    {
      label: "Docs",
      href: "https://docs.cnerium.dev",
      external: true,
    },
    {
      label: "Registry",
      href: "https://registry.vixcpp.com/pkg/cnerium/app",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/cnerium/app",
      external: true,
    },
    {
      label: "Vix",
      href: "https://vixcpp.com",
      external: true,
    },
    {
      label: "Softadastra",
      href: "https://softadastra.com",
      external: true,
    },
  ],

  hero: {
    title: "A web framework for Vix.",
    subtitle:
      "Cnerium adds routing, middleware, JSON responses, error handling, and runtime access to Vix through a small C++ API. Maintained by Softadastra.",
    primaryAction: {
      label: "Get started",
      href: "https://docs.cnerium.dev/quick-start",
      external: true,
    },
    secondaryAction: {
      label: "View package",
      href: "https://registry.vixcpp.com/pkg/cnerium/app",
      external: true,
    },
    version: {
      label: "v0.5.0 Latest",
      href: "https://github.com/cnerium/app/releases",
    },
  },

  codeTabs: [
    {
      label: "Hello world",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
#include <vix/console.hpp>
using namespace cnerium::app;

int main(){
  App app;

  app.get("/", [](AppContext &ctx){
    ctx.text("Hello from Cnerium");
  });

  app.listen("127.0.0.1", 8080, [](){
    vix::console.info("Cnerium app is ready");
  });
}`,
    },
    {
      label: "Route params",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
#include <string>
using namespace cnerium::app;

int main(){
  App app;

  app.get("/users/:id", [](AppContext &ctx){
    ctx.text(std::string(ctx.param("id")));
  });

  app.listen("127.0.0.1", 8080);
}`,
    },
    {
      label: "JSON response",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
using namespace cnerium::app;

int main(){
  App app;

  app.get("/health", [](AppContext &ctx){
    ctx.json({
      {"ok", true},
      {"framework", "Cnerium"},
      {"status", "healthy"}
    });
  });

  app.listen("127.0.0.1", 8080);
}`,
    },
    {
      label: "Middleware",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
using namespace cnerium::app;

int main(){
  App app;

  app.use([](auto &ctx, auto next){
    ctx.response().set_header("X-App", "Cnerium");
    next();
  });

  app.get("/", [](AppContext &ctx){
    ctx.text("Middleware applied");
  });

  app.listen("127.0.0.1", 8080);
}`,
    },
    {
      label: "Install",
      filename: "terminal",
      code: `# Create a Vix project
vix new api
cd api

# Add Cnerium
vix add cnerium/app

# Start development server
vix dev`,
    },
  ],

  footer: {
    text: "A fast minimalist web framework for Vix, maintained by Softadastra.",
    links: [
      {
        label: "Docs",
        href: "https://docs.cnerium.dev",
      },
      {
        label: "Registry",
        href: "https://registry.vixcpp.com/pkg/cnerium/app",
      },
      {
        label: "GitHub",
        href: "https://github.com/cnerium/app",
      },
      {
        label: "Vix",
        href: "https://vixcpp.com",
      },
      {
        label: "Softadastra",
        href: "https://softadastra.com",
      },
    ],
  },
};
