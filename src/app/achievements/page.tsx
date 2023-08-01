import { Divider } from "@/components/Divider";
import { AWARDS, AchievementData, MONTH_NAMES } from "./data";
import Link from "next/link";
import { Metadata } from "next";

const formatDate = (date: string): string =>
  `${MONTH_NAMES[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;

const Achievement: React.FC<AchievementData> = ({
  title,
  link,
  project,
  date,
  awards,
}) => {
  return (
    <div>
      <h2 className="text-sm font-medium">
        {formatDate(date)}
        {project && (
          <span>
            <span> - </span>
            <Link href={project}>See Project</Link>
          </span>
        )}
      </h2>
      <h1 className="text-2xl font-semibold leading-7 mt-1">
        {awards.join(", ")}
      </h1>
      <p className="text-sm mt-1">
        {link ? <Link href={link}>{title}</Link> : title}
      </p>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Achievements",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      {AWARDS.sort(
        (a, b) =>
          a.rank - b.rank ||
          new Date(b.date).getTime() - new Date(a.date).getTime()
      ).map((award, key) => (
        <>
          <Achievement key={key} {...award} />
          {key < AWARDS.length - 1 && <Divider key={key} />}
        </>
      ))}
    </div>
  );
}
