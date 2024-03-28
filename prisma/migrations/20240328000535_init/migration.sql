-- CreateTable
CREATE TABLE "Scraping" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "query" TEXT NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scraping_pkey" PRIMARY KEY ("id")
);
