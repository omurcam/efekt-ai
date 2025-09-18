import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { capabilityStreams, gallery } from "@/lib/site-content"

export default function VisualPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Hazir gorsel efektler</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Preset koleksiyonunu sec, fotograflarinla saniyeler icinde eslestir
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Portre, urun, moda ve mimari preset setleri tek panelde. Gorsellerini surukle-birak yukle, AuroraFX otomatik
              maskeleme ve isik eslesmesiyle sonuclari hazirlar.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Preset kutuphaneleri</h2>
            <p className="text-white/70">
              Hazir kitleri studyonuza gore etiketleyin, ekip arkadaslarinizla paylasin ve marka renklerinizi kaydedin.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {capabilityStreams.map((stream) => (
              <div
                key={stream.title}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-slate-900/90"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div>
                  <stream.icon className="mb-6 h-10 w-10 text-white" />
                  <h3 className="mb-3 text-xl font-semibold">{stream.title}</h3>
                  <p className="text-sm text-white/70">{stream.description}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {stream.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Efektleri kendi gorsellerinle dene</h2>
            <p className="text-white/70">
              Her preset, yukledigin gorseli analiz edip isik ve renk parametrelerini otomatik eslestirir. Ayni anda birden
              fazla varyasyon uret, favorilerini musterine gonder.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-3xl border border-white/10">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    priority={item.label === "Neon Portrait"}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-sm">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs uppercase tracking-wide text-white/70">AuroraFX Presets</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/40 p-8 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Gorsellerini yukle, preset’leri uygulamaya basla</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/70">
            Ucretsiz deneme hesabi acarak 10 gorsel yukleyebilir, 20 preset denemesi yapabilirsin. Daha fazla render ve ekip
            kolabrasyonu icin Pro veya Studio planlarina gec.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Uyelik planlarini gor
            </Link>
            <Link
              href="/video"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/70 hover:bg-white/10"
            >
              Video preset’lerini incele
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
