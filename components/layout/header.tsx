"use client"
import { Menu, Search, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import DropdownLanguages from '../dropdown-languages'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: "/paintings-category", label: "Tranh vẽ" },
  { href: "/statues-category", label: "Tượng" },
  { href: "/artists", label: "Họa sĩ" },
]

function Header() {
  const [isScroll, setIsScroll] = useState<boolean>(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const isMounter = useRef<any>(null)
  const router = useRouter();

  const onScroll = () => {
    if (window.scrollY > 50) {
      if (!isMounter.current) {
        setIsScroll(true)
        isMounter.current = true
      }
    } else {
      if (isMounter.current) {
        setIsScroll(false)
        isMounter.current = false
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isDrawerOpen])

  return (
    <>
      <header className={`sticky top-0 z-50 w-full px-[5%] ${isScroll ? "bg-(--art-overlay-header) backdrop-blur-2xl" : "bg-(--art-surface-dark)"}`}>
        <div className="mx-auto flex max-w-350 items-center gap-10 py-3">
          <Link
            href="/"
            onClick={() => {
              router.push("/")
            }}
            aria-label="ArtGallery"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--art-accent)]"
          >
            <Image
              src="/logo_big.png"
              alt="ArtGallery"
              width={150}
              height={40}
              className="h-8 w-auto object-contain md:h-9"
            />
          </Link>
          <nav className="hidden items-center gap-7 text-base font-semibold text-[var(--art-text-white-78)] lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                onClick={() => {
                  router.push(item.href)
                }}
                href={item.href}
                className="transition hover:text-[var(--art-text-inverse)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <label className="hidden items-center gap-2 rounded-full border border-[var(--art-border-light)] bg-[var(--art-overlay-white-soft)] px-4 py-2 text-sm text-[var(--art-text-white-65)] backdrop-blur md:flex">
              <Search className="h-4 w-4" />
              <input
                type="search"
                placeholder="Tìm kiếm tranh vẽ, tượng..."
                className="w-48 bg-transparent text-sm text-[var(--art-text-inverse)] placeholder:text-[var(--art-text-white-45)] focus:outline-none xl:w-64"
              />
            </label>
            <DropdownLanguages />
            <button
              type="button"
              aria-label={isDrawerOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isDrawerOpen}
              onClick={() => setIsDrawerOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--art-border-light)] text-[var(--art-text-inverse)] transition hover:bg-[var(--art-overlay-white-soft)] lg:hidden"
            >
              {isDrawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/45 transition ${isDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-svh w-full max-w-sm flex-col bg-[var(--art-surface-dark)] px-5 py-5 text-[var(--art-text-inverse)] shadow-[var(--art-shadow-panel)] transition-transform duration-300 sm:px-6 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="flex items-center justify-between border-b border-[var(--art-border-light)] pb-4">
          <span className="text-sm font-medium tracking-[0.18em] text-[var(--art-text-white-65)] uppercase">
            Menu
          </span>
          <button
            type="button"
            aria-label="Đóng drawer"
            onClick={() => setIsDrawerOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--art-border-light)] text-[var(--art-text-inverse)] transition hover:bg-[var(--art-overlay-white-soft)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 block md:hidden">
          <label className="flex items-center gap-2 rounded-full border border-[var(--art-border-light)] bg-[var(--art-overlay-white-soft)] px-4 py-3 text-sm text-[var(--art-text-white-65)] backdrop-blur">
            <Search className="h-4 w-4" />
            <input
              type="search"
              placeholder="Tìm kiếm tranh vẽ, tượng..."
              className="w-full bg-transparent text-sm text-[var(--art-text-inverse)] placeholder:text-[var(--art-text-white-45)] focus:outline-none"
            />
          </label>
        </div>

        <nav className="mt-8 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsDrawerOpen(false);
                router.push(item.href);
              }}
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-[var(--art-text-inverse)] transition hover:bg-[var(--art-overlay-white-soft)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Header
