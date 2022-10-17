import { PrismaClient } from "@prisma/client";
import test from "node:test";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: "roxyzc1",
  //     email: "coba12@coba.com",
  //     age: 10,
  //     UserPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  // include: {
  //   UserPreference: true,
  // },
  //   select: {
  //     name: true,
  //     email: true,
  //     age: true,
  //     UserPreference: { select: { id: true } },
  //   },
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       equals: "roxyzc",
  //     },
  //   },
  //   include: {
  //     UserPreference: true,
  //   },
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       in: ["roxyzc", "rozy"],
  //       // atau notIn
  //     },
  //     age: {
  //       // lt: 15,
  //       gt: 10,
  //     },
  //   },
  //   include: {
  //     UserPreference: true,
  //   },
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     // email: {
  //     // contains: "coba.com",
  //     // startsWith: "coba",
  //     // endsWith: "com",
  //     // },
  //     // writtenPosts: {
  //     // every: {
  //     //   title: "test",
  //     // },
  //     // some: {
  //     //   title: "test",
  //     // },
  //     // none: {
  //     //   title: "test",
  //     // },
  //     // },
  //   },
  //   include: {
  //     UserPreference: true,
  //   },
  // });

  // const user = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       is: {
  //         age: 10,
  //       },
  //     },
  //   },
  // });

  // const user = await prisma.user.update({
  //   where: {
  //     email: "coba1@coba.com",
  //   },
  //   data: {
  //     age: {
  //       decrement: 1,
  //     },
  //   },
  // });

  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,
  //   },
  // });

  // const user = await prisma.user.update({
  //   where: {
  //     email: "coba1@coba.com",
  //   },
  //   data: {
  //     UserPreference: {
  //       disconnect: true,
  //       // connect: {
  //       //   id: "b50df4f3-1441-45c4-9a45-3fa4565208c7",
  //       // },
  //     },
  //   },
  // });

  // const user = await prisma.user.updateMany({
  //   where: {
  //     name: "new roxyzc",
  //   },
  //   data: {
  //     role: "ADMIN",
  //   },
  // });

  const user = await prisma.user.findMany({
    orderBy: {
      // age: "asc",
      age: "desc",
    },
    take: 3,
  });

  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
