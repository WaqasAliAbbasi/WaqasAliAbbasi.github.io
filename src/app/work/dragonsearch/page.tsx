import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import DragonSearch2 from "./dragonsearch_2.jpeg";

export const metadata: ProjectMetaData = {
  title: "Dragon Search",
  image: DragonSearch2,
  date: new Date("2019-11-03T12:00:00.000+08:00"),
  description:
    "A unique search engine which accepts realtime user feedback to help the user find exactly what they are looking for among millions of papers, authors and topics.",
  highlight: true,
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
