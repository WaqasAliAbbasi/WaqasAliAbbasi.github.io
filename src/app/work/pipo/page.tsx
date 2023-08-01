import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import Pipo42 from "./pipo_4_2.png";

export const metadata: ProjectMetaData = {
  title: "Personal IPO",
  image: Pipo42,
  date: new Date("2018-11-04T12:00:00.000+08:00"),
  description:
    "Intelligent Personal Valuation Platform. PIPO takes the company capital-raising concept and applies it to individuals.",
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
