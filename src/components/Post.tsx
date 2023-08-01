import React from "react";
import dayjs from "dayjs";
import { Divider } from "./Divider";

export const Post: React.FC<{
  title: string;
  date: Date;
  children: React.ReactNode;
}> = ({ title, date, children }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h3 className="mt-2">{dayjs(date).format("MMMM D, YYYY")}</h3>
      <Divider className="my-4" />
      <article className="prose dark:prose-invert">{children}</article>
    </div>
  );
};
