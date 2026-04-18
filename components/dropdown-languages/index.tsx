"use client"

import { Check, ChevronDown, Flag, Globe } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { FlagVn } from '../icons/flag-vn'
import { FlagEn } from '../icons/flag-en'


const LANGUAGES = [
  { code: "vi", label: "VI", shortLabel: "VI", flag: <FlagVn width={20} height={16} /> },
  { code: "en", label: "EN", shortLabel: "EN", flag: <FlagEn width={20} height={16} /> },
] as const

function DropdownLanguages() {
  const languageRef = useRef<HTMLDivElement | null>(null)
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = useState<(typeof LANGUAGES)[number]>(LANGUAGES[0])

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }
    window.addEventListener("mousedown", onPointerDown)
    return () => window.removeEventListener("mousedown", onPointerDown)
  }, [])

  return (
    <div ref={languageRef} className="relative">
      <button
        type="button"
        onClick={() => setIsLanguageOpen((current) => !current)}
        aria-haspopup="menu"
        aria-expanded={isLanguageOpen}
        className="inline-flex items-center gap-2 rounded-full border border-(--art-border-light) px-4 py-2 text-sm text-(--art-text-white-85) transition hover:bg-(--art-overlay-white-soft)"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {selectedLanguage.flag}
        </span>
        {selectedLanguage.shortLabel}
        <ChevronDown
          className={`h-4 w-4 transition ${isLanguageOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isLanguageOpen ? (
        <div
          role="menu"
          className="absolute right-0 mt-3 min-w-36 overflow-hidden rounded-xl border border-(--art-border-light) bg-(--art-overlay-header) p-2 shadow-(--art-shadow-panel) backdrop-blur-2xl"
        >
          {LANGUAGES.map((language) => {
            const isActive = language.code === selectedLanguage.code

            return (
              <button
                key={language.code}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setSelectedLanguage(language)
                  setIsLanguageOpen(false)
                }}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-(--art-text-inverse) transition hover:bg-(--art-overlay-white-soft)"
              >
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden="true" className="text-base leading-none">
                    {language.flag}
                  </span>
                  <span>{language.label}</span>
                </span>
                {isActive ? <Check className="h-4 w-4 text-(--art-accent-hover)" /> : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default DropdownLanguages
