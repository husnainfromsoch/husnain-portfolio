import type { ComponentType, SVGProps } from "react";
import {
  SiClaude,
  SiFacebook,
  SiFigma,
  SiGithub,
  SiInstagram,
  SiShopify,
  SiTiktok,
  SiVercel,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";

type LogoProps = SVGProps<SVGSVGElement>;

/* n8n mark (from Simple Icons — not included in react-icons yet) */
const N8n = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
  </svg>
);

/* GoHighLevel's three rising arrows, in its yellow / blue / green */
const GoHighLevel = (p: LogoProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#FFBC00" d="M1.5 9.5 5 5.5l3.5 4H6.3V21H3.7V9.5z" />
    <path fill="#188BF6" d="M8.5 7 12 3l3.5 4h-2.2v14h-2.6V7z" />
    <path fill="#37CA37" d="M15.5 11.5 19 7.5l3.5 4h-2.2V21h-2.6v-9.5z" />
  </svg>
);

type Logo = { Icon: ComponentType<LogoProps>; color?: string };

/** Logo + brand colour for each tool key used in `marquee` (src/content/site.ts). */
const logos = {
  shopify: [{ Icon: SiShopify, color: "#7AB55C" }],
  figma: [{ Icon: SiFigma, color: "#F24E1E" }],
  webflow: [{ Icon: SiWebflow, color: "#146EF5" }],
  gohighlevel: [{ Icon: GoHighLevel }],
  wordpress: [{ Icon: SiWordpress, color: "#21759B" }],
  claude: [{ Icon: SiClaude, color: "#D97757" }],
  vercel: [{ Icon: SiVercel, color: "#000000" }],
  github: [{ Icon: SiGithub, color: "#181717" }],
  n8n: [{ Icon: N8n, color: "#EA4B71" }],
  social: [
    { Icon: SiInstagram, color: "#E4405F" },
    { Icon: SiFacebook, color: "#0866FF" },
    { Icon: SiTiktok, color: "#000000" },
  ],
} satisfies Record<string, Logo[]>;

export type ToolLogoKey = keyof typeof logos;
export const toolLogos: Record<ToolLogoKey, Logo[]> = logos;
