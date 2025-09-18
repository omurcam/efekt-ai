"use client"

import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ShaderAnimation } from "@/components/ui/shader-animation"

const demoSteps = [
  {
    title: "Preset sec",
    description: "Kutuphane icinden fotograf ya da video preset paketini ac, favorilerini studyo panona ekle.",
  },
  {
    title: "Varlik yukle",
    description: "Gorsel veya video dosyalarini surukle birak, AuroraFX otomatik olarak boyut ve renk profillerini uyarlar.",
  },
  {
    title: "Efekti eslestir",
    description: "Maskeleri ince ayarla, isik ve renk parametrelerini slider ile kontrol et, sonucu aninda izle.",
  },
]

export default function DemoPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Canli shader demosi</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Preset efektlerini hizla test et, musterine ayni anda goster
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Bu demo, hesabiniza giris yaptiginizda kullanacaginiz shader motorunun aynisini calistirir. Efektleri dene,
              parametreleri degistir ve link ile paylas.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 md:grid-cols-3">
          {demoSteps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">{step.title}</h2>
              <p className="text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
          <div className="relative h-[520px] w-full">
            <div className="absolute inset-0">
              <ShaderAnimation className="h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950/80" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">Shader onizleme</span>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Preset parametrelerini degistir, sonuclari tek tikla kaydet
              </h2>
              <p className="max-w-xl text-sm text-white/70">
                Hesabinizda preset acip kaydettiginizde, burada gordugunuz onizleme paneline kendi gorseliniz gelecektir.
                Efekt degisikliklerini musterilere ve ekip uyelerine aninda gonderebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/40 p-8 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">Preset kutuphanesine erisim icin uyelik ac</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/70">
            Demo hesabı ile 10 preset kaydedebilir, 3 musterinizle link paylasabilirsiniz. Studio planlari sinirsiz render,
            versiyon, takim oturumu ve API erisimi sunar.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari gor
            </Link>
            <Link
              href="/video"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/70 hover:bg-white/10"
            >
              Video presetlerini incele
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
