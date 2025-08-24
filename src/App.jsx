import React from "react"

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">T</div>
          <span className="font-semibold tracking-tight">Tentaguard</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-brand-700">Jak to DZIAŁA</a>
          <a href="#benefits" className="hover:text-brand-700">Dlaczego my</a>
          <a href="#pricing" className="hover:text-brand-700">Cennik</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-xl shadow hover:bg-brand-700 transition">Umów rozmowę</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Sprawdzimy, kto kliknie. <span className="text-brand-700">Zanim zrobi to przestępca.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Jedna realistyczna kampania phishingowa + przejrzysty raport w 7 dni. Idealne dla małych i średnich firm.
            {/* To jest tzw. value proposition — kluczowa obietnica dla klienta. */}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold shadow hover:bg-brand-700">
              Umów darmową rozmowę {/* CTA = wezwanie do akcji */}
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50">
              Zobacz cennik
            </a>
          </div>
          <div className="mt-6 text-slate-500 text-sm">
            {/* Social proof = dowód społeczny. Tu podmienisz na logotypy klientów / referencje. */}
            <span className="inline-block mr-2">Zaufali nam:</span>
            <span className="inline-block px-2 py-1 rounded bg-slate-100">[logo klienta]</span>
            <span className="inline-block px-2 py-1 rounded bg-slate-100">[logo klienta]</span>
            <span className="inline-block px-2 py-1 rounded bg-slate-100">[logo klienta]</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-100 rounded-3xl blur-2xl opacity-60"></div>
          <div className="relative rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-white">
            <div className="p-6 md:p-10">
              <div className="text-sm text-slate-500 mb-2">Podgląd raportu</div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-2xl font-bold">Phish‑prone Index: 24%</div>
                <div className="mt-2 text-sm text-slate-600">Kliknięcia: 12 • Zgłoszenia: 6 • Podania danych: 2</div>
                <div className="mt-4 h-36 w-full rounded-lg bg-gradient-to-r from-brand-200 to-brand-400"></div>
                <ul className="mt-4 text-sm list-disc pl-5 text-slate-600">
                  <li>3 rekomendacje na 30 dni</li>
                  <li>Porównanie działów</li>
                  <li>Strona edukacyjna dla podatnych</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: "Ustalamy zakres", desc: "Scenariusz, lista adresów, termin. Zero instalacji po Waszej stronie." },
    { title: "Wysyłamy kampanię", desc: "Realistyczne maile phishingowe z bezpiecznym landingiem edukacyjnym." },
    { title: "Raport + szkolenie", desc: "W 7 dni dostajesz liczby i krótkie szkolenie online dla podatnych." },
  ]
  return (
    <section id="how" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Jak to działa</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Prosty proces w czterech krokach — szybko i bezpiecznie.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const items = [
    { title: "Zgodność z RODO", desc: "Przetwarzamy wyłącznie służbowe adresy e‑mail, na podstawie umowy i zakresu." },
    { title: "Raport dla zarządu", desc: "Wskaźniki: Open / Click / Submit / Report + 3 kroki na 30 dni." },
    { title: "Realistyczne scenariusze", desc: "Microsoft 365, HR, dostawa paczki — to, co faktycznie atakuje MŚP." },
    { title: "Start w 48 h", desc: "Gotowe szablony i infrastruktura — szybko przechodzimy do działania." },
  ]
  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Dlaczego Tentaguard</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Skupiamy się na prostocie, szybkości i wynikach, które rozumie zarząd.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((b, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: "Basic Test",
      price: "1 800 zł",
      features: ["1 kampania e‑mail", "Raport PDF 6–8 stron", "Termin do 7 dni"],
      cta: "Zamów test",
    },
    {
      name: "Test + Szkolenie",
      price: "2 800 zł",
      features: ["1 kampania e‑mail", "Raport PDF 6–8 stron", "Szkolenie online 30 min"],
      cta: "Zamów pakiet",
      highlighted: true,
    },
  ]
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Cennik</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Prosto i transparentnie. Ceny netto, dla firm do 50 pracowników.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-3xl border p-8 shadow-sm ${t.highlighted ? "border-brand-300 bg-brand-50" : "border-slate-200 bg-white"}`}>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <ul className="mt-6 space-y-2 text-slate-700">
                {t.features.map((f, idx) => <li key={idx} className="flex items-start gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-brand-600"></span>{f}</li>)}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center justify-center w-full rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold shadow hover:bg-brand-700">
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">Większe zespoły? Napisz do nas — wyślemy wycenę.</p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-tr from-brand-600 to-brand-800 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Gotowy, żeby sprawdzić swój zespół?</h2>
        <p className="mt-3 text-white/90">Umów 15‑min rozmowę. Pokażemy Ci, jak wygląda kampania i raport.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-brand-700 px-6 py-3 font-semibold shadow hover:bg-slate-100">
            Umów rozmowę
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
            Zobacz cennik
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Kontakt</h2>
        <p className="mt-3 text-slate-600">Wypełnij formularz — oddzwonimy tego samego dnia roboczego.</p>
        {/* Na start najprościej podłączyć Google Forms. Wstaw tu link do swojego formularza. */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500 mb-4">Placeholder formularza — podmień na osadzony Google Form lub link.</p>
          <a href="https://forms.gle/" target="_blank" className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold shadow hover:bg-brand-700">
            Otwórz formularz kontaktowy
          </a>
          <div className="mt-6 text-sm text-slate-600">
            lub napisz na <a href="mailto:kontakt@tentaguard.com" className="underline decoration-brand-400 underline-offset-2">kontakt@tentaguard.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">T</div>
          <span className="font-semibold">Tentaguard</span>
        </div>
        <div className="flex items-center gap-6">
          <span>NIP: 0000000000 {/* podmień na swój */}</span>
          <a href="mailto:kontakt@tentaguard.com" className="hover:text-brand-700">kontakt@tentaguard.com</a>
          <a href="#" className="hover:text-brand-700">Polityka prywatności</a>
        </div>
        <div>© {new Date().getFullYear()} Tentaguard</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Nav />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
