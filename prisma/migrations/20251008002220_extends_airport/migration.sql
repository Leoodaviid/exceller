-- AlterTable
ALTER TABLE "Airport" ADD COLUMN     "countryIso2" TEXT,
ADD COLUMN     "dstRule" TEXT,
ADD COLUMN     "elevationM" INTEGER,
ADD COLUMN     "icaoCode" VARCHAR(4),
ADD COLUMN     "kind" TEXT,
ADD COLUMN     "latitude" DECIMAL(10,6),
ADD COLUMN     "longitude" DECIMAL(10,6),
ADD COLUMN     "source" TEXT,
ADD COLUMN     "tzDatabase" TEXT,
ADD COLUMN     "utcOffset" DOUBLE PRECISION,
ALTER COLUMN "iataCode" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "country" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Airport_country_city_name_idx" ON "Airport"("country", "city", "name");

-- CreateIndex
CREATE INDEX "Airport_name_idx" ON "Airport"("name");

-- CreateIndex
CREATE INDEX "Airport_city_idx" ON "Airport"("city");

-- CreateIndex
CREATE INDEX "Airport_iata_idx" ON "Airport"("iataCode");

-- CreateIndex
CREATE INDEX "Airport_icao_idx" ON "Airport"("icaoCode");

-- RenameIndex
ALTER INDEX "Airport_iataCode_key" RENAME TO "Airport_iata_unique";
