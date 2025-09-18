"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  description?: string
  children?: {
    label: string
    href: string
    description: string
  }[]
}

const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Gorsel",
    href: "/gorsel",
    description: "Preset koleksiyonlari, AI destekli duzenleme akislari ve workflow rehberleri.",
    children: [
      {
        label: "Image Enhancer",
        href: "/gorsel/image-enhancer",
        description: "Yuz duzeltme, HDR ayarlari ve detay canlandirma icin ileri araclar.",
      },
      {
        label: "Hazir AI Efektler",
        href: "/gorsel/hazir-ai-efektler",
        description: "Gundelik senaryolara gore hazirlanan before/after preset koleksiyonlari.",
      },
      {
        label: "Premium & Eglenceli Efektler",
        href: "/gorsel/premium-eglenceli-efektler",
        description: "Fantasy, anime, 3D mockup ve virtual staging setleri.",
      },
      {
        label: "Kullanici Akisi",
        href: "/gorsel/kullanici-akisi",
        description: "Sol menu kategorileri, onizleme kartlari ve favori sistemi ile akisi planla.",
      },
    ],
  },
  {
    label: "Video",
    href: "/video",
    description: "Video pipeline, canli onizleme ve render teslimat akislari.",
    children: [
      {
        label: "Motion Enhancer",
        href: "/video/motion-enhancer",
        description: "Goruntu duzeltme, renk uyumu ve broadcast seviyesinde ayrintilari netlestir.",
      },
      {
        label: "Hazir Video Senaryolari",
        href: "/video/hazir-video-senaryolari",
        description: "Reklam, sosyal medya ve live-action preset akislariyla timeline hizlandir.",
      },
      {
        label: "Premium Sinematik Paketler",
        href: "/video/premium-sinematik-paketler",
        description: "Cinematic LUT, camera move ve volumetrik efekt kutuphaneleri.",
      },
      {
        label: "Canli Akis Workflow",
        href: "/video/canli-akis-workflow",
        description: "Sol panel kaynak secimi, merkez timeline ve sag panel stream kontrolleri.",
      },
    ],
  },
  { label: "Fiyatlar", href: "/fiyatlar" },
]

interface SiteNavProps {
  className?: string
}

function matchesPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteNav({ className }: SiteNavProps) {
  const pathname = usePathname()
  const [openItem, setOpenItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openDropdown = (href: string) => {
    clearCloseTimeout()
    setOpenItem(href)
  }

  const scheduleClose = (href: string) => {
    clearCloseTimeout()
    closeTimeoutRef.current = setTimeout(() => {
      setOpenItem((current) => (current === href ? null : current))
      closeTimeoutRef.current = null
    }, 150)
  }

  useEffect(() => {
    function handlePointer(event: MouseEvent | TouchEvent) {
      if (!navRef.current) return
      const target = event.target as Node
      if (!navRef.current.contains(target)) {
        clearCloseTimeout()
        setOpenItem(null)
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearCloseTimeout()
        setOpenItem(null)
      }
    }

    document.addEventListener("mousedown", handlePointer)
    document.addEventListener("touchstart", handlePointer)
    document.addEventListener("keydown", handleKey)

    return () => {
      document.removeEventListener("mousedown", handlePointer)
      
      document.removeEventListener("touchstart", handlePointer)
      document.removeEventListener("keydown", handleKey)
      clearCloseTimeout()
    }
  }, [])

  useEffect(() => {
    clearCloseTimeout()
    setOpenItem(null)
  }, [pathname])

  return (
    <nav ref={navRef} className={cn("flex flex-wrap items-center justify-end gap-3 text-sm", className)}>
      {navItems.map((item) => {
        const isActive = matchesPath(pathname, item.href)

        if (!item.children) {
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
        }

        const isOpen = openItem === item.href

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => openDropdown(item.href)}
            onMouseLeave={() => scheduleClose(item.href)}
          >
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2 transition",
                isActive
                  ? "border-white/80 bg-white text-slate-950"
                  : "border-white/20 text-white/80 hover:border-white/50 hover:text-white"
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={(event) => {
                if (!isOpen) {
                  event.preventDefault()
                  openDropdown(item.href)
                }
              }}
            >
              <span>{item.label}</span>
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen ? "-rotate-180" : "rotate-0")} />
            </Link>

            {isOpen ? (
              <div
                className="absolute right-0 z-20 mt-2 w-72 rounded-2xl border border-white/10 bg-slate-950/95 p-3 text-left shadow-2xl backdrop-blur"
                onMouseEnter={() => openDropdown(item.href)}
                onMouseLeave={() => scheduleClose(item.href)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-xl border px-4 py-3 text-sm transition",
                    isActive
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/20 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white"
                  )}
                  onClick={() => {
                    clearCloseTimeout()
                    setOpenItem(null)
                  }}
                >
                  <div className="font-semibold">{item.label} ana paneli</div>
                  {item.description ? (
                    <p className="mt-1 text-xs text-white/60">{item.description}</p>
                  ) : null}
                </Link>

                <ul className="mt-3 space-y-2">
                  {item.children.map((child) => {
                    const childActive = matchesPath(pathname, child.href)

                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block rounded-xl border border-transparent px-3 py-2 text-sm transition",
                            childActive
                              ? "border-white/40 bg-white/10 text-white"
                              : "text-white/80 hover:border-white/20 hover:bg-white/5 hover:text-white"
                          )}
                          onClick={() => {
                            clearCloseTimeout()
                            setOpenItem(null)
                          }}
                        >
                          <div className="font-medium">{child.label}</div>
                          <p className="mt-1 text-xs text-white/60">{child.description}</p>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}
