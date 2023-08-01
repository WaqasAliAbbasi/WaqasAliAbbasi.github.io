import Link from "next/link";

export const SocialLink: React.FC<{
  text: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
}> = ({ text, url, icon: Icon }) => (
  <Link href={url} className="flex">
    <Icon className="w-4 mr-2" />
    <span>{text}</span>
  </Link>
);
