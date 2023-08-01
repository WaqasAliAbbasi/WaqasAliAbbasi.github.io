"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

export const ClientScripts: React.FC = ({}) => {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaMeasurementId="G-NTMPZXFZ7E" trackPageViews />
      )}
    </>
  );
};
