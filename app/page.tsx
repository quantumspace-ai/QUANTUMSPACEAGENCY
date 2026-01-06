const solutions = [
  {
    label: "LANDING",
    title: "Landing page / Strona firmowa",
    description: "Nowoczesne strony wizytówki, landing page'e i serwisy usługowe pod pozyskiwanie klientów."
  },
  {
    label: "SKLEP",
    title: "Sklep internetowy",
    description: "WooCommerce / Shopify. Szybkie wdrożenia, optymalizacja checkoutu, porządek w produktach."
  },
  {
    label: "APP",
    title: "Aplikacja webowa",
    description: "Panele, konfiguratory, narzędzia wewnętrzne. Dedykowane rozwiązania w Next.js."
  }
];

const industryChips = [
  "Budowlanka",
  "Usługi lokalne",
  "Restauracje",
  "E-commerce",
  "Portale",
  "Rekrutacja",
  "Events"
];

const steps = [
  {
    label: "STEP 1",
    title: "Ustalenie celu",
    description: "Krótka rozmowa i zebrane materiały. Ustalamy zakres, treści i priorytety."
  },
  {
    label: "STEP 2",
    title: "Projekt i wdrożenie",
    description: "Składamy stronę/sklep/apkę. Dostajesz podgląd i robimy poprawki."
  },
  {
    label: "STEP 3",
    title: "Publikacja i przekazanie",
    description: "Wrzucamy na hosting/Vercel, podpinamy domenę i przekazujemy gotowca."
  }
];

const exampleGallery = [
  {
    src: "/examples/example-31onlineshop.png",
    label: "Sklep modowy",
    category: "E-commerce",
    layoutClass: "md:col-span-5 md:col-start-8 md:row-start-1"
  },
  {
    src: "/examples/example-botanicashopkosmetyki.png",
    label: "Kosmetyki premium",
    category: "E-commerce",
    layoutClass: "md:col-span-5 md:col-start-5 md:row-start-1 md:translate-y-6"
  },
  {
    src: "/examples/example-1.png",
    label: "Streetwear drops",
    category: "E-commerce",
    layoutClass: "md:col-span-5 md:col-start-2 md:row-start-1 md:translate-y-10"
  },
  {
    src: "/examples/example-landingsaas17.png",
    label: "Strona produktu",
    category: "Landing",
    layoutClass: "md:col-span-6 md:col-start-7 md:row-start-2 md:translate-y-12"
  },
  {
    src: "/examples/example-20-eventwebsitetech.png",
    label: "Event tech",
    category: "Website",
    layoutClass: "md:col-span-5 md:col-start-4 md:row-start-2 md:translate-y-16"
  },
  {
    src: "/examples/example-24mobileapp.png",
    label: "Panel aplikacji",
    category: "App",
    layoutClass: "md:col-span-4 md:col-start-1 md:row-start-2 md:translate-y-20"
  }
];

const exampleChips = [
  "Strony internetowe",
  "Sklepy online",
  "Aplikacje webowe",
  "Projekty graficzne",
  "Logo i identyfikacja",
  "Materiały do druku"
];

const pricingPlans = [
  {
    name: "Starter",
    price: "1999 PLN",
    description: "Dobry start dla prostego projektu.",
    bullets: ["Landing page / prosta strona", "Sekcje + kontakt", "Responsywność"],
    featured: false
  },
  {
    name: "Standard",
    price: "2999 PLN",
    description: "Najczęściej wybierany pakiet.",
    bullets: ["Strona firmowa / rozbudowany landing", "Lepsze UX + CTA", "Podstawowe SEO"],
    featured: true
  },
  {
    name: "Pro",
    price: "4099 PLN",
    description: "Większy projekt albo start sklepu.",
    bullets: ["Większy projekt / sklep startowy", "Więcej sekcji i podstron (opcjonalnie)", "Wsparcie przy publikacji"],
    featured: false
  }
];

