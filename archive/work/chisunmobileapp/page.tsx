import { ProjectMetaData } from "@/types/content";
import Content from "./content.mdx";
import { Project } from "@/components/Project";
import SplashScreen from "./csm_1_splash.png";

export const metadata: ProjectMetaData = {
  title: "Chi Sun Mobile App",
  image: SplashScreen,
  date: new Date("2019-03-26T12:00:00.000+08:00"),
  description:
    "Mobile app built using React Native and GraphQL for Chi Sun College of University of Hong Kong.",
  highlight: true,
};

export default function Page() {
  return (
    <Project title={metadata.title} date={metadata.date}>
      <Content />
    </Project>
  );
}
