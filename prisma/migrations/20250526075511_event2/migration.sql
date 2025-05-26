-- CreateEnum
CREATE TYPE "Entry" AS ENUM ('Solo', 'Couple');

-- CreateEnum
CREATE TYPE "Jobrole" AS ENUM ('ENTREPRENEUR_FOUNDER', 'WORKING_PROFESSIONAL', 'CREATIVE_ARTIST', 'WELLNESS_PRACTITIONER', 'STUDENT', 'ATHLETE_SPORTSPERSON', 'HOMEMAKER', 'EXPLORING', 'OTHER');

-- CreateEnum
CREATE TYPE "FitnessLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "YesNo" AS ENUM ('YES', 'NO');

-- CreateEnum
CREATE TYPE "CaffeineSensitivity" AS ENUM ('YES', 'NO', 'NOT_SURE');

-- CreateTable
CREATE TABLE "Event2" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "occupation" "Jobrole" NOT NULL,
    "fitnessLevel" "FitnessLevel" NOT NULL,
    "donePopPilates" "YesNo" NOT NULL,
    "caffeineSensitive" "CaffeineSensitivity" NOT NULL,
    "excitementReason" TEXT NOT NULL,
    "wantsUpdates" "YesNo" NOT NULL,
    "instagramHandle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event2_email_key" ON "Event2"("email");
