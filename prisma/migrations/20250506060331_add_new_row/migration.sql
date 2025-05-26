/*
  Warnings:

  - Added the required column `entry` to the `WaitlistEntry` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Entry" AS ENUM ('Solo', 'Couple');

-- AlterTable
ALTER TABLE "WaitlistEntry" ADD COLUMN     "entry" "Entry" NOT NULL;
