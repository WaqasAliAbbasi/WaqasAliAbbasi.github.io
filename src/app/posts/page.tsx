import { Metadata } from "next";
import dayjs from "dayjs";
import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Posts",
};

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
