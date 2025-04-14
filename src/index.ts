import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

export const getPrisma = (database_url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  }).$extends(withAccelerate());
  return prisma;
};

app.get("/", (c) => {
  return c.text("HOLYKICKS-SCAN-AND-PAY-APP PORT WORKING");
});

app.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const body = await c.req.json();
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });

    return c.json({ message: "success", user: user });
  } catch (error) {
    console.error("error creating user", error);
    return c.json({ success: "falilure", error: "failed to fetch user" });
  }
});

export default app;

/*FLOW FOR SCAN AND PAY APP-
 *
 * user should be logged in/they payload should have a jwt token in the headers
 *
 * MAIN FUNCTION--
 *
 * REQUIREMENT OF PAYLOAD-- JWT TOKEN--MIDDLEWARE
 * STORE USER DATA/PHONE NUMBER/UPI-ID/
 * ADMIN DASHBOARD FOR COMFORMING THE PAYMENT MANNUALLY, TRIGGERS THE WHATSAPP TEXT WITH YOUR
 * PAYMENT IS SUCCESSFUL AND AN INVOICE WILL BE GENERATED -*/

//STEP 1--- FIRST SETUP A DATABASE PRISMA AND PRISMA ACCELEARTE.
//MAKE SCHEMAS FOR USERS PRODUCT AND ADMIN DASHBOARD
//
//-first initialize a db in neondb-done
//-now configure you accelerate by going on a prisma.com
//-install prisma--prismaclient--prismaaccelerate
