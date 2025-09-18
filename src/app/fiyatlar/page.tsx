import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const plans = [
  {
    name: "Creator",
    price: "49$ / ay",
    description: "Solo icerik ureticileri icin hazir preset kutuphanesi ve sinirli render.",
    features: [
      "Aylik 10 proje ve 200 render kredisi",
      "250 GB bulut depolama",
      "20 takim preset slotu",
    ],
  },
  {
    name: "Studio",
    price: "129$ / ay",
    description: "Ajanslar ve produksiyon ekipleri icin sinirsiz preset erisimi ve ekip isbirligi araclari.",
    features: [
      "Sinirsiz preset ve render kuyrugu",
      "5 ekip uyesi dahil, ek koltuk 15$/ay",
      "Ileri duzey musteri paylasim linkleri",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Teklif",
    description: "Buyuk studyolar icin ozel altyapi, SLA, SSO ve yonetilen onboard surecleri.",
    features: [
      "Ozel render kumesi ve SSO",
      "Sinirsiz takim oturumu",
      "Ozel basari yoneticisi",
    ],
  },
]

const faqs = [
  {
    question: "Ucretsiz deneme hesabinda neler var?",
    answer:
      "Creator planina gecmeden once 10 gorsel, 5 video projesi ve 20 preset denemesi yapabilirsiniz. Renderlar 1080p olarak disa aktarilir.",
  },
  {
    question: "Kendi preset’lerimi yukleyebilir miyim?",
    answer:
      "Evet. AuroraFX preset formatina donusturulen LUT, shader ve animasyon paketlerini kutuphanenize ekleyebilir, ekip arkadaslarinizla paylasabilirsiniz.",
  },
  {
    question: "Musteri onay surecini nasil yonetiyoruz?",
    answer:
      "Her projeye ozel paylasim linki olusturup yorumlari zaman kodu veya gorsel koordinat uzerinden toplayabilirsiniz. Studio ve Enterprise planlarinda onay gecmisi saklanir.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              AuroraFX
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
              <SiteNav />
              <Link
                href="/fiyatlar"
                className="rounded-full bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200"
              >
                Ucretsiz dene
              </Link>
              <Link
                href="/fiyatlar"
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/50 hover:text-white"
              >
                Giris yap
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr,0.6fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Uyelik planlari</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Hazir AI efektleri icin ihtiyaciniza uygun plani secin
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Her plan, hazir preset kutuphanesi, bulut depolama ve musteri paylasim araclariyla gelir. Render kapasitesi ve
              takim koltuklari ihtiyaciniza gore olceklenir.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border border-white/10 p-8 transition ${
                plan.highlight ? "bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-slate-900/80" : "bg-slate-900/60"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{plan.name}</h2>
                <span className="text-sm uppercase tracking-wide text-white/70">{plan.price}</span>
              </div>
              <p className="mb-6 text-sm text-white/70">{plan.description}</p>
              <ul className="space-y-3 text-sm text-white/70">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="mailto:hello@aurorafx.ai"
                className={`mt-8 inline-flex items-center justify-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  plan.highlight
                    ? "border-white/80 bg-white text-slate-950 hover:bg-slate-200"
                    : "border-white/30 text-white hover:border-white/60 hover:bg-white/10"
                }`}
              >
                Satis ekibiyle gorus
              </Link>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Uyelikte neler var?</h2>
            <p className="text-sm text-white/70">
              Tum planlar preset kutuphanesi, bulut hafiza, proje paylasim linkleri ve ekip ici yorumlamayi icerir. Studio
              ustu planlarda API erisimi, webhook entegrasyonlari ve SSO destegi acilir.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-white/60">
              <span className="rounded-full border border-white/20 px-3 py-1">Preset yonetimi</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Canli onizleme</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Musteri linkleri</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Marka renk profilleri</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sik sorulanlar</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-sm font-semibold text-white">{faq.question}</p>
                  <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/40 p-8 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Hazir misiniz?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/70">
            Demo hesabinizla efekt kutuphanesini deneyin, memnun kalirsaniz tek tikla Studio planina gecis yapin. Tum
            projeleriniz ve preset ayarlariniz koruma altinda kalir.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="mailto:hello@aurorafx.ai"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Satisla iletisime gec
            </Link>
            <Link
              href="/gorsel"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/70 hover:bg-white/10"
            >
              Preset kutuphanesini gor
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
