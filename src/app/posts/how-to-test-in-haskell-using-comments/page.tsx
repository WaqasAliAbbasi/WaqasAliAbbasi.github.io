import { PostMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Post } from "@/components/Post";

export const metadata: PostMetaData = {
  title: "How to test in Haskell using comments?",
  date: new Date("2020-03-13T03:46:00.000+08:00"),
  excerpt:
    "If you want to easily test your functions in Haskell, you can do so by writing inputs and their expected responses right above your functions as comments. All you need is a package called doctest.",
};

export default function Page() {
  return (
    <Post title={metadata.title} date={metadata.date}>
      <Content />
    </Post>
  );
}
