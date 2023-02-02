import { PrismaClient } from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  get prisma() {
    const client = new PrismaClient();
    return client;
  },
};
