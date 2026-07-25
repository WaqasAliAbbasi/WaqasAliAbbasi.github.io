import { posts } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[char]!,
  );

export function GET() {
  const items = posts
    .slice()
    .sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime())
    .map(({ slug, metadata: { title, date, excerpt } }) => {
      const url = `${SITE_URL}/posts/${slug}`;
      return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${date.toUTCString()}</pubDate>
      <description>${escapeXml(excerpt)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Waqas Ali</title>
    <link>${SITE_URL}</link>
    <description>Posts from Waqas Ali</description>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
