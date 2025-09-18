import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const enhancerModules = [
  {
    title: "Gercekci insan vucut detaylari",
    description:
      "Portre, moda ve fitness cekimlerinde cilt tonlarini bozmeden kusurlari giderip kas ve deri teksturunu koru.",
    highlights: [
      "Yuz puruzsuzlestirme: AI cilt maskesi parlakligi dengeler, gozenekleri yumusatirken makyaj detayini saklar.",
      "Kas ve deri netlestirme: Derinlik kattirma motoru, hacim kaybetmeden luminans kontrasti ekler.",
      "Portre iyilestirme: Goz yakalama, dis beyazlatma ve cilt tonu tutarliligini tek panelden yap.",
    ],
  },
  {
    title: "HDR ve renk duzenleme",
    description:
      "Cekim ortami ne olursa olsun profesyonel studyo hissi icin otomatik HDR katmanlari olustur.",
    highlights: [
      "Isik haritasi: Golge ve parlak bolgeleri ayri katmana al, clamp limitleriyle blooming kontrolu sagla.",
      "Renk kalibrasyonu: LUT ve WB onerileriyle cekimler arasi renk farkini saniyede sifirla.",
      "Kontrast kurgu paneli: Ton egri, local dodge & burn ve highlight recovery beraber calisir.",
    ],
  },
  {
    title: "Noise remover ve sharpen",
    description:
      "Dusuk isikta cekilmis veya sosyal medyadan gelen gorselleri yeniden canlandir.",
    highlights: [
      "AI tabanli kumlanma giderme: ISO 6400 ve uzeri fotolarda detay kaybetmeden temizlik yap.",
      "Akilli keskinlestirme: Kenar tespitiyle sadece ihtiyac olan bolgeyi vurgula, halo olusumunu engelle.",
      "Kalite kurtarma seti: JPEG artefakt temizligi, renk banding azaltma ve upscale pipeline'i hazir gelir.",
    ],
  },
]

const realtimeControls = [
  {
    label: "Canli katman karsilastirma",
    detail:
      "Before/After slicer, overlay veya yan yana modlariyla musteriye aninda varyasyon sun.",
  },
  {
    label: "Preset kaydet & paylas",
    detail:
      "Olusturdugun kombinasyonu ekip klasorune kaydet, marka bazli kilitli preset setleri uret.",
  },
  {
    label: "Otomatik batch akisi",
    detail:
      "Ayni ayarlari 100+ gorselle eslestir, render kuyrugunu buluta gonder ve bildirim al.",
  },
]

export default function ImageEnhancerPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Image enhancer modulleri</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Insan odakli cekimleri saniyeler icinde studyo seviyesine tasiyan AI duzenleme
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Cilt duzeltme, HDR tonlama ve keskinlestirme katmanlari eszamanli calisir. AuroraFX, referans preset setlerini
              cekimin isik bilgisine gore optimize ederek manual rotus yuku azaltir.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-3">
          {enhancerModules.map((module) => (
            <div
              key={module.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Modul</p>
                <h2 className="mt-4 text-2xl font-semibold">{module.title}</h2>
                <p className="mt-3 text-sm text-white/70">{module.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {module.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Canli kontrol paneli</h2>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Ton egri, maske yogunlugu ve keskinlestirme katmanlari birlestirici panelden kontrol edilir. Degistirdigin tum
                parametreler versiyonlanir, musterine onceki adimi geri getirme sansi sunulur.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="rounded-full border border-white/20 px-3 py-1">Batch render</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Edge aware sharpening</span>
              <span className="rounded-full border border-white/20 px-3 py-1">HDR stack</span>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {realtimeControls.map((control) => (
              <div
                key={control.label}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-white/70"
              >
                <h3 className="text-base font-medium text-white">{control.label}</h3>
                <p className="mt-2 leading-relaxed">{control.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Preset kitlerini kendi stiline gore kaydet</h2>
          <p className="mt-3 text-sm text-white/70">
            Her gorsel icin uygulanan duzenlemeler otomatik olarak kaydedilir. Bir sonraki cekimde ayni ayarlari tek tikla
            cagirmak icin kitini favorilere ekle, ekip arkadaslarinla paylas.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/gorsel/hazir-ai-efektler"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Hazir presetleri kesfet
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
