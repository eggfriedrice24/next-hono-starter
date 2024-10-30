import { Hono } from "hono"
import { handle } from "hono/vercel"

export const runtime = "edge"

const app = new Hono().basePath("/api")

const hello = new Hono().get("/", (c) => {
  return c.json({
    message: "Hello sssssssssss!",
  })
})

const routes = app.route("/hello", hello)

export const GET = handle(app)

export type AppType = typeof routes
