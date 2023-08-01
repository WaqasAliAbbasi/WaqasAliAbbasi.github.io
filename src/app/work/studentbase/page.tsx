import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import StudentBaseSubjectPage from "./studentbase_1.png";

export const metadata: ProjectMetaData = {
  title: "StudentBase",
  image: StudentBaseSubjectPage,
  date: new Date("2020-01-11T12:00:00.000+08:00"),
  highlight: true,
  description: "A community of O and A Level students, tutors and teachers.",
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
