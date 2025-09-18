import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { previewVideo, workflow, workflowTimeline } from "@/lib/site-content"

export default function VideoPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Video efekt studyosu</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Hazir video preset’lerini yukledigin goruntulerle eslestir, saniyeler icinde render al
              </h1>
            </div>
            <p className="text-sm text-white/70">
              AuroraFX video motoru; efekt secimi, sahne eslestirme, onay ve dagitim sureclerini tek timeline’da toplar.
              Uyeligini baslat, canli onizleme linklerini ekip ve musterilerinle paylas.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projeleriniz icin onerilen workflow
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map((step) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold">Canli onizleme paneli</h3>
            <p className="text-sm text-white/70">
              Efekt parametreleri, render oncesi kontroller ve musteri yorumlari tek panelde toplanir. Ister ekip ici ister
              musteri onayi icin baglanti paylasin.
            </p>
            <video className="h-64 w-full rounded-2xl border border-white/10 object-cover" controls poster={previewVideo.poster}>
              <source src={previewVideo.src} type="video/mp4" />
              Tarayiciniz video etiketini desteklemiyor.
            </video>
            <p className="text-xs text-white/50">
              *Video gercek render motorundan alinmis ornek bir cikti degildir. Demo amaclidir.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Detayli onay akisi
          </span>
          <div className="relative">
            <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-white/50 via-white/20 to-transparent" />
            <div className="space-y-6">
              {workflowTimeline.map((stage, index) => (
                <div key={stage.phase} className="relative flex flex-col gap-2 pl-14">
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-slate-950 text-sm font-semibold text-white/80">
                    {index + 1}
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                    <span>{stage.phase}</span>
                    <span>{stage.duration}</span>
                  </div>
                  <p className="text-sm text-white/70">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-white/20 bg-slate-900/40 p-8 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Video preset’lerini denemek icin uyelik baslat
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/70">
            Demo hesabi ile 5 video projesi acabilir, 15 preset denemesi ve 1080p render alabilirsin. Ucretli planlar SDR ve
            HDR export, sinirsiz versiyon ve takim oturumlari sunar.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fiyatlar"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-slate-200"
            >
              Planlari incele
            </Link>
            <Link
              href="/gorsel"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/70 hover:bg-white/10"
            >
              Gorsel preset’leri kesfet
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
