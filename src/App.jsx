const highlights = [
  { label: 'Athletes trained', value: '1.2k+' },
  { label: 'Certified coaches', value: '22' },
  { label: 'Scholarships earned', value: '140' },
]

const programs = [
  { title: 'High-Performance Cricket', body: 'Daily nets, analytics-backed drills, and strength plans for serious players.' },
  { title: 'Football Development', body: 'Positional training, speed sessions, and small-sided matches with licensed coaches.' },
  { title: 'FitStart Juniors', body: 'Movement fundamentals, coordination, and fun sport circuits for ages 6–12.' },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
              Praveenya Sports Academy
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Train harder. Move smarter. Play with intent.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Elite coaching, sports science, and performance tracking for athletes at every level. Build habits that win seasons, not just matches.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg bg-emerald-500 px-4 py-2 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-emerald-500/40">
                Book a trial session
              </button>
              <button className="rounded-lg border border-slate-700 px-4 py-2 text-base font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-200">
                View programs
              </button>
            </div>
          </div>

          <div className="grid w-full max-w-md grid-cols-3 gap-3 rounded-2xl bg-slate-900/60 p-5 ring-1 ring-slate-800">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl bg-slate-800/60 px-4 py-3 text-center ring-1 ring-slate-700">
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group h-full rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-emerald-400/60"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/20">
                  ★
                </span>
                <h3 className="text-xl font-semibold text-white">{program.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-200">{program.body}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200">
                Learn more
                <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default App
