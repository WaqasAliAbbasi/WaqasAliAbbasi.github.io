import { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { posts } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const mostRecent = (dates: Date[]) =>
  new Date(Math.max(...dates.map((date) => date.getTime())));

export default function sitemap(): MetadataRoute.Sitemap {
  const projectDates = projects.map(({ metadata: { date } }) => date);
  const postDates = posts.map(({ metadata: { date } }) => date);

  return [
    { url: SITE_URL, lastModified: mostRecent([...projectDates, ...postDates]) },
    { url: `${SITE_URL}/work`, lastModified: mostRecent(projectDates) },
    ...projects.map(({ slug, metadata: { date } }) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: date,
    })),
    { url: `${SITE_URL}/posts`, lastModified: mostRecent(postDates) },
    ...posts.map(({ slug, metadata: { date } }) => ({
      url: `${SITE_URL}/posts/${slug}`,
      lastModified: date,
    })),
  ];
}
