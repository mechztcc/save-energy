-- CreateTable
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT,
    "brand" TEXT,
    "category" TEXT,
    "potency" TEXT NOT NULL,
    "tension" TEXT,
    "freq" TEXT,
    "chain" TEXT,
    "potencyFact" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);
