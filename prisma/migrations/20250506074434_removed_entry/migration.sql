/*
  Warnings:

  - You are about to drop the column `entry` on the `WaitlistEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WaitlistEntry" DROP COLUMN "entry";

-- DropEnum
DROP TYPE "Entry";
