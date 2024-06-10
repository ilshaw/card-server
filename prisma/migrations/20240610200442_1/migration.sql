/*
  Warnings:

  - A unique constraint covering the columns `[user_id,access]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,refresh]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sessions_user_id_access_key" ON "sessions"("user_id", "access");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_user_id_refresh_key" ON "sessions"("user_id", "refresh");
