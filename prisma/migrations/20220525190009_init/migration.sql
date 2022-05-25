-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Palmal" (
    "id" SERIAL NOT NULL,
    "variedade" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "tradicional" BOOLEAN NOT NULL,
    "dataCadastro" TEXT NOT NULL,
    "lastUpdate" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Palmal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reboleira" (
    "id" SERIAL NOT NULL,
    "iteracao" CHAR NOT NULL,
    "dataCadastro" DATE NOT NULL,
    "proximaAvaliacao" TEXT,
    "deleted" TEXT,
    "avaliado" BOOLEAN NOT NULL,
    "lastUpdate" TEXT NOT NULL,
    "palmalId" INTEGER,

    CONSTRAINT "Reboleira_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estacao" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "dataCadastro" TEXT NOT NULL,
    "proximaAvaliacao" TEXT NOT NULL,
    "deleted" TEXT,
    "isObservationOpen" BOOLEAN NOT NULL,
    "lastUpdate" TEXT NOT NULL,
    "reboleiraId" INTEGER,

    CONSTRAINT "Estacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Raquete" (
    "id" SERIAL NOT NULL,
    "posicao" TEXT NOT NULL,
    "dataDacastro" TEXT NOT NULL,
    "aparencia" TEXT NOT NULL,
    "agenteControleBiologico" BOOLEAN NOT NULL,
    "agenteControleQuimico" BOOLEAN NOT NULL,
    "avaliado" BOOLEAN NOT NULL,
    "corte" TEXT,
    "dataObservacao" TEXT,
    "exported" BOOLEAN NOT NULL,
    "nextVersion" INTEGER NOT NULL,
    "estacaoId" INTEGER,

    CONSTRAINT "Raquete_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Palmal" ADD CONSTRAINT "Palmal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reboleira" ADD CONSTRAINT "Reboleira_palmalId_fkey" FOREIGN KEY ("palmalId") REFERENCES "Palmal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estacao" ADD CONSTRAINT "Estacao_reboleiraId_fkey" FOREIGN KEY ("reboleiraId") REFERENCES "Reboleira"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Raquete" ADD CONSTRAINT "Raquete_estacaoId_fkey" FOREIGN KEY ("estacaoId") REFERENCES "Estacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
