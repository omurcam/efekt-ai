"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Gorsel", href: "/gorsel" },
  { label: "Video", href: "/video" },
  { label: "Fiyatlar", href: "/fiyatlar" },
]

interface SiteNavProps {
  className?: string
}

export function SiteNav({ className }: SiteNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-wrap items-center justify-end gap-3 text-sm", className)}>
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-full border px-4 py-2 transition",
              isActive
                ? "border-white/80 bg-white text-slate-950"
                : "border-white/20 text-white/80 hover:border-white/50 hover:text-white"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
