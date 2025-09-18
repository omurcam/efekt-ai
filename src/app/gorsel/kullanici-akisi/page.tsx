import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

const sidebarCategories = [
  {
    name: "Enhancer",
    detail: "Cilt duzenleme, HDR, noise giderme ve fotorealistik iyilestirme setleri.",
  },
  {
    name: "Realistic",
    detail: "Mimari, urun ve reklam icin neutral renk profilli preset akislari.",
  },
  {
    name: "Fun",
    detail: "Anime, cartoon, seasonal ve sosyal medya odakli paketler.",
  },
  {
    name: "Pro",
    detail: "Takim bazli pipeline, API entegrasyonu ve batch render otomasyonu.",
  },
]

const panelFeatures = [
  {
    title: "Orta panel kartlari",
    description:
      "Her efekt karti kucuk bir onizleme, etkilesim butonlari ve ayar seviyelerini gosterir. Hover ile animasyonlu gif onizleme acilir.",
  },
  {
    title: "Preview & Apply",
    description:
      "Preview butonu, soldan saga slider ile Before/After gosterir. Apply tusu secili tum gorsellere toplu uygular.",
  },
  {
    title: "Parametre kontrolu",
    description:
      "Renk, maske, doku gibi ileri ayarlar kartin icinden acilan drawer ile yapilir; tum degisiklikler surumlenir.",
  },
]

const rightPanel = [
  {
    label: "Yuklenen gorsel",
    detail: "Drag & drop ile gelen gorseller metadata bilgisiyle birlikte listelenir, crop ve hizalama uygulanir.",
  },
  {
    label: "Quick preview",
    detail: "Uyguladigin efektin onizlemesi animasyon veya statik kare olarak aninda cikar. Sliding timeline ozelligi varyasyonlari siralar.",
  },
  {
    label: "Geri al / versiyon",
    detail: "Onizleme panelinden onceki versiyona tek tikla don. Musteri yorumu eklenirse panelde isaretlenir.",
  },
]

const retentionIdeas = [
  {
    title: "Favoriler",
    content:
      "Kullanici herhangi bir karti yildizladiginda, kategoriye gore otomatik klasor olusur. Favori kartlari dashboard ana sayfasinda oncelikli gosterilir.",
  },
  {
    title: "Son kullanilanlar",
    content:
      "Son 20 efekt, sureye gore listelenir. Kullanici tek tikla ayni parametrelerle tekrar uygulayabilir.",
  },
  {
    title: "Ekip paylasimi",
    content:
      "Favori listeleri ekip bazinda paylasilabilir, rol bazli duzenleme veya sadece izleme yetkisi verilir.",
  },
]

export default function KullaniciAkisiPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Kullanici akisi</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Sol menuden preview paneline uzanan tek ekranlik sahne duzenleme deneyimi
              </h1>
            </div>
            <p className="text-sm text-white/70">
              AuroraFX dashboardu kategori, efekt kartlari ve onizleme panelini tek ekranda bulusturur. Favoriler ve son
              kullanilanlar, musterinin sık kullandigi efektleri her zaman elinin altinda tutar.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Sol menu kategorileri</h2>
          <p className="mt-3 text-sm text-white/70">
            Kategoriler, kullanicinin calisma tipine gore filtrelenir. Preset arayisini hizlandirir, ekipler icin ortak dil
            olusturur.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sidebarCategories.map((category) => (
              <div key={category.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{category.name}</p>
                <p className="mt-2 leading-relaxed">{category.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Orta panel deneyimi</h2>
              <p className="mt-2 text-sm text-white/70">
                Efekt kartlari gorselin hangi bolgesine dokundugunu netlestirir. Kullanici, kartlar arasinda arama, filtreleme ve
                toplu secim yapabilir.
              </p>
            </div>
            <span className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Preview & Apply
            </span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {panelFeatures.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Kart ozelligi</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.55fr,1fr] lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Sag panel</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Yuklenen gorsel ve hizli onizleme</h2>
            <ul className="mt-4 space-y-3">
              {rightPanel.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                  <div>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-white/20 bg-slate-900/30 p-8">
            <h3 className="text-2xl font-semibold text-white">Zaman cizelgesi ve yorumlar</h3>
            <p className="mt-3 text-sm text-white/70">
              Quick preview panelinde musteri yorumlari zaman damgasi ile kaydedilir. Notlar pipeline tablosunda otomatik
              cikar.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Annotation</p>
                <p className="mt-2 leading-relaxed">
                  Gorsel uzerindeki yorumlar, ekibinize is gorevi olarak atanabilir. Tamamlandiginda otomatik tiklenir.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Versiyon takibi</p>
                <p className="mt-2 leading-relaxed">
                  Her Apply isleminde yeni versiyon olusur. Onceki versiyonu indirmeden tek tikla donme imkani sunar.
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
            Favoriler ve son kullanilanlar paneli, musterilerin en sevdigi presetleri tekrar bulmasini kolaylastirir.
            Hatirlatici e-postalar, musterinin platforma yeniden donus oranini arttirir.
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Akisi ekiplerinle paylas</h2>
          <p className="mt-3 text-sm text-white/70">
            AuroraFX, kategori bazli rolleri ve favori panellerini esitleyerek ekiplerin senkronizasyonunu gucler.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/demo"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Canli demoyu izle
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
