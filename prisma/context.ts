import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  get prisma() {
    return client;
  },
};
