import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const footerLinks = [
  "Chính sách mua tranh",
  "Vận chuyển và lắp đặt",
  "Chính sách bảo mật",
  "Điều khoản sử dụng",
];

function Footer() {
  return (
    <footer className="bg-[var(--art-surface-dark)] text-[var(--art-text-inverse)] px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 border-t border-[var(--art-border-dark-soft)] pt-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <a
            href="/"
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
          </a>
          <p className="max-w-[400px] mt-2 text-sm  text-[var(--art-text-inverse)]">
            Sàn giao dịch nghệ thuật đương đại dành cho nhà sưu tập, nhà thiết kế và các không gian được tuyển chọn.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-x-6 gap-y-3 text-sm  text-[var(--art-text-inverse)]">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#/"
              className="transition hover:text-[var(--art-text-inverse)]"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="space-y-4 text-sm text-[var(--art-text-white-72)]">
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-[var(--art-accent-hover)]" />
            <span>Hotline: 0909 1111</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[var(--art-accent-hover)]" />
            <span>hello@artgallery.vn</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer