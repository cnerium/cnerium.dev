export const site = {
  name: "Cnerium",
  tagline: "Fast minimalist web framework for Vix.",

  package: {
    name: "@cnerium/app",
    version: "0.5.0",
    registryUrl: "https://vixcpp.com/registry/pkg/cnerium/app",
  },

  links: {
    docs: "https://docs.cnerium.dev",
    registry: "https://registry.vixcpp.com/pkg/cnerium/app",
    github: "https://github.com/cnerium/app",
    vix: "https://vixcpp.com",
  },

  navigation: [
    { label: "Docs", href: "https://docs.cnerium.dev", external: true },
    {
      label: "Registry",
      href: "https://registry.vixcpp.com/pkg/cnerium/app",
      external: true,
    },
    { label: "GitHub", href: "https://github.com/cnerium/app", external: true },
    { label: "Vix", href: "https://vixcpp.com", external: true },
  ],

  hero: {
    title: "A web framework for Vix.",
    subtitle:
      "Cnerium adds routing, middleware, JSON responses, and runtime access to Vix with a small C++ API.",
    primaryAction: {
      label: "Get started",
      href: "https://docs.cnerium.dev",
      external: true,
    },
    secondaryAction: {
      label: "Docs",
      href: "https://docs.cnerium.dev",
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
using namespace cnerium::app;

int main()
{
  App app;

  app.get("/", [](AppContext &ctx){
    ctx.text("Hello from Cnerium");
  });

  app.run();
}`,
    },
    {
      label: "Route params",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
using namespace cnerium::app;

int main()
{
  App app;

  app.get("/users/:id", [](AppContext &ctx){
    auto id = ctx.param("id");
    ctx.text(std::string(id));
  });

  app.run();
}`,
    },
    {
      label: "JSON response",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
using namespace cnerium::app;

int main()
{
  App app;

  app.get("/", [](AppContext &ctx){
    ctx.json({
      {"ok", true},
      {"framework", "Cnerium"}
    });
  });

  app.run();
}`,
    },
    {
      label: "Middleware",
      filename: "main.cpp",
      code: `#include <cnerium/app/app.hpp>
using namespace cnerium::app;

int main()
{
  App app;

  app.use([](auto &ctx, auto next){
    ctx.response().set_header("X-App", "Cnerium");
    next();
  });

  app.get("/", [](AppContext &ctx){
    ctx.text("Middleware applied");
  });

  app.run();
}`,
    },
    {
      label: "Install",
      filename: "terminal",
      code: `# Install via Vix
vix add @cnerium/app
vix install
vix run main.cpp`,
    },
  ],

  footer: {
    text: "The fast minimalist web framework for Vix.",
    links: [
      { label: "Docs", href: "https://docs.cnerium.dev" },
      {
        label: "Registry",
        href: "https://vixcpp.com/registry/pkg/cnerium/app",
      },
      { label: "GitHub", href: "https://github.com/cnerium/app" },
      { label: "Vix", href: "https://vixcpp.com" },
    ],
  },
};
