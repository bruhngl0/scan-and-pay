import { Hono } from "hono";
import {
  FutureJourney,
  Occupation,
  PreferredSession,
  PrismaClient,
  WaterComfort,
  SoundHealingExperience,
} from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use("/*", cors());

export const getPrisma = (database_url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  }).$extends(withAccelerate());
  return prisma;
};

app.get("/api/v1/user", (c) => {
  const url = c.env.DATABASE_URL;
  console.log(url);
  return c.text("STILL CIRCLE-FORM SB");
});

app.get("/api/v1/users", async (c) => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const data = await prisma.waitlistEntry.findMany();
    console.log(data);
    return c.json({ message: data });
  } catch (error: unknown) {
    return c.json({ message: error });
  }
});

app.post("/api/v1/userDetails", async (c) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      age,
      occupation,
      soundHealingExp,
      waterComfort,
      preferredSession,
      futureJourney,
      instagramHandle,
    }: {
      fullName: string;
      email: string;
      phoneNumber?: string;
      age?: number;
      occupation: Occupation;
      soundHealingExp: SoundHealingExperience;
      waterComfort: WaterComfort;
      preferredSession: PreferredSession; // Fixed typo here
      futureJourney: FutureJourney;
      instagramHandle?: string;
    } = await c.req.json();
    const love = c.env.DATABASE_URL;
    console.log(love);
    const prisma = getPrisma(c.env.DATABASE_URL);

    const newEntry = await prisma.waitlistEntry.create({
      data: {
        fullName,
        email,
        phoneNumber,
        age,
        occupation,
        soundHealingExp,
        waterComfort,
        preferredSession,
        futureJourney,
        instagramHandle,
      },
    });

    return c.json(
      { message: "USER DETAILS SAVED SUCCESSFULLY", data: newEntry },
      201,
    );
  } catch (error: unknown) {
    console.error(error);
    return c.json(
      {
        error: "failed to save the user details",
        message: "falied to save data, try again",
      },
      500,
    );
  }
});

export default app;
