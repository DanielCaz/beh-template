import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import Layout from "./components/Layout";
import { counterPlugin } from "./plugins/counter";

new Elysia()
  .use(staticPlugin())
  .group("/api", (app) => app.use(counterPlugin)) // Chain your plugins here
  .use(html()) // Apply html plugin after /api so that /api responses are not rendered as html
  .get("/", () => (
    <Layout>
      <main>
        <h1>BEH App</h1>
        <p hx-get="/api/hello" hx-swap="outerHTML" hx-trigger="load"></p>
      </main>
    </Layout>
  ))
  .listen(3000, ({ hostname, port }) =>
    console.log(`🦊 Elysia is running at ${hostname}:${port}`)
  );
