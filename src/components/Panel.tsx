export const Panel: React.FC<{
  subheading: string;
  heading: string;
  subtitle: string;
}> = ({ subheading, heading, subtitle }) => (
  <div>
    <h2 className="text-sm font-medium">{subheading}</h2>
    <h1 className="text-2xl font-semibold leading-7 mt-1">{heading}</h1>
    <p className="text-sm mt-1">{subtitle}</p>
  </div>
);
