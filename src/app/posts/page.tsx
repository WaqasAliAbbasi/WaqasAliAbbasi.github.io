import { Metadata } from "next";
import { metadata as HowToTestInHaskellMetaData } from "./how-to-test-in-haskell-using-comments/page";
import { PostMetaData } from "@/types/content";
import dayjs from "dayjs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

const posts: Array<{ slug: string; metadata: PostMetaData }> = [
  {
    slug: "how-to-test-in-haskell-using-comments",
    metadata: HowToTestInHaskellMetaData,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      {posts.map(({ slug, metadata: { title, date, excerpt } }) => (
        <Link key={slug} href={`/posts/${slug}`}>
          <div>
            <h3 className="font-bold mt-2">{title}</h3>
            <p className="text-xs">{dayjs(date).format("MMMM D, YYYY")}</p>
            <p className="text-xs mt-2">{excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
