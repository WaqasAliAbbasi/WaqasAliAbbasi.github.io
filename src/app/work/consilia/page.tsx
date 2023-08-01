import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import CoursePlanner from "./course_planner.png";

export const metadata: ProjectMetaData = {
  title: "Consilia",
  image: CoursePlanner,
  date: new Date("2018-01-28T12:00:00.000+08:00"),
  description: "A smart academic planner for HKU.",
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
