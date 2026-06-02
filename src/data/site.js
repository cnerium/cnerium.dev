export const site = {
  name: "Cnerium",
  tagline: "A reliability-first backend layer for Vix.",

  package: {
    name: "softadastra/cnerium",
    version: "1.0.0",
    registryUrl: "https://registry.vixcpp.com/pkg/softadastra/cnerium",
  },

  links: {
    docs: "https://docs.cnerium.dev",
    registry: "https://registry.vixcpp.com/pkg/softadastra/cnerium",
    github: "https://github.com/softadastra/cnerium",
    releases: "https://github.com/softadastra/cnerium/releases",
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
      href: "https://registry.vixcpp.com/pkg/softadastra/cnerium",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/softadastra/cnerium",
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
    title: "Reliability for critical Vix backend operations.",
    subtitle:
      "Cnerium attaches to an existing Vix backend and adds durable routes, idempotency, replay protection, stored responses, and retry-safe execution for critical write operations. Maintained by Softadastra.",
    primaryAction: {
      label: "Get started",
      href: "https://docs.cnerium.dev/getting-started/",
      external: true,
    },
    secondaryAction: {
      label: "View package",
      href: "https://registry.vixcpp.com/pkg/softadastra/cnerium",
      external: true,
    },
    version: {
      label: "v1.0.0 Latest",
      href: "https://github.com/softadastra/cnerium/releases",
    },
  },

  codeTabs: [
    {
      label: "Attach to Vix",
      filename: "main.cpp",
      code: `#include <vix.hpp>
#include <cnerium/cnerium.hpp>

int main()
{
  vix::App app;

  auto cnerium = cnerium::attach(app);

  cnerium.start();
  app.run();
}`,
    },
    {
      label: "Durable route",
      filename: "main.cpp",
      code: `#include <vix.hpp>
#include <cnerium/cnerium.hpp>

int main()
{
  vix::App app;

  auto cnerium = cnerium::attach(app);

  cnerium.durable_post(
      "/orders",
      "orders.create",
      [](cnerium::DurableRequest &request)
      {
        return cnerium::created({
            {"ok", true}
        });
      });

  cnerium.start();
  app.run();
}`,
    },
    {
      label: "Idempotency",
      filename: "terminal",
      code: `curl -i -X POST http://127.0.0.1:8080/orders \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: order-123" \\
  -d '{"product_id":"p1","quantity":2}'

# Same key + same body
# -> stored response is replayed

# Same key + different body
# -> 409 Conflict`,
    },
    {
      label: "Realtime event",
      filename: "main.cpp",
      code: `cnerium.durable_post(
    "/orders",
    "orders.create",
    [&cnerium](cnerium::DurableRequest &request)
    {
      cnerium.emit(
          "order.created",
          cnerium::support::object({
              {"ok", cnerium::Json(true)}
          }));

      return cnerium::created({
          {"ok", true}
      });
    });`,
    },
    {
      label: "Install",
      filename: "terminal",
      code: `# Create a Vix project
vix new api
cd api

# Add Cnerium
vix add softadastra/cnerium

# Build and run with Vix
vix build
vix run`,
    },
  ],

  footer: {
    text: "A reliability-first backend layer for Vix, maintained by Softadastra.",
    links: [
      {
        label: "Docs",
        href: "https://docs.cnerium.dev",
      },
      {
        label: "Registry",
        href: "https://registry.vixcpp.com/pkg/softadastra/cnerium",
      },
      {
        label: "GitHub",
        href: "https://github.com/softadastra/cnerium",
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
