import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const enhancerStacks = [
  {
    title: "Motion clarity",
    description:
      "Hareketli cekimlerde ghosting ve motion blur sorunlarini otomatik tespit edip gerekli karelere lokal duzeltme uygular.",
    points: [
      "AI stabilizasyon: Drone, gimbal veya elde cekilen planlari sarsinti olmadan hizli stabil hale getir.",
      "Frame blend kontrolu: Karelerin uzerine binen izleri incelt, kampanya videolarinda logoyu net tut.",
      "Dynamic motion mask: Hareketsiz alanlari kilitle, hareketli katmanlara akilli blur degiskeni uygula.",
    ],
  },
  {
    title: "Renk ve isik kalibrasyonu",
    description:
      "Seans boyunca cekilen farkli kameralarin renk profilini tek timeline icinde hizla esitler.",
    points: [
      "Match LUT: Kamera modeline gore otomatik LUT secimi yapar, beyaz dengesini saniyede otomatize eder.",
      "Canli scopes: Waveform, vectorscope ve histogram panelleri dogrudan timeline uzerinde acilir.",
      "HDR to SDR uyarlama: Yayim kanali hangi formatta ise AI ton haritalama ile dogru gamma degeri uygulanir.",
    ],
  },
  {
    title: "Broadcast ready ses ve goruntu",
    description:
      "Video ile senkron ses ve goruntu servisleri, streaming veya yayin oncesi kalite standartlarini yakalar.",
    points: [
      "Auto loudness: Ses seviyesini ITU standartlarina gore ayarlar, kompresyonu hassas sekilde uygular.",
      "Noise clean stack: ISO yuksek cekimlerdeki kumlanmayi temizler, mikro detaylari korur.",
      "Bitrate optimizasyonu: Platform bazli bit derinligi ve kare hizini otomatik onerir.",
    ],
  },
]

const controlHighlights = [
  {
    label: "Gercek zamanli render",
    detail: "GPU destekli onizleme, efekt katmanlarini saniyeler icinde gunceller, musteri yorumlarini bekletmez.",
  },
  {
    label: "Preset paylasimi",
    detail: "Hazirladigin motion enhancer setlerini ekip kutuphanesine kaydedip verilen rollerle paylas.",
  },
  {
    label: "Batch pipeline",
    detail: "Ayni ayarlari tum cekim gunlerine uygula, render kuyrugunu otomatik optimize et.",
  },
]

const diagnostics = [
  {
    stat: "+60%",
    label: "calisma hizinda artis",
  },
  {
    stat: "4K",
    label: "gercek zaman onizleme destegi",
  },
  {
    stat: "24 kare",
    label: "AI kare interpolasyonu ile sabitlenir",
  },
]

export default function MotionEnhancerPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Motion enhancer studyosu</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Hareketli cekimleri yayin kalitesine tasiyan AI destekli duzenleme katmanlari
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Stabilizasyon, renk kalibrasyonu ve ses optimizasyonu tek panelde bulusur. AuroraFX, iceri aktardigin timeline
              uzerinde hangi planin hangi araca ihtiyaci oldugunu otomatik onerir.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-3">
          {enhancerStacks.map((stack) => (
            <div
              key={stack.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Modul</p>
                <h2 className="mt-4 text-2xl font-semibold">{stack.title}</h2>
                <p className="mt-3 text-sm text-white/70">{stack.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {stack.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Kontrol merkezini tanimla</h2>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Motion enhancer kontrol paneli, timeline uzerindeki tum efektleri ayrintili sekilde takip eder. Degistirdigin
                parametreler otomatik versiyonlanir, musterine gonderilecek onizlemeler hazir bekler.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="rounded-full border border-white/20 px-3 py-1">Realtime preview</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Color pipeline</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Audio sync</span>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {controlHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-white/70"
              >
                <h3 className="text-base font-medium text-white">{item.label}</h3>
                <p className="mt-2 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Yayin oncesi kalite raporu al</h2>
          <p className="mt-3 text-sm text-white/70">
            AuroraFX kalite raporu, kare hizinden bit derinligine kadar tum detaylari kontrol eder. Hangi modullerin aktif
            oldugunu gorebilir, musterine PDF veya paylasim linki olarak gonderebilirsin.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/video/hazir-video-senaryolari"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Senaryolari kesfet
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:grid-cols-3">
          {diagnostics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center">
              <p className="text-3xl font-semibold text-white">{item.stat}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">{item.label}</p>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
