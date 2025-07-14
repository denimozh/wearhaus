// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prevent multiple instances in dev (hot reload)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Optional: enable logging
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
