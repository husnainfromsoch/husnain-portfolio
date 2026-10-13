import { toolLogos, type ToolLogoKey } from "@/components/ToolLogos";

type Item = { name: string; logo?: ToolLogoKey };

type Props = {
  items: readonly Item[];
  /** seconds for one full loop — bigger is slower */
  duration?: number;
};

/** Round white badge holding one brand logo. */
function LogoBadge({ logo }: { logo: ToolLogoKey }) {
  return (
    <span className="flex items-center gap-4 sm:gap-6">
      {toolLogos[logo].map(({ Icon, color }, i) => (
        <span
          key={i}
          className="grid size-16 shrink-0 place-items-center rounded-full border border-line bg-white shadow-sm sm:size-24"
        >
          <Icon className="size-8 sm:size-12" style={color ? { color } : undefined} />
        </span>
      ))}
    </span>
  );
}

/* The gap between logos is also added as right padding, so the
   space where the two copies of the row meet matches the rest. */
function MarqueeRow({ items, hidden }: { items: readonly Item[]; hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        /* Only the logo shows; the name is read out by screen readers
           and appears as a tooltip on hover */
        <li key={item.name} className="flex" title={item.name}>
          {item.logo && <LogoBadge logo={item.logo} />}
          <span className="sr-only">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

/** Infinite scrolling strip of tool logos. The list is rendered twice so the
 *  loop is seamless; the copy is hidden from screen readers. */
export default function Marquee({ items, duration = 36 }: Props) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="animate-marquee flex min-w-max"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <MarqueeRow items={items} />
        <MarqueeRow items={items} hidden />
      </div>
    </div>
  );
}
