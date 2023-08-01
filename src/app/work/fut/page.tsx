import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import SquadSuggestions from "./squad_suggestions.png";

export const metadata: ProjectMetaData = {
  title: "FUT Grapher",
  image: SquadSuggestions,
  date: new Date("2018-01-15T12:00:00.000+08:00"),
  description:
    "A python app which suggests the best squad for Fifa Ultimate Team using graph theory.",
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
