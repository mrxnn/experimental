export type PostMeta = {
  title: string;
  summary: string;
  publishedAt: string;
  category?: "draft" | "project" | "post";
  slug?: string;
};

export type Post = {
  meta: PostMeta;
  code?: any;
};
