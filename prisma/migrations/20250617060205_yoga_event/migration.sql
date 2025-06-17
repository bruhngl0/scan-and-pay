-- CreateEnum
CREATE TYPE "PersonaType" AS ENUM ('ENTREPRENEUR_FOUNDER', 'WORKING_PROFESSIONAL', 'CREATIVE_ARTIST', 'WELLNESS_PRACTITIONER', 'STUDENT', 'ATHLETE_FITNESS_ENTHUSIAST', 'HOMEMAKER', 'EXPLORING', 'OTHER');

-- CreateEnum
CREATE TYPE "YogaExperience" AS ENUM ('NEW_TO_YOGA', 'OCCASIONAL_PRACTICE', 'REGULAR_PRACTICE');

-- CreateEnum
CREATE TYPE "Intention" AS ENUM ('DEEP_CALM', 'BREAK_FROM_ROUTINE', 'SENSORY_EXPLORATION', 'GROUNDING_MINDFULNESS', 'SOMETHING_DIFFERENT');

-- CreateEnum
CREATE TYPE "AromaSensitivity" AS ENUM ('YES', 'NO', 'NOT_SURE');

-- CreateTable
CREATE TABLE "YogaEvent" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "personaType" "PersonaType" NOT NULL,
    "yogaExperience" "YogaExperience" NOT NULL,
    "intention" "Intention" NOT NULL,
    "aromaSensitivity" "AromaSensitivity" NOT NULL,
    "wantsUpdates" BOOLEAN NOT NULL,
    "instagramHandle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "YogaEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YogaEvent_email_key" ON "YogaEvent"("email");
