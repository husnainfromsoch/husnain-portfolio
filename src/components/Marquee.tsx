type Props = {
  items: string[];
  /** seconds for one full loop — bigger is slower */
  duration?: number;
};

function MarqueeRow({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-2xl font-bold tracking-tight sm:px-9 sm:text-4xl">
            {item}
          </span>
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

/** Infinite scrolling strip of words. The list is rendered twice so the
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
