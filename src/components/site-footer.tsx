import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-white/50 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} AuroraFX. Tum haklari saklidir.</span>
        <div className="flex gap-4">
          <Link href="mailto:hello@aurorafx.ai" className="hover:text-white">
            Iletisim
          </Link>
          <Link href="#" className="hover:text-white">
            Gizlilik
          </Link>
          <Link href="#" className="hover:text-white">
            Kullanim Sartlari
          </Link>
        </div>
      </div>
    </footer>
  )
}