export default function HomePage() {
  return (
    <>
      <header className="w-full sticky top-0 z-40 flex items-center justify-between px-6 md:px-8 py-4 bg-white/85 backdrop-blur border-b border-slate-200/60">
        <a href="#top" className="flex items-center gap-4">
          <img src="/logoqs.png" alt="QuantumSpace" className="h-8 w-auto scale-150 origin-left" />
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-slate-900 uppercase pl-1">
            QuantumSpace
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm md:text-base font-semibold text-slate-500">
          <a href="#examples" className="hover:text-slate-900 transition-colors">Wdrożenia</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pakiety</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Kontakt</a>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#contact"
            className="text-xs md:text-sm font-semibold text-white bg-slate-900 px-3 py-2 md:px-4 rounded-full hover:bg-oneq-blue transition-transform duration-200 hover:-translate-y-0.5"
          >
            Zaplanuj projekt
          </a>
        </div>
      </header>

      <section id="top" className="w-full">
        <div className="w-full flex flex-col items-center pt-16 md:pt-24 pb-10 px-4 md:px-0 relative z-20">
          <div className="relative text-center mb-10 md:mb-14 w-full max-w-6xl mx-auto">
            <div className="text-xs md:text-sm font-medium tracking-[0.35em] text-oneq-blue mb-6 uppercase animate-fade-in-up">
              QuantumSpace
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-oneq-text leading-tight tracking-tight mb-6 animate-fade-in-up">
              Budujemy strony, sklepy i aplikacje webowe.
            </h1>
            <p className="text-lg md:text-2xl font-medium text-slate-600 max-w-4xl mx-auto leading-normal animate-fade-in-up">
              Od landing page'y i stron firmowych po sklepy internetowe i dedWA. Czysto, szybko i bez chaosu.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Zaplanuj projekt
              </a>
              <a
                href="#examples"
                className="px-6 py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 transition-transform duration-200 hover:-translate-y-0.5 hover:border-oneq-blue"
              >
                Zobacz wdrożenia
              </a>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-2 md:px-0">
            <div className="md:col-span-2 p-6 md:p-7 rounded-[28px] bg-white/80 border border-white/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Zakres</div>
              <div className="text-xl font-semibold text-slate-900 mt-3">Od briefu do publikacji</div>
              <p className="text-sm text-slate-500 mt-2">
                Ustalamy cele, projektujemy i wdrażamy. Ty masz jasny proces i spokój po drodze.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Strategia</span>
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Projekt</span>
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Wdrożenie</span>
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Publikacja</span>
              </div>
            </div>
            <div className="p-6 md:p-7 rounded-[28px] bg-gradient-to-br from-white via-white to-slate-50 border border-slate-200 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
              <div className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Kontakt</div>
              <div className="text-xl font-semibold text-slate-900 mt-3">Szybki start bez chaosu</div>
              <p className="text-sm text-slate-500 mt-2">Odpisujemy konkretnie i od razu ustawiamy kolejne kroki.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6" id="solutions">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">Zakres usług</h2>
            <p className="text-slate-500 mt-3">Trzy szybkie pakiety wdrożeń do wyboru.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="text-left p-6 md:p-7 rounded-[28px] bg-white/80 border border-white/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] hover:scale-[1.01]"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">{solution.label}</div>
                <div className="text-xl font-semibold text-slate-900 mt-3">{solution.title}</div>
                <div className="text-sm text-slate-500 mt-2">{solution.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase text-center">
              Kategorie
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {industryChips.map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6" id="how">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mt-4">Jak pracujemy</h2>
            <p className="text-slate-500 mt-3">Jasny proces, bez niespodzianek.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const isFeatured = index === 1;
              return (
                <div
                  key={step.title}
                  className={
                    isFeatured
                      ? "relative p-7 md:p-9 rounded-[32px] bg-gradient-to-br from-white via-white to-slate-50 border border-slate-200 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.25)] md:-translate-y-2"
                      : "relative p-7 md:p-8 rounded-[32px] bg-white/80 border border-white/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]"
                  }
                >
                  {isFeatured ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-slate-900 text-[10px] font-semibold tracking-[0.3em] shadow">
                      PROCES
                    </div>
                  ) : null}
                  <div
                    className={
                      isFeatured
                        ? "inline-flex items-center px-3 py-1 rounded-full bg-oneq-blue text-white text-xs font-semibold tracking-widest"
                        : "inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-widest"
                    }
                  >
                    {step.label}
                  </div>
                  <div className="text-xl font-semibold mt-4">{step.title}</div>
                  <div className="text-sm text-slate-500 mt-2">{step.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6" id="examples">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
              Nasze wdrożenia - zawsze dbamy o detale
            </h2>
            <p className="text-slate-500 mt-4 max-w-4xl mx-auto text-sm md:text-base">
              Zajmujemy się również projektowaniem grafiki - od layoutów i identyfikacji wizualnej po pliki rastrowe i wektorowe, gotowe do druku i wykorzystania online.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {exampleChips.map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-6 md:gap-8">
            {exampleGallery.map((item) => (
              <div
                key={item.src}
                className={`group rounded-[28px] bg-white/80 border border-white/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] ${item.layoutClass}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{item.category}</div>
                  <div className="text-sm font-medium text-slate-900 mt-2">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6" id="automation">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">Kompleksowa obsługa projektu</h2>
            <p className="text-slate-500 mt-3 max-w-4xl mx-auto">
              Od pomysłu do publikacji. Bez chaosu i zbędnych pośredników.
            </p>
          </div>
          <div className="max-w-3xl mx-auto p-7 md:p-8 rounded-[32px] bg-white/80 border border-white/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
            <div className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase text-center">
              Zakres
            </div>
            <ul className="mt-5 space-y-3 text-sm md:text-base text-slate-600 text-left">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                <span>Strona internetowa / landing page</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                <span>Logo i identyfikacja wizualna</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                <span>Wizytówki i materiały do druku</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                <span>Stopka mailowa i podstawy brandingu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                <span>Domena i konfiguracja hostingu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                <span>Publikacja i przekazanie gotowego projektu</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">Pakiety</h2>
            <p className="text-slate-500 mt-3">Proste widełki na start. Dokładną wycenę potwierdzamy po rozmowie.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "relative p-8 rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-40px_rgba(15,23,42,0.7)]"
                    : "p-8 rounded-[32px] bg-white/80 border border-white/70 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)]"
                }
              >
                {plan.featured ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-slate-900 text-[10px] font-semibold tracking-[0.3em] shadow">
                    MOST POPULAR
                  </div>
                ) : null}
                <div
                  className={
                    plan.featured
                      ? "text-xs font-semibold tracking-[0.2em] text-slate-300"
                      : "text-xs font-semibold tracking-[0.2em] text-slate-400"
                  }
                >
                  {plan.name}
                </div>
                <div className={plan.featured ? "text-3xl font-semibold mt-4" : "text-3xl font-semibold text-slate-900 mt-4"}>
                  {plan.price}
                </div>
                <div className={plan.featured ? "text-sm text-slate-200 mt-3" : "text-sm text-slate-500 mt-3"}>
                  {plan.description}
                </div>
                <div className={plan.featured ? "mt-6 space-y-2 text-sm text-slate-200" : "mt-6 space-y-2 text-sm text-slate-600"}>
                  {plan.bullets.map((bullet) => (
                    <div key={bullet}>
                      <span className={plan.featured ? "font-medium text-white" : "font-medium text-slate-900"}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 px-6" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">GET IN TOUCH</h2>
          <p className="text-slate-500 mt-3 text-lg md:text-xl">
            Napisz albo zadzwoń - wrócimy z konkretem i propozycją.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="mailto:contact@quantumspace.agency"
              className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-oneq-blue transition-colors"
            >
              contact@quantumspace.agency
            </a>
            <a href="tel:728234306" className="text-sm text-slate-600 hover:text-slate-900">
              Tel: 728 234 306
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-slate-200/60 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <img src="/logoqs.png" alt="QuantumSpace" className="h-8 w-auto" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">QuantumSpace</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#solutions" className="hover:text-slate-900 transition-colors">Usługi</a>
            <a href="#examples" className="hover:text-slate-900 transition-colors">Wdrożenia</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pakiety</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Kontakt</a>
            <a
              href="https://www.instagram.com/quantumspace.agency/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:border-slate-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>
          </div>
          <div>(c) 2026 QuantumSpace</div>
        </div>
      </footer>
    </>
  );
}
