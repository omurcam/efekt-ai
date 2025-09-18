import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const premiumCollections = [
  {
    title: "Cinematic LUT setleri",
    description:
      "Log cekimlerinizi saniyede sinema tonlarina ceviren, sahne bazli LUT paketleri ile calis.",
    highlights: [
      "Analog film ve modern dijital tonlar",
      "Shot bazli otomatik LUT secimi",
      "Varyasyonlar icin look mixer",
    ],
  },
  {
    title: "Camera move library",
    description:
      "Virtual gimbal, crane ve dolly hareketlerini timeline uzerine ekle, render oncesi kamera yolunu ince ayar yap.",
    highlights: [
      "Spline tabanli kamera yolu",
      "Speed ramp ve ease kontrolu",
      "Parallax simulasyonu",
    ],
  },
  {
    title: "Volumetrik efekt suite",
    description:
      "Sis, godray ve particul efektlerini sahnene entegre et, render motoru ile uyumlu hale getir.",
    highlights: [
      "Z derinligine gore sis yogunlugu",
      "Ileri volumetrik isik kontrolu",
      "Atmosfer preset paylasimi",
    ],
  },
  {
    title: "Sound design stack",
    description:
      "Cinematic ses efektleri, kontakt melodiler ve atmosfer paketlerini otomatik timeline uyumu ile kullan.",
    highlights: [
      "Dolby ready miks sablonlari",
      "Dinamik ducking ve limiter",
      "Katman bazli ses presetleri",
    ],
  },
]

const workflowSteps = [
  {
    label: "1. Kaynagi tara",
    detail: "Footage metadata bilgisine gore LUT ve kamera hareketi onerileri otomatik cikartilir.",
  },
  {
    label: "2. Paket sec",
    detail: "Premium kutuphane planina gore sinematik LUT, volumetrik veya ses stacklerini kilitle.",
  },
  {
    label: "3. Render ve paylas",
    detail: "4K ve HDR render al, musterine onizleme linki gonder veya versiyonlari bulutta sakla.",
  },
]

const addonNotes = [
  {
    title: "Versiyon izleme",
    description:
      "Her premium preset uygulamasinda yeni bir versiyon olusur, onceki adimlara tek tikla donebilirsin.",
  },
  {
    title: "Ekip roller",
    description:
      "Art direktorler onay verirken, editorler preset parametrelerini degistirebilir, stajyerler sadece onizleme alir.",
  },
  {
    title: "Render pipeline",
    description:
      "GPU destekli kuyru, tum preset katmanlari render ederken codec ve bitoran ayarlarini otomatik sec.",
  },
]

export default function PremiumSinematikPaketlerPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Premium sinematik paketler</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Sinema kalitesindeki LUT, kamera hareketi ve ses presetleri tek panelde
              </h1>
            </div>
            <p className="text-sm text-white/70">
              AuroraFX premium katmani, cekimlerinizi sinema tonalitesine tasiyan kamera, isik ve ses presetlerini bir araya
              getirir. Timeline baglamini analiz edip en uygun kombinasyonu onerir.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-2">
          {premiumCollections.map((collection) => (
            <div
              key={collection.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Preset ailesi</p>
                <h2 className="mt-4 text-2xl font-semibold">{collection.title}</h2>
                <p className="mt-3 text-sm text-white/70">{collection.description}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {collection.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Premium akisi nasil ilerler?</h2>
              <p className="mt-2 text-sm text-white/70">
                Kaynak cekimlerin formatini algilayan motor, hangi preset ailesinin uygun oldugunu belirler. Manual degisim
                gerektiginde lut, kamera hareketi veya volumetrik katmanlarini saniyede guncelleyebilirsin.
              </p>
            </div>
            <Link
              href="/demo"
              className="rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Demoyu izleyin
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workflowSteps.map((step) => (
              <div key={step.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Adim</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.label}</h3>
                <p className="mt-3 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.6fr,1fr] lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">Addon avantajlari</h2>
            <p className="mt-3 text-sm text-white/70">
              Premium paketlere ozel modul setleri, ekiplerin is akisini hizlandirirken kreatif kontrolu kaybetmemeni saglar.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              {addonNotes.map((addon) => (
                <div key={addon.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">{addon.title}</p>
                  <p className="mt-2 leading-relaxed">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Pipeline notlari</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Sinematik render icin referans kontrol listesi</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                LUT secimi sonrasi scope kontrolu yap, ton egri tutarliligini sagla.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                Kamera hareketi presetinde easing degerlerini proje duygusuna gore ayarla.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                Ses stackleri ile final mixte headroom birak, platform standartlarini yakala.
              </li>
            </ul>
            <p className="mt-6 leading-relaxed">
              Tum planlar AuroraFX dashboardunda saklanir, yeni projelerde tek tikla ayni pipelinei uygulayabilirsin.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Premium presetlerle sinema standardi</h2>
          <p className="mt-3 text-sm text-white/70">
            Cinematic LUT ve volumetrik setlerini musterine sun, kamera hareketi presetleriyle projene akicilik kat.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Premium planlari gor
            </Link>
            <Link
              href="/video/canli-akis-workflow"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Canli akis paneline bak
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
