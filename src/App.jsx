import { useState } from 'react'
import {
  academyLife,
  batches,
  contact,
  footer,
  hero,
  masterJourney,
  navLinks,
  philosophy,
  programs,
  specialNeeds,
  testimonials,
} from './content/siteContent'

const SectionShell = ({ id, eyebrow, title, description, children, background = '' }) => (
  <section id={id} className={`relative py-16 sm:py-20 ${background}`}>
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
      {(eyebrow || title || description) && (
        <div className="space-y-3">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>}
          {description && <p className="max-w-3xl text-lg text-slate-200">{description}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
)

const ImageTile = ({ item, onSelect }) => {
  const [hasError, setHasError] = useState(false)
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-slate-800">
      {!hasError ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
          onClick={() => onSelect?.(item)}
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-6 text-center text-sm text-slate-300">
          {item.caption || 'Upload an image to replace this placeholder.'}
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 p-4">
        <p className="text-sm font-semibold text-white">{item.caption}</p>
        <p className="text-xs text-slate-300">{item.alt}</p>
      </div>
    </div>
  )
}

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [lightboxItem, setLightboxItem] = useState(null)

  const handleNavClick = (target) => {
    const el = document.getElementById(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setNavOpen(false)
  }

  const renderBadge = (text) => (
    <span
      key={text}
      className="rounded-full bg-slate-900/60 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-500/30"
    >
      {text}
    </span>
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.12),transparent_30%),radial-gradient(circle_at_60%_70%,rgba(59,130,246,0.12),transparent_30%)]" />

      <header className="sticky top-0 z-30 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-extrabold text-slate-950 shadow-lg shadow-orange-500/30">
              PB
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-200">Pravinya Sports Academy</p>
              <p className="text-base font-bold text-white">Master Pravin Borde</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.target}
                className="transition hover:text-white"
                onClick={() => handleNavClick(link.target)}
                type="button"
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-emerald-400/40"
            >
              Book a Trial
            </a>
          </nav>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 text-white lg:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{navOpen ? '×' : '☰'}</span>
          </button>
        </div>
        {navOpen && (
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-4 sm:px-6 lg:px-8 lg:hidden">
            {navLinks.map((link) => (
              <button
                key={link.target}
                className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-slate-100 ring-1 ring-slate-800 transition hover:bg-slate-900/70"
                onClick={() => handleNavClick(link.target)}
                type="button"
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5"
            >
              Book a Trial
            </a>
          </div>
        )}
      </header>

      <main className="relative">
        <SectionShell
          id="home"
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.subtitle}
          background="pt-12 sm:pt-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <p className="max-w-3xl text-lg text-slate-200">{hero.description}</p>
              <div className="flex flex-wrap gap-3">
                {hero.ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      cta.primary
                        ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 hover:shadow-emerald-400/40'
                        : 'border border-slate-800 text-slate-100 hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-200'
                    }`}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">{hero.badges.map((b) => renderBadge(b))}</div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-orange-500/20 blur-3xl" />
              <div className="absolute -right-6 -bottom-8 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900 ring-1 ring-slate-800">
                <ImageTile item={hero.image} />
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="why" title={philosophy.title} description={philosophy.body}>
          <div className="grid gap-6 md:grid-cols-2">
            {philosophy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-slate-900/60 p-6 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-emerald-400/60"
              >
                <p className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-lg text-orange-200 ring-1 ring-orange-400/40">
                  ●
                </p>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="programs"
          eyebrow="Programs Offered"
          title="Train for every stage of life"
          description="Choose the program that matches your goals. Each path combines structure, safety, and progressive intensity."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 p-6 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-emerald-400/60"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/20">
                    ★
                  </span>
                  <h3 className="text-lg font-semibold text-white">{program.title}</h3>
                </div>
                <p className="text-sm text-slate-200">{program.description}</p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                >
                  Enquire about this program
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="master-journey"
          eyebrow="Legacy"
          title={masterJourney.title}
          description={masterJourney.intro}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="relative space-y-6 rounded-3xl bg-slate-900/50 p-6 ring-1 ring-slate-800">
                <div className="absolute left-4 top-4 h-10 w-10 rounded-full bg-orange-500/20 blur-2xl" />
                <div className="space-y-5">
                  {masterJourney.timeline.map((item) => (
                    <div key={item.headline} className="flex gap-4 rounded-2xl bg-slate-900/60 p-4 ring-1 ring-slate-800">
                      <div className="text-sm font-semibold text-emerald-200">{item.year}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.headline}</h3>
                        <p className="mt-1 text-sm text-slate-200">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-base font-semibold text-emerald-200">{masterJourney.quote}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {masterJourney.gallery.map((item) => (
                <ImageTile key={item.alt} item={item} onSelect={setLightboxItem} />
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="academy-life"
          eyebrow="Academy & Students in Action"
          title={academyLife.title}
          description={academyLife.intro}
        >
          <div id="gallery" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academyLife.images.map((item) => (
              <ImageTile key={item.alt} item={item} onSelect={setLightboxItem} />
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-300">{academyLife.note}</p>
        </SectionShell>

        <SectionShell
          id="special-kids"
          eyebrow="Inclusivity"
          title={specialNeeds.title}
          description={specialNeeds.body}
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ul className="space-y-4">
              {specialNeeds.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl bg-slate-900/60 p-4 text-sm text-slate-200 ring-1 ring-slate-800"
                >
                  <span className="mt-1 text-lg text-emerald-300">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-blue-500/10 p-6 ring-1 ring-emerald-400/40">
              <p className="text-lg font-semibold text-white">Personalized, patient, and joyful training.</p>
              <a
                href={specialNeeds.cta.href}
                className="mt-6 inline-flex max-w-xs items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-emerald-400/40"
              >
                {specialNeeds.cta.label}
              </a>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="testimonials"
          eyebrow="Impact"
          title="Testimonials & Impact Stories"
          description="Real stories from parents, students, and adult members. Replace with your own quotes anytime."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((story) => (
              <div
                key={story.name}
                className="flex h-full flex-col justify-between rounded-2xl bg-slate-900/60 p-6 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-emerald-400/60"
              >
                <p className="text-base text-slate-100">“{story.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-emerald-200">{story.name}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="timings"
          eyebrow="Schedule"
          title={batches.title}
          description="Structured batches for kids, teens, adults, and focused conditioning."
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {batches.schedule.map((item) => (
                <div key={item.name} className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-slate-800">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-slate-200">
                    {item.timings.map((time) => (
                      <li key={time}>{time}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-sm text-slate-300">{batches.note}</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800">
              <div>
                <p className="text-sm font-semibold text-emerald-200">{batches.location.title}</p>
                <p className="text-base text-white">{batches.location.address.join(', ')}</p>
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-slate-800">
                <iframe
                  title="Pravinya Sports Academy Location"
                  src={batches.location.mapEmbed}
                  className="h-64 w-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Get Started"
          title={contact.title}
          description={contact.subtitle}
          background="pb-24"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-4 rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-100">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-slate-100 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-100">
                  Age / Age Group
                  <select
                    name="age-group"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-slate-100 focus:border-emerald-400 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {contact.ageGroups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-100">
                  Program Interest
                  <select
                    name="program"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-slate-100 focus:border-emerald-400 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a program
                    </option>
                    {contact.programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-100">
                  Mobile Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 —"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-slate-100 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm font-semibold text-slate-100">
                Email (optional)
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-slate-100 focus:border-emerald-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-slate-100">
                Message / Special Requirements
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Share goals, experience, or specific needs."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-slate-100 focus:border-emerald-400 focus:outline-none"
                />
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-emerald-400/40"
                >
                  Submit Inquiry
                </button>
                <a
                  href={`tel:${contact.phone.replace(/\\s+/g, '')}`}
                  className="rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-200"
                >
                  Call Us
                </a>
                <a
                  href={contact.whatsapp}
                  className="rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-200"
                >
                  WhatsApp
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Your details are used only to contact you about classes at Pravinya Sports Academy.
              </p>
            </form>
            <div className="space-y-4 rounded-3xl bg-gradient-to-br from-orange-500/15 via-emerald-500/10 to-blue-500/10 p-6 ring-1 ring-emerald-400/30">
              <div>
                <p className="text-sm font-semibold text-emerald-200">Talk to us</p>
                <p className="text-xl font-bold text-white">{contact.phone}</p>
                <p className="text-sm text-slate-200">Master Pravin and team respond within 24 hours.</p>
              </div>
              <div className="space-y-1 text-sm text-slate-200">
                <p>Email: {contact.email}</p>
                <p>WhatsApp: {contact.whatsapp}</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 p-4 ring-1 ring-slate-800">
                <p className="text-sm font-semibold text-emerald-200">Training philosophy</p>
                <p className="text-sm text-slate-200">
                  Discipline with empathy, structured progressions, and safety-first coaching for every body type.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-slate-900/70 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-bold text-white">Pravinya Sports Academy</p>
            <p className="text-sm text-slate-300">{footer.tagline}</p>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Pravinya Sports Academy. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-200">
            {navLinks
              .filter((link) => ['Home', 'Programs', 'Master’s Journey', 'Contact'].includes(link.label))
              .map((link) => (
                <button
                  key={link.target}
                  className="rounded-full px-3 py-2 transition hover:bg-slate-900/60"
                  onClick={() => handleNavClick(link.target)}
                  type="button"
                >
                  {link.label}
                </button>
              ))}
            {footer.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-slate-900/60"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setLightboxItem(null)}
          role="presentation"
        >
          <div className="relative max-w-4xl overflow-hidden rounded-3xl bg-slate-950 ring-1 ring-slate-800">
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-slate-100 ring-1 ring-slate-800"
              onClick={() => setLightboxItem(null)}
              type="button"
            >
              Close
            </button>
            <img src={lightboxItem.src} alt={lightboxItem.alt} className="max-h-[80vh] w-full object-contain" />
            <div className="p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">{lightboxItem.caption}</p>
              <p>{lightboxItem.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
