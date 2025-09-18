"use client"

import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import {
  features,
  heroActions,
  purposeHighlights,
  workflow,
} from "@/lib/site-content"

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <header className="relative flex min-h-screen flex-col overflow-hidden">
        <div className="absolute inset-0">
          <ShaderAnimation className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/75 to-slate-950" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center gap-6">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                AI effect studio for creators
              </span>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tighter sm:text-6xl">
                Hazir AI efektlerini iceriklerinle birkac dakikada bulustur
              </h1>
              <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                AuroraFX’e uye olun, fotograf ve videolarinizi yukleyin, ajans kalitesindeki preset’leri kendi markaniza
                uyarlayin. Render kuyrugu, paylasim linkleri ve musteri onayi tek panelde.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {heroActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-24 pb-24">
        <section className="relative mx-auto w-full max-w-6xl px-6">
          <div className="absolute inset-x-0 top-1/2 -z-10 h-[480px] -translate-y-1/2 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-emerald-500/10 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-10 backdrop-blur">
            <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Uyelikla calisan studyo</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Efekt koleksiyonlari ve bulut render tek platformda
                </h2>
              </div>
              <p className="max-w-lg text-sm text-white/70">
                AuroraFX, hazir icerik efektlerini saniyeler icinde denemeniz icin tasarlandi. Yuklediginiz her varlik, bulut
                kutuphanenizde saklanir ve ekip arkadaslarinizla paylasilir.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {purposeHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-white">{item.stat}</span>
                    <span className="text-xs uppercase tracking-wide text-white/60">{item.statLabel}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Hazir efektlerle kisisellestirilmis sonuclar
            </h2>
            <p className="text-white/70">
              Fotograf ve video preset’lerini markaniza gore duzenleyin; AuroraFX degisiklikleri gercek zamanli uygulasin.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <feature.icon className="mb-6 h-10 w-10 text-white" />
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Uc adimdan kisa surede kampanya hazir</h2>
            <p className="text-white/70">
              Uye oldugunuzda tum preset kutuphanesi, varlik yonetimi ve paylasim araclari tek bir timeline’da birlesir.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {workflow.map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-left">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/60 via-purple-600/60 to-slate-900 p-10 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Uyeligini baslat, efektlerini dagitmaya basla
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-white/80">
              Demo hesabiyla preset’leri ucretsiz dene, ekip planina gecerek sinirsiz render ve musteri paylasim linklerini
              aktif et.
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
                Video studyosunu ac
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
