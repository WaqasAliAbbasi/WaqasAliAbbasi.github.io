export type AchievementData = {
  rank: number;
  awards: string[];
  date: string;
  title: string;
  link?: string;
  project?: string;
};
export const AWARDS: AchievementData[] = [
  {
    rank: 1,
    awards: ["Champion"],
    date: "11/01/2019",
    title:
      "Chengdu80 2019 - Inter-university fintech competition in Chengdu, China",
    link: "https://www.cs.hku.hk/news-events/news-and-announcements/20191104_Chengdu_2019",
    project: "/work/dragonsearch",
  },
  {
    rank: 1,
    awards: ["Champion"],
    date: "05/01/2018",
    title: "PolyU x Radica BigDatathon 2018",
    link: "https://www.datavalleyhk.com/bigdatathon",
  },
  {
    rank: 2,
    awards: ["Runner-up", "Best Presentation"],
    date: "06/01/2019",
    title: "BEA 100 Fintech Challenge",
    link: "https://www.hkbea.com/bea100fc/",
    project: "https://github.com/piy0999/Unicorns-First",
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "04/01/2019",
    title: "The Innovator Tribank Fintech Challenge 2019",
    link: "https://www.shacombank.com.hk/eng/main/fintech/2019/index.jsp",
    project: "https://github.com/piy0999/Unicorns-First",
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "11/01/2018",
    title:
      "Chengdu80 2018 - Inter-university fintech competition in Chengdu, China",
    project: "/work/pipo",
  },
  {
    rank: 2,
    awards: ["Runner-up", "Most Innovative Award"],
    date: "05/01/2018",
    title: "Imagine Cup Hong Kong Finals",
    link: "https://www.facebook.com/msphongkong/posts/1028750247300048",
    // project: "/work/creditsense"
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "03/01/2018",
    title: "HKU Global Challenges, Local Solutions 2018",
    link: "https://www.sustainability.hku.hk/event/global-challenges-local-solutions-changing-lives-for-good",
  },
  {
    rank: 2,
    awards: ["Runner-up"],
    date: "12/01/2017",
    title: "SCB (Shanghai Commercial Bank) Greater China Fintech Competition",
  },
  // {
  //   rank: 2,
  //   awards: ["Runner-up"],
  //   date: "12/01/2017",
  //   title: "HSBC Safeguard App Competition"
  // },
  // {
  //   rank: 3,
  //   awards: ["3rd Place"],
  //   date: "08/01/2017",
  //   title: "//oneweek (Microsoft Internal Hackathon)",
  //   project: "/work/metis"
  // },
  {
    rank: 4,
    awards: ["Incubated"],
    date: "03/01/2019",
    title: "iDendron | HKU Innovation & Entrepreneurship Hub",
    link: "https://idendron.hku.hk/",
    project: "http://takedailydose.com/",
  },
  {
    rank: 1,
    awards: ["HK$100,000 Seed Fund"],
    date: "05/01/2018",
    title: "CCMF (Cyberbort Creative Micro Fund)",
    link: "https://www.cyberport.hk/en/about_cyberport/cyberport_youth/cyberport_creative_micro_fund",
    // project: "/work/creditsense"
  },
  {
    rank: 1,
    awards: ["HK$100,000 Seed Fund"],
    date: "07/01/2021",
    title: "Hong Kong Science Park Ideation",
    link: "https://www.hkstp.org/what-we-offer/passion-matters/incubation-and-acceleration/ideation/",
  },
];

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
