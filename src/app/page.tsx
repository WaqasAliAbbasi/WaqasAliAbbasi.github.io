import { Panel } from "@/components/Panel";
import { Divider } from "@/components/Divider";

import BriefcaseIcon from "@heroicons/react/24/solid/BriefcaseIcon";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import CodeBracketIcon from "@heroicons/react/24/solid/CodeBracketIcon";

import { SocialLink } from "@/components/SocialLink";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Waqas Ali",
  description:
    "Hi, I am Waqas and this is my personal website describing my projects, experience and achievements so far.",
  openGraph: {
    title: "Home | Waqas Ali",
    url: "https://waqasali.dev",
    description:
      "Hi, I am Waqas and this is my personal website describing my projects, experience and achievements so far.",
    siteName: "Waqas Ali",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Panel
        subheading="Currently"
        heading="Credit Suisse"
        subtitle="Software Engineer"
      />
      <Divider />
      <Panel
        subheading="Alma Mater"
        heading="University of Hong Kong"
        subtitle="Class of 2020"
      />
      <Divider />
      <section>
        <h1 className="font-semibold">Get In Touch</h1>
        <div className="mt-1 flex flex-row justify-between">
          <SocialLink
            icon={EnvelopeIcon}
            text="Email"
            url="mailto:waqas.abbasi@outlook.com"
          />
          <SocialLink
            icon={BriefcaseIcon}
            text="LinkedIn"
            url="https://linkedin.com/in/waqasaliabbasi"
          />
          <SocialLink
            icon={CodeBracketIcon}
            text="GitHub"
            url="https://github.com/WaqasAliAbbasi"
          />
        </div>
      </section>
    </div>
  );
}
