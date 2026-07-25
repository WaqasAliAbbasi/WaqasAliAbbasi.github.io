import { metadata as StudentBaseMetaData } from "@/app/work/studentbase/page";
import { ProjectMetaData } from "@/types/content";

export const projects: Array<{ slug: string; metadata: ProjectMetaData }> = [
  {
    slug: "studentbase",
    metadata: StudentBaseMetaData,
  },
].sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
