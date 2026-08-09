import {
  siApachekafka,
  siApachespark,
  siClickhouse,
  siClojure,
  siDocker,
  siGithubactions,
  siGo,
  siGraphql,
  siJavascript,
  siJquery,
  siKotlin,
  siKubernetes,
  siNextdotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRedis,
  siRedux,
  siRust,
  siSpringboot,
  siTensorflow,
  siTerraform,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

import { CareerEntry } from "@/types/content";

import creditSuisse from "@/assets/logos/credit-suisse.svg";
import creditSuisseDark from "@/assets/logos/credit-suisse-dark.svg";
import grail from "@/assets/logos/grail.png";
import grailDark from "@/assets/logos/grail-dark.png";
import hku from "@/assets/logos/hku.png";
import microsoft from "@/assets/logos/microsoft.svg";
import qrt from "@/assets/logos/qrt.png";
import studentbase from "@/assets/logos/studentbase.png";

/** Newest first. The order here is the order down the rail; nothing sorts it. */
export const career: CareerEntry[] = [
  {
    kind: "work",
    organisation: "Qube Research & Technologies",
    href: "https://www.qube-rt.com",
    role: "Software Engineer, Tech Lead",
    start: "2024-04",
    logo: qrt,
    monogram: "QRT",
    defaultOpen: true,
    summary:
      "Tech lead on the firm's core data platform, owning the data lifecycle and catalog. Re-architected its storage so data can live in several databases at once, and designed the orchestration that migrates and syncs data across them. I also lead developer experience for the larger team.",
    stack: [siRust, siClickhouse, siPostgresql, siApachekafka, siKubernetes],
  },
  {
    kind: "work",
    organisation: "Credit Suisse",
    href: "https://en.wikipedia.org/wiki/Credit_Suisse",
    role: "Software Engineer, Assistant Vice President",
    start: "2020-08",
    end: "2024-03",
    logo: creditSuisse,
    logoDark: creditSuisseDark,
    monogram: "CS",
    highlights: [
      "Rebuilt the wealth management analytics platform on ClickHouse, with Prefect moving the data in. One query went from 1m 48s to 3s.",
      "Added lead tracking on top of it, which picked up 4,500 leads and USD 50M of orders in its first six months.",
      "Ran daily checks across 50,000 instruments for rating changes, maturities and price moves. A million rows, under ten minutes, on Spark and Clojure.",
      "Took a threaded monolith apart into 25 autoscaling processors on Kubernetes and got twice the throughput out of it.",
      "Rewrote an unreliable closed-source market data library in Clojure, which cut production errors by 80%.",
      "Set up the observability platform on OpenTelemetry, ClickHouse, Kafka Connect and Alertmanager, wrote its alerts as tested infrastructure code, and was on call for it.",
    ],
    stack: [
      siClojure,
      siKotlin,
      siPython,
      siTypescript,
      siApachespark,
      siApachekafka,
      siClickhouse,
      siReact,
      siKubernetes,
    ],
  },
  {
    kind: "life",
    organisation: "Graduated",
    period: "May 2020",
    emoji: "🎓",
  },
  {
    kind: "venture",
    organisation: "StudentBase",
    role: "Founder, Full Stack Engineer",
    start: "2019-06",
    end: "2022-03",
    href: "https://studentbase.app",
    logo: studentbase,
    monogram: "SB",
    highlights: [
      "A place for high school students to share notes and past papers. Started it at university, ran it for three years, and it still gets about 25,000 unique users a month.",
      "Hong Kong Science Park seed funded it with HK$100,000. I managed four part time engineers and an intern.",
      "Kept test coverage near 90%, mostly because I was the one who would be fixing it at 2am otherwise.",
      "Wound the company down in 2022 and left the platform running as a non profit rather than switch it off.",
    ],
    stack: [
      siNextdotjs,
      siTypescript,
      siGraphql,
      siPrisma,
      siPostgresql,
      siRedis,
      siTerraform,
      siGithubactions,
    ],
  },
  {
    kind: "work",
    organisation: "Credit Suisse",
    href: "https://en.wikipedia.org/wiki/Credit_Suisse",
    role: "Software Engineering Intern",
    period: "Summer 2019",
    logo: creditSuisse,
    logoDark: creditSuisseDark,
    monogram: "CS",
    summary:
      "Built an investment idea recommender, and a competition platform that graded submissions live during a recruiting event.",
    stack: [siTypescript, siReact, siVuedotjs, siSpringboot, siDocker],
  },
  {
    kind: "work",
    organisation: "GRAIL",
    href: "https://grail.com",
    role: "Software Engineering Intern",
    period: "Summer 2018",
    logo: grail,
    logoDark: grailDark,
    monogram: "G",
    summary:
      "Replaced manual monthly invoicing with a system that generated the invoices, synced customers to NetSuite and Salesforce, and handled discounts and corrections.",
    stack: [siGo, siReact, siRedux],
  },
  {
    kind: "work",
    organisation: "Microsoft",
    href: "https://www.microsoft.com",
    role: "Software Engineering Intern",
    period: "Summer 2017",
    logo: microsoft,
    monogram: "MS",
    summary:
      "Built a search tool that let the Hong Kong sales team match Azure products to what a client was actually asking for, side by side with the AWS equivalent.",
    stack: [siJavascript, siPython, siJquery],
  },
  {
    kind: "education",
    organisation: "The University of Hong Kong",
    href: "https://www.hku.hk",
    role: "BEng Computer Science, minor in Cognitive Science",
    period: "September 2016 to May 2020",
    logo: hku,
    monogram: "HKU",
    summary:
      "Full scholarship, 3.51/4.30. My final year project split an image analysis pipeline into per task containers behind a scheduler, taking 50 concurrent requests from 231s to 4.61s.",
    stack: [siTensorflow, siDocker, siTerraform],
  },
  {
    kind: "life",
    organisation: "Moved to Hong Kong",
    period: "September 2016",
    emoji: "✈️",
  },
  {
    kind: "life",
    organisation: "Wrote my first line of code",
    period: "2012",
    emoji: "💻",
  },
];
