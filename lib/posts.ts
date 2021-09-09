import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts() {
  const posts = await prisma.posts.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
  return posts;
}
