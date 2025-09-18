import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const premiumSets = [
  {
    title: "Fantasy & Sci-Fi",
    description:
      "Odanizi cyberpunk sokaklara, arabanizi Mars yuzeyine tasiyan volumetrik isik ve atmosfer efektleri.",
    highlights: [
      "Neon ve hologram katmanlari",
      "Particle fog ve volumetrik isik",
      "Planet arkaplanlari ve lens flare"
    ],
  },
  {
    title: "Cartoon / Anime",
    description:
      "Cel shading, yumusak kontur ve pastel renk paletiyle karakter odakli sahneler olustur.",
    highlights: [
      "Vurgu cizgileri ve ink outline",
      "Anime glow ve speedline",
      "Panel panel storyboard cikti"
    ],
  },
  {
    title: "3D Mockup",
    description:
      "Urun gorsellerini profesyonel e-ticaret sunumlarina donusturen akilli yerlesim motoru.",
    highlights: [
      "Stilize setler ve refleksiyon plakalari",
      "Gercek zamanli kamera acisi ayarlari",
      "PSD ve glb formatinda cikti"
    ],
  },
  {
    title: "Virtual staging",
    description:
      "Gayrimenkul ic mekanlarini bosluk hissi olmadan dekore eden staging ve lighting presetleri.",
    highlights: [
      "Metrekareye gore mobilya onerisi",
      "Gercekci golgelendirme ve plan cizgileri",
      "Al buyer icin etiketli paket"
    ],
  },
]

const workflowPhases = [
  {
    label: "1. Sahneni tanimla",
    detail: "Render motoru perspektif, alan derinligi ve objeleri analiz ederek sahne turunu belirler.",
  },
  {
    label: "2. Premium preset sec",
    detail: "Kullandigin abonelik planina gore premium veya fun kategorisinden katmanlari eksilt, ekle veya kilitle.",
  },
  {
    label: "3. Export et & paylas",
    detail: "Ciktiyi AR, video veya statik gorsel olarak al; client portalina otomatik yuklenir.",
  },
]

const addonBenefits = [
  {
    title: "Render motoru",
    description:
      "GPU destekli render, volumetrik efektlerde bile saniyeler icinde onizleme sunar. Yavas cihazlarda bile calisir.",
  },
  {
    title: "Ekibine gore yetki",
    description:
      "Art direktorlere onay, junior tasarimcilara sadece preset uygulama yetkisi tanimla.",
  },
  {
    title: "Marka paketleri",
    description:
      "Kendine ozel LUT, font ve frame setlerini premium kutuphaneye ekleyip sifreli olarak sakla.",
  },
]

export default function PremiumEglenceliEfektlerPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Premium & fun koleksiyonlari</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Sahnelerini fantastik, anime veya 3D mockup deneyimine donustur
              </h1>
            </div>
            <p className="text-sm text-white/70">
              AuroraFX premium katmani, marka kampanyalari veya viral icerikler icin hazirlanmis efektler sunar. Fun kategorisi
              ise topluluk calismalariyla her hafta genisler.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-2">
          {premiumSets.map((set) => (
            <div
              key={set.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Preset ailesi</p>
                <h2 className="mt-4 text-2xl font-semibold">{set.title}</h2>
                <p className="mt-3 text-sm text-white/70">{set.description}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {set.highlights.map((highlight) => (
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
              <h2 className="text-3xl font-semibold">Premium akisi nasil calisir?</h2>
              <p className="mt-2 text-sm text-white/70">
                AI pipeline, staging objelerini sahneyle uyumlu hale getirirken render motoru dokulari optimize eder. Tum adimlar
                versiyonlanir, musterine paylasilabilir link ile gonderilir.
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
            {workflowPhases.map((phase) => (
              <div key={phase.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Adim</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{phase.label}</h3>
                <p className="mt-3 leading-relaxed">{phase.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.6fr,1fr] lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">Addon avantajlari</h2>
            <p className="mt-3 text-sm text-white/70">
              Premium katmanda gelen ek moduller, kreatif ekiplerinin bagimliligini azaltir. Yetki ve paylasim katmanlari bir
              arada calisir.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              {addonBenefits.map((addon) => (
                <div key={addon.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">{addon.title}</p>
                  <p className="mt-2 leading-relaxed">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Pipeline notlari</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Staging ve mockup icin otomatik checklist</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                Perspektif okumasina gore kamera acisini kilitle, renderda bokeh ve lens flare tutarliligi sagla.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                Virtual staging yaparken objelerle carpismayi engellemek icin collision map kullan.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                Mockup ciktisini PSD katmanli olarak indir, e-ticaret sayfana uyacak responsive crop setlerini olustur.
              </li>
            </ul>
            <p className="mt-6 leading-relaxed">
              Tumu AuroraFX dashboardunda saklanir, ekip arkadaslarin pipeline adimlarini kopyalayabilir.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Eglenceli presetlerle markani ayristir</h2>
          <p className="mt-3 text-sm text-white/70">
            Fantasy veya anime duzenlemeleri promo kampanyalarinda kullan, virtual staging ile gayrimenkul portfoyunu dakikalar
            icinde guncelle.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Premium planlari gor
            </Link>
            <Link
              href="/gorsel/kullanici-akisi"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Kullanici akisina bak
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
