"use client"

import Facebook from "@/components/icons/social/facebook";
import Instagram from "@/components/icons/social/instagram";
import Tiktok from "@/components/icons/social/tiktok";
import Youtube from "@/components/icons/social/youtube";
import Zalo from "@/components/icons/social/zalo";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    Icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com",
    Icon: Youtube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com",
    Icon: Tiktok,
  },
  {
    name: "Zalo",
    href: "https://zalo.me",
    Icon: Zalo,
  },
];

function Contacts() {
  return (
    <section
      id="contacts"
      className="flex h-full items-center bg-[var(--art-surface-dark)] px-[5%] py-6 text-[var(--art-text-inverse)] md:py-10"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <div className="mb-10 flex max-w-full flex-col items-center text-center md:mb-12">
          <h2 className="homepage-motion homepage-motion-down mb-3 text-3xl font-semibold md:text-4xl">
            Kết nối với chúng tôi
          </h2>
          <p className="homepage-motion homepage-motion-up homepage-motion-delay-100 max-w-[640px] text-sm leading-6 text-[var(--art-text-white-65)] md:text-[17px] md:leading-7">
            Theo dõi các bộ sưu tập, tác phẩm mới và hoạt động nghệ thuật.
          </p>
        </div>

        <div className="homepage-motion homepage-motion-up homepage-motion-delay-180 flex w-full items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_20px_48px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--art-accent)] sm:h-[72px] sm:w-[72px] md:h-20 md:w-20"
            >
              <Icon className="h-7 w-7 transition group-hover:scale-110 md:h-8 md:w-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacts
