import { contactPage } from "@/content/site";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { WordsReveal } from "@/components/TextReveal";
import Reveal from "@/components/Reveal";

export default function ContactBooking() {
  const { booking } = contactPage;
  const hasCalLink = booking.calLink.trim().length > 0;

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow icon={ArrowRight}>{booking.eyebrow}</Eyebrow>
            <Heading className="mt-6">
              <WordsReveal text={booking.heading} />
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {booking.sub}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-card border border-line bg-card">
            {hasCalLink ? (
              <iframe
                src={`https://cal.com/${booking.calLink}?embed=true`}
                title="Book a call"
                className="h-[720px] w-full"
                loading="lazy"
              />
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 p-10 text-center">
                <span className="rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Coming soon
                </span>
                <p className="max-w-sm text-base leading-relaxed text-muted">
                  {booking.placeholder}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
