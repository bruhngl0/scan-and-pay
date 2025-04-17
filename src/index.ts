import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { jwt, sign } from "hono/jwt";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use("/*", cors());
app.route("/api/v1/user", userRouter);

export const getPrisma = (database_url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  }).$extends(withAccelerate());
  return prisma;
};

app.get("/", (c) => {
  const url = c.env.DATABASE_URL;
  console.log(url);
  return c.text("HOLYKICKS-SCAN-AND-PAY-APP PORT WORKING");
});

export default app;
