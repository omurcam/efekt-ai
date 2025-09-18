import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const scenarioDecks = [
  {
    title: "Reklam spotu",
    subtitle: "15 sn sosyal medya",
    description:
      "Product shot, lifestyle ve call to action sahnelerini otomatik timeline sirasina dizer. Uygun metin alanlarini etiketiyle gosterir.",
    presets: ["Lifestyle macro", "Tabletop reveal", "CTA freeze"],
  },
  {
    title: "Short form icerik",
    subtitle: "TikTok / Reels",
    description:
      "Dikey format, hareketli typografi ve trend ses paketlerini timeline uzerine otomatik yerlestirir.",
    presets: ["Split beat", "Looped zoom", "Caption sync"],
  },
  {
    title: "Live action fragman",
    subtitle: "90 sn kampanya",
    description:
      "Trailer yapisina gore gerginlik, tempoyu artiran kesmeler ve LUT eslesmesi sunar.",
    presets: ["Act structure", "Punch hit", "Cinematic credits"],
  },
  {
    title: "Egitim videolari",
    subtitle: "Ekran kaydi + kamera",
    description:
      "Picture-in-picture, chapter etiketi ve otomatik altyazi zamanlamasi ile sureci hizlandirir.",
    presets: ["Lesson intro", "Callout", "Quiz slide"],
  },
]

const quickStart = [
  {
    step: "Senaryoyu sec",
    detail:
      "Kartlari favorilere ekle, musterine board olarak gonder, secili timeline sablonu ile calismaya basla.",
  },
  {
    step: "Timelinei doldur",
    detail:
      "Cekimlerini timelinea surukle, AuroraFX tempoya gore uygun kesme ve B-roll onerilerini sunar.",
  },
  {
    step: "Onay linki paylas",
    detail:
      "Before/After kaydi, yorum paneli ve versiyon karsiligi filtreleri ile musterinin karar suresini kisalt.",
  },
]

const automationTips = [
  {
    label: "Ses syncing",
    content:
      "Otuz saniyelik kampanyalarda vokal, efekt ve muzik katmanlarini otomatik hizalar, ducking uygular.",
  },
  {
    label: "Alt yazi ai",
    content:
      "Konusma tanima modulu, timeline uzerine otomatik metin ekler. Marka fontunu secip PDF olarak disari aktar.",
  },
  {
    label: "Render paketleri",
    content:
      "Hazir senaryolarin her biri icin platform bazli render paketleri olustur, YouTube, Instagram veya OTT icerikleri tek tikla al.",
  },
]

export default function HazirVideoSenaryolariPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Hazir video senaryolari</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Timelineini tek tikla hazirlayan senaryo kartlari ve otomasyonlar
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Senaryo kartlari cekim planini, B-roll alanlarini ve metin yerlesimlerini otomatik belirler. AuroraFX, timeline
              baglamini analiz ederek uygun preset ve ses paketlerini on plana cikarir.
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
              <h2 className="text-3xl font-semibold">Uc adimda teslimata hazir</h2>
              <p className="mt-2 text-sm text-white/70">
                Timeline sablonlari sabit degildir. Kendi cekim planina gore moduller ekleyip cikartabilir, musteriden gelen
                yorumlara gore saniyede yeni versiyon alirsin.
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

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="grid gap-6 lg:grid-cols-[0.6fr,1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Senaryolar icin otomasyon destegi</h2>
              <p className="mt-3 text-sm text-white/70">
                Anlik alt yazi, tempo tablosu ve ses miksaj oneri modulleri timeline deneyimini hizlandirir. Manual ayar yapmak
                istediginde tum kontrolu eline alabilirsin.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/70">
                {automationTips.map((tip) => (
                  <div key={tip.label} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">{tip.label}</p>
                    <p className="mt-2 leading-relaxed">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">Timeline notlari</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Storyboard ve ses paketlerini birlikte kullan</h3>
              <p className="mt-3 leading-relaxed">
                Senaryolar, timeline uzerinde hangi sahnenin hangi ses efektine ihtiyaci oldugunu isaretler. Bu sayede teslim
                ettigin versiyonlar marka rehberine uyumlu kalir.
              </p>
              <p className="mt-3 leading-relaxed">
                Onaylanan versiyonlari favorilere ekleyebilir, diger musteriler icin sifirdan olusturma suresini azaltirsin.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Senaryo kartlariyla produksiyona hiz kazandir</h2>
          <p className="mt-3 text-sm text-white/70">
            Favori kartlarini pinle, timeline sablonlarini ekibinle paylas ve hazir workflowu musterine sun.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/video/premium-sinematik-paketler"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Premium paketlere bak
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}


