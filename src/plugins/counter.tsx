import { Elysia, t } from "elysia";

export const counterPlugin = new Elysia({ prefix: "/hello" })
  .guard({ response: t.String() }) // Responses must be string html for use with HTMX
  .get("/", () => <p>Hello World</p>);
