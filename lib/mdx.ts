import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { PostMeta } from "../types/post";

type DataType = {
  type: "blog" | "project";
};

export async function getFrontMatters(type: DataType["type"]) {
  const PATH = join(process.cwd(), "data", type);

  const files = readdirSync(PATH);

  return files.map((file) => {
    const source = readFileSync(join(PATH, file), "utf-8");
    const data = matter(source).data as PostMeta;
    const slug = file.replace(".mdx", "");
    return { ...data, slug };
  });
}
