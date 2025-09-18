import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const sourceModules = [
  {
    name: "Kaynak paneli",
    detail: "Kamera, ekran paylasimi, video dosyasi ve grafik katmanlari tek listede yonetilir.",
  },
  {
    name: "Scene board",
    detail: "Intro, ana yayin, break ve kapanis sahnelerini tablo halinde siralar, tek tikla gecis saglar.",
  },
  {
    name: "Audio mixer",
    detail: "Konusmaci, muzik ve efekt kanallarini ayrica duzenler, limiter otomatik calisir.",
  },
  {
    name: "Stream monitor",
    detail: "Bitrate, kare hizi ve drop frame bilgilerini canli gosterir, uyarilari panelde isaretler.",
  },
]

const centerFeatures = [
  {
    title: "Timeline layer",
    description:
      "Lower third, overlay ve chat grafiklerini belirli anlara bagla, tekrar eden animasyonlari kaydet.",
  },
  {
    title: "Macro kontrol",
    description:
      "Tek kisa yol ile sahne degisimi, animasyon ve ses efektini ayni anda tetikle.",
  },
  {
    title: "Instant replay",
    description:
      "Spor veya etkinlik yayinlarinda son 20 saniyeyi otomatik kaydet, yavas cekimle tekrar yayinla.",
  },
]

const reviewTools = [
  {
    label: "Canli preview",
    detail: "Program ve preview pencerelerini yan yana gor, cikan grafikleri onceden denetle.",
  },
  {
    label: "Chat sync",
    detail: "Platform chat ve sosyal medya yorumlarini tek panelde topla, onayli olanlari ekrana gonder.",
  },
  {
    label: "Clipping",
    detail: "Anlik klip olustur, sosyal medyada paylasilacak dikey versiyonlari otomatik hazirla.",
  },
]

const retentionIdeas = [
  {
    title: "Favori sahneler",
    content:
      "En cok kullandigin sahne setlerini favorilere ekle, sonraki yayinlarda tek tikla cagir.",
  },
  {
    title: "Otomatik kayit",
    content:
      "Yayin basladiginda kayit modulunu aktif ederek yedek dosya olustur, reklam sponsoruna hizli teslim sagla.",
  },
  {
    title: "Analitik rapor",
    content:
      "Izlenme, etkilesim ve chat metriklerini yayin bitince otomatik rapora cevir, panelden indir.",
  },
]

export default function CanliAkisWorkflowPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Canli akis workflow</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Sol panel kaynak, merkez timeline, sag panel preview ile yayinini kontrol et
              </h1>
            </div>
            <p className="text-sm text-white/70">
              AuroraFX canli yayin paneli, kaynak secimi, grafik ekleme ve yayin kontrolunu tek ekranda toplar. Favori sahneler
              ve otomatik kayit, tekrar eden yayinlari hizlandirir.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Sol panel modulleri</h2>
          <p className="mt-3 text-sm text-white/70">
            Kaynak paneli yayin oncesi hazirliktan yayin anina kadar tum kontrolleri barindirir. Kategoriler sayesinde ekip
            icinde gorev paylasimi yapmak kolaylasir.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sourceModules.map((module) => (
              <div key={module.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{module.name}</p>
                <p className="mt-2 leading-relaxed">{module.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Merkez timeline deneyimi</h2>
              <p className="mt-2 text-sm text-white/70">
                Timeline, sahneler arasi gecisi otomatik olarak optimize eder. Makrolar sayesinde gecisler, grafik ve ses
                tetikleyicileri tek dokunusla calisir.
              </p>
            </div>
            <span className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Live control
            </span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {centerFeatures.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Timeline araci</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.55fr,1fr] lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Sag panel</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Preview ve denetim araci</h2>
            <ul className="mt-4 space-y-3">
              {reviewTools.map((tool) => (
                <li key={tool.label} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                  <div>
                    <p className="text-sm font-medium text-white">{tool.label}</p>
                    <p className="text-sm text-white/70">{tool.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8">
            <h3 className="text-2xl font-semibold text-white">Yayin kontrol notlari</h3>
            <p className="mt-3 text-sm text-white/70">
              Preview paneli, yayin oncesinde gelecek grafik veya sahne gecisini onceden gormenizi saglar. Chat senkronu ve klip
              olusturma araclari ile yayin sonrasi dagitim hizlanir.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Annotation</p>
                <p className="mt-2 leading-relaxed">
                  Chat moderasyonundan gelen notlari panelde isaretle, yayin akisi icerisinde hangi dakikada aksiyon alacagini bil.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Versiyon saklama</p>
                <p className="mt-2 leading-relaxed">
                  Kaydedilen tum yayinlar bulutta versiyonlu olarak saklanir, sponsorlara veya musterilere dogrudan link gonderebilirsin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {retentionIdeas.map((idea) => (
              <div key={idea.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{idea.title}</p>
                <p className="mt-2 leading-relaxed">{idea.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-slate-900/30 p-6 text-center text-sm text-white/70">
            Favori sahneler ve otomatik kayit modulleri, yayina her girdiginde ayni ayarlari tekrar kurma ihtiyacini kaldirir.
            Izleyici analiz raporlari, sonraki yayinlari planlamanda yol gosterir.
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Yayin ekibinle birlikte kontrolu elinde tut</h2>
          <p className="mt-3 text-sm text-white/70">
            AuroraFX canli akis paneli, favori sahneler, makrolar ve otomasyonlarla yayin tekrarlanabilirligini artirir.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/video"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Video ana paneline don
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

