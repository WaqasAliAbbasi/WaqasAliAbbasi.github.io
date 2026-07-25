import { GoogleAnalytics } from "@next/third-parties/google";

export const ClientScripts: React.FC = ({}) => {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-NTMPZXFZ7E" />
      )}
    </>
  );
};
