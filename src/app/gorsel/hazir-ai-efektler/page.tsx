import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const scenarioDecks = [
  {
    title: "Odanin duzenini degistir",
    subtitle: "Bos alandan dekorasyonlu sahneye",
    description:
      "Tek tikla mobilya yerlesimi, renk paleti ve aksesuar onerileri al. Before/After slider ile musterine aninda goster.",
    presets: ["Minimalist salon", "Loft studio", "Cocuk odasi"],
  },
  {
    title: "Araban icin profesyonel cekim",
    subtitle: "Cinematic render modlari",
    description:
      "Gunduz ve gece sahnelere ozel LUT paketi, softbox isik simule eden reflektor ve zeminde yansima kontrolu.",
    presets: ["Showroom", "Sokak gece", "Studio backplate"],
  },
  {
    title: "Kiyafet degisimi",
    subtitle: "Ayni kare, farkli kombin",
    description:
      "Stil kaliplari, kumas teksturleri ve renk varyasyonlarini kisiye gore uyarla. Lookbook cekimlerini hizlandir.",
    presets: ["Casual", "Smart", "Streetwear"],
  },
  {
    title: "Mevsim efekti",
    subtitle: "Ayni mekan, farkli atmosfer",
    description:
      "Yazdan kis manzarasina, sonbahar tonlarindan ilkbahar ciceklerine otomatik gecer. Iklimle uyumlu isik seti ekler.",
    presets: ["Kis", "Yaz", "Sonbahar"],
  },
]

const quickStart = [
  {
    step: "Preset koleksiyonunu sec",
    detail:
      "Senaryo kartlarini favorilere ekle, musterine ozel board olustur ve paylasim linki yolla.",
  },
  {
    step: "Gorselini yukle",
    detail:
      "Surukle-birak yukle, AuroraFX sahne turunu tanir ve uygun isik setup\'ini onerir.",
  },
  {
    step: "Before/After teslim et",
    detail:
      "Tek link ile musterine ilet, yorumlari zaman damgasi ile topla, final versiyonu cloud render olarak indir.",
  },
]

const effectTips = [
  {
    label: "Stil kilidi",
    content:
      "Musterinin marka rehberi varsa renk ve tipografiyi preset kilidi olarak kaydet, gelecekteki tum calismalara uygula.",
  },
  {
    label: "Ileri maskeleme",
    content:
      "Otomatik maske yeterli degilse, AI yardimli firca ile saniyeler icinde manuel detay ekle.",
  },
  {
    label: "Batch varyasyon",
    content:
      "Birden fazla kombinasyon olusturup varyasyonlari paket halinde paylas, musterinin karar suresini kisalt.",
  },
]

export default function HazirAiEfektlerPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Hazir AI efektler</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Gundelik cekimlere saniyede yeni sahneler kazandiran preset kartlari
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Kullanici odakli senaryolar icin hazirlanan efekt setleri odanizi, arabanizi veya stil cekimlerinizi aninda
              donusturur. Before/After panelleriyle musterinizin kararsizligini ortadan kaldirin.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-2">
          {scenarioDecks.map((deck) => (
            <div
              key={deck.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8"
            >
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                  <span>Senaryo</span>
                  <span>{deck.subtitle}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{deck.title}</h2>
                <p className="mt-3 text-sm text-white/70">{deck.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
                {deck.presets.map((preset) => (
                  <span key={preset} className="rounded-full border border-white/20 px-3 py-1">
                    {preset}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">3 adimda teslimata hazir</h2>
              <p className="mt-2 text-sm text-white/70">
                Onceden hazirlanan otomasyon, musterinin calisma sekline gore personalize edilir. Tek tikla board paylasimi ve
                render teslimati elde edersin.
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
            {quickStart.map((item) => (
              <div key={item.step} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Adim</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.step}</h3>
                <p className="mt-3 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8">
          <div className="grid gap-6 lg:grid-cols-[0.6fr,1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Her efektte akilli ayarlar</h2>
              <p className="mt-3 text-sm text-white/70">
                Film gren, isik izleri, cam yansimalari veya kiyafet teksturu gibi ayrintilar AI tarafindan otomatik ayarlanir.
                Ihtiyac duydugunda manuel kontrolu devralabilirsin.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/70">
                {effectTips.map((tip) => (
                  <div key={tip.label} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">{tip.label}</p>
                    <p className="mt-2 leading-relaxed">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">Otomasyon destegi</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Scenelab motoru ile dakikalar icinde</h3>
              <p className="mt-3 leading-relaxed">
                AuroraFX Scenelab, yuklenen gorselin perspektifini ve renk sicakligini analiz eder. Buna gore uygun preset
                karisiklarina oncelik verir, fona gore maskeleme yogunlugu belirler.
              </p>
              <p className="mt-3 leading-relaxed">
                Render alirken once ornek kareleri gosterir, onayladiktan sonra tam cozunurlukte cikti hazirlar. Cloud uzerinde
                saklanan versiyonlara ekip arkadaslarin erisebilir.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Hazir efektleri musterine sunmaya hazirsin</h2>
          <p className="mt-3 text-sm text-white/70">
            Favori preset kartlarini pinle, musterinin talep ettigi varyasyonlari board olarak paylas. Onaylanan versiyonu tek
            tikla render kuyruguna ekle.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/gorsel/premium-eglenceli-efektler"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Premium efektlere gec
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
