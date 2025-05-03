/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Occupation" AS ENUM ('Entrepreneur', 'WorkingProfessional', 'Creative', 'WellnessPractitioner', 'Student', 'Athlete', 'Homemaker', 'Exploring', 'Other');

-- CreateEnum
CREATE TYPE "SoundHealingExperience" AS ENUM ('YesRegularly', 'OnceOrTwice', 'NotYetButCurious', 'FirstTime');

-- CreateEnum
CREATE TYPE "WaterComfort" AS ENUM ('YesAbsolutely', 'LoveToTryWithSupport', 'PreferGroundingSoundJourneys');

-- CreateEnum
CREATE TYPE "PreferredSession" AS ENUM ('Sunrise', 'Sunset', 'Night', 'Flexible');

-- CreateEnum
CREATE TYPE "FutureJourney" AS ENUM ('Yes', 'OnlyForThisSession', 'NotAtTheMoment');

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "PaymentStatus";

-- CreateTable
CREATE TABLE "WaitlistEntry" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "age" INTEGER,
    "occupation" "Occupation" NOT NULL,
    "soundHealingExp" "SoundHealingExperience" NOT NULL,
    "waterComfort" "WaterComfort" NOT NULL,
    "preferredSession" "PreferredSession" NOT NULL,
    "futureJourney" "FutureJourney" NOT NULL,
    "instagramHandle" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WaitlistEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistEntry_email_key" ON "WaitlistEntry"("email");
