import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import ClientScreen from "./client.png";

export const metadata: ProjectMetaData = {
  title: "Big Two",
  image: ClientScreen,
  date: new Date("2017-12-04T12:00:00.000+08:00"),
  description: "A full-featured multiplayer networked card game made in Java.",
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
