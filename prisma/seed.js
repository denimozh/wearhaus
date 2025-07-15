import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
    const mockData = Array.from({ length: 50 }).map(() => ({
        name: faker.commerce.productName(),
        brand: faker.company.name(),
        price: parseInt(faker.commerce.price({min: 20, max: 250})),
        imageUrl: faker.image.url(),
        url: faker.internet.url(),
        merchant: faker.company.name(),
    }));

    await prisma.product.createMany({ data: mockData });
}

main()
    .catch((e) => {
        console.log("error: ", e)
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log("✅ Seeding complete");
    });