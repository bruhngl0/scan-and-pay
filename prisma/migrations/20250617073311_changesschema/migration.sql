/*
  Warnings:

  - Changed the type of `wantsUpdates` on the `YogaEvent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "YogaEvent" DROP COLUMN "wantsUpdates",
ADD COLUMN     "wantsUpdates" "YesNo" NOT NULL;
