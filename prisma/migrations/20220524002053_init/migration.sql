-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Palmal" (
    "id" BIGSERIAL NOT NULL,
    "variedade" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "tradicional" BOOLEAN NOT NULL,
    "dataCadastro" DATE NOT NULL,
    "lastUpdate" DATE NOT NULL,
    "userId" BIGINT NOT NULL,

    CONSTRAINT "Palmal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reboleira" (
    "id" BIGSERIAL NOT NULL,
    "iteracao" CHAR NOT NULL,
    "dataCadastro" DATE NOT NULL,
    "proximaAvaliacao" DATE,
    "deleted" DATE,
    "avaliado" BOOLEAN NOT NULL,
    "lastUpdate" DATE NOT NULL,
    "palmalId" BIGINT NOT NULL,

    CONSTRAINT "Reboleira_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estacao" (
    "id" BIGSERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "dataCadastro" DATE NOT NULL,
    "proximaAvaliacao" DATE NOT NULL,
    "deleted" DATE,
    "isObservationOpen" BOOLEAN NOT NULL,
    "lastUpdate" DATE NOT NULL,
    "reboleiraId" BIGINT NOT NULL,

    CONSTRAINT "Estacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Raquete" (
    "id" BIGSERIAL NOT NULL,
    "posicao" TEXT NOT NULL,
    "dataDacastro" DATE NOT NULL,
    "aparencia" TEXT NOT NULL,
    "agenteControleBiologico" BOOLEAN NOT NULL,
    "agenteControleQuimico" BOOLEAN NOT NULL,
    "avaliado" BOOLEAN NOT NULL,
    "corte" DATE,
    "dataObservacao" DATE,
    "exported" BOOLEAN NOT NULL,
    "nextVersion" BIGINT NOT NULL,
    "estacaoId" BIGINT NOT NULL,

    CONSTRAINT "Raquete_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Palmal" ADD CONSTRAINT "Palmal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reboleira" ADD CONSTRAINT "Reboleira_palmalId_fkey" FOREIGN KEY ("palmalId") REFERENCES "Palmal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estacao" ADD CONSTRAINT "Estacao_reboleiraId_fkey" FOREIGN KEY ("reboleiraId") REFERENCES "Reboleira"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Raquete" ADD CONSTRAINT "Raquete_estacaoId_fkey" FOREIGN KEY ("estacaoId") REFERENCES "Estacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
