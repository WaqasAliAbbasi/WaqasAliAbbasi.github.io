import { Metadata } from "next";
import { StaticImageData } from "next/image";

export type PostMetaData = Metadata & {
  title: string;
  date: Date;
  excerpt: string;
};

export type ProjectMetaData = Metadata & {
  title: string;
  date: Date;
  highlight?: boolean;
  description: string;
  image: StaticImageData;
};
