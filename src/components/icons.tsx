import type { SVGProps } from "react";

const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-label="Next.js icon"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM43.4282 34H56.1226L85.3995 78.4853V34H97.1425V94H84.4481L55.1712 49.5147V94H43.4282V34Z"
      fill="currentColor"
    />
  </svg>
);

const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    role="img"
    aria-label="React icon"
    {...props}
  >
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TypescriptIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="TypeScript icon" {...props}>
        <path fill="#1976d2" d="M24,4,4,24V44H44V4Z" />
        <path fill="#fff" d="M22.5,22.2h-4.4v13H14V22.2H9.6V18.5h12.9Zm10.3-2.9-4.5,10.8-4.5-10.8h-4l6.8,15.7h3.3l6.8-15.7Z" />
    </svg>
);

const JavascriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="JavaScript icon" {...props}>
    <path fill="#fdd835" d="M35,42H13c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h22c2.2,0,4,1.8,4,4v28C39,40.2,37.2,42,35,42z" />
    <path fill="#212121" d="M24,31.2c2.9,0,4.7-1.8,4.7-4.2c0-2.8-2.1-3.9-4.9-3.9h-2.1v8.1H24z M21.7,24.8h2.1c1.5,0,2.3,0.6,2.3,2.1c0,1.4-0.8,2.2-2.3,2.2h-2.1V24.8z M33.1,31.5c1.7,0,2.9-1.3,2.9-3.2c0-2-1.2-3.2-2.9-3.2c-1.7,0-2.9,1.3-2.9,3.2C30.2,30.2,31.4,31.5,33.1,31.5z" />
  </svg>
);

const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Tailwind CSS icon" {...props}>
    <path
      d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.334,13.382,8.973,12,6.001,12z"
      fill="currentColor"
    />
  </svg>
);

const NodejsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="Node.js icon" {...props}>
        <path d="M11.773 1.571l-8.48 4.928v9.845l8.48 4.928 8.48-4.928V6.5l-8.48-4.929zm5.55 14.382l-5.55 3.228-5.55-3.228V7.931l5.55-3.228 5.55 3.228v8.022zm-3.11-6.195c-.066-.37-.433-.614-.8-.548-.37.065-.615.433-.548.8l.942 5.373c.066.37.432.614.8.548.37-.065.615-.433.548-.8l-.942-5.373zm-3.328 3.036c-.37-.066-.736.18-.8.548l-.942 5.373c-.066.37.178.736.548.8.37.066.736-.178.8-.548l.942-5.373c.066-.37-.178-.736-.548-.8z" fill="currentColor"/>
    </svg>
);


export const TechIcons = {
  nextjs: NextjsIcon,
  react: ReactIcon,
  typescript: TypescriptIcon,
  javascript: JavascriptIcon,
  tailwind: TailwindIcon,
  nodejs: NodejsIcon,
};
