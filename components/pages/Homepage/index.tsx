"use client";

import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Mail,
  Phone,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { startTransition, useDeferredValue, useState } from "react";
import Spotlight from "./Spotlight";

const categories = [
  "Truu tuong",
  "Son dau",
  "Toi gian",
  "Phong canh",
  "Chan dung",
];

const artworks = [
  {
    title: "Silent Geometry",
    artist: "Linh Pham",
    category: "Truu tuong",
    price: "18.500.000 VND",
    size: "120 x 160 cm",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    title: "Monsoon Garden",
    artist: "Minh Chau",
    category: "Son dau",
    price: "22.000.000 VND",
    size: "100 x 140 cm",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quiet Figure",
    artist: "An Nhien",
    category: "Chan dung",
    price: "16.200.000 VND",
    size: "90 x 120 cm",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Blue Interval",
    artist: "Gia Bao",
    category: "Toi gian",
    price: "12.800.000 VND",
    size: "80 x 100 cm",
    image:
      "https://images.unsplash.com/photo-1578301979108-0d323dfd26c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Horizon in Hue",
    artist: "Nhat Ha",
    category: "Phong canh",
    price: "19.600.000 VND",
    size: "110 x 150 cm",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    title: "Velvet Echo",
    artist: "Bao Tran",
    category: "Truu tuong",
    price: "14.900.000 VND",
    size: "85 x 115 cm",
    image:
      "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Moss Study",
    artist: "Thu Hoai",
    category: "Son dau",
    price: "20.400.000 VND",
    size: "120 x 120 cm",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soft Frame",
    artist: "Hoang Son",
    category: "Toi gian",
    price: "11.500.000 VND",
    size: "70 x 100 cm",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
  },
];

const artists = [
  {
    name: "Linh Pham",
    style: "Truu tuong duong dai",
    note: "Noi bat voi nhung lop mau co chieu sau va tiet tau toi gian.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Minh Chau",
    style: "Son dau phong canh",
    note: "Khai thac anh sang Viet Nam qua bo cuc rong va be mat day chat lieu.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "An Nhien",
    style: "Chan dung hien dai",
    note: "Tac pham tap trung vao anh mat, khoang lang va trang thai noi tam.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Thu Ha",
    role: "Interior stylist",
    quote:
      "Cach ArtGallery tu van rat chinh xac. Toi gui moodboard, doi ngu goi y ngay 3 tac pham hop ty le khong gian va anh sang.",
  },
  {
    name: "Quang Minh",
    role: "Collector",
    quote:
      "Phan trinh bay tac pham rat cao cap, khong bi giong san thuong mai. Moi buc tranh co cam giac duoc ke cau chuyen rieng.",
  },
  {
    name: "Ngan Tran",
    role: "Founder cafe concept store",
    quote:
      "Tuon van vao kha nang chot tranh nhanh, thong tin ro rang, hinh anh dep va doi ngu follow rat ky.",
  },
];

const footerLinks = [
  "Ve ArtGallery",
  "Chinh sach mua tranh",
  "Van chuyen va lap dat",
  "Chinh sach bao mat",
];

function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const deferredCategory = useDeferredValue(selectedCategory);
  const filteredArtworks = artworks.filter(
    (artwork) => artwork.category === deferredCategory,
  );

  return (
    <main className="min-h-[calc(100svh-150px)] bg-(--art-surface-light) text-(--art-text-primary)">
      <div className="relative overflow-hidden bg-(--art-surface-dark) text-(--art-text-inverse)">
        <Spotlight />
      </div>

      <section className="border-b border-[var(--art-border-dark-soft)] bg-[var(--art-surface-light)]">
        <div className="mx-auto grid max-w-[1920px] gap-6 px-4 py-14 md:grid-cols-3 md:px-8">
          {[
            "Curated bo suu tap cho nha o, resort va hospitality.",
            "Thong tin ro rang ve chat lieu, kich thuoc va tinh trang tranh.",
            "Tu van phong cach, anh sang va vi tri treo phu hop thuc te.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[26px] bg-[var(--art-surface-white)] px-6 py-6 shadow-[var(--art-shadow-card)]"
            >
              <Sparkles className="mb-4 h-5 w-5 text-[var(--art-accent)]" />
              <p className="max-w-[28ch] text-[17px] leading-7 text-[var(--art-text-black-80)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="collections"
        className="bg-[var(--art-surface-light)] px-4 py-18 md:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-[1920px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <p className="mb-3 text-sm tracking-[0.18em] text-[var(--art-text-black-55)] uppercase">
                Browse by category
              </p>
              <h2 className="text-4xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-6xl">
                Xem tranh theo category.
              </h2>
            </div>
            <p className="max-w-[420px] text-[17px] leading-7 text-[var(--art-text-black-62)]">
              Moi danh muc la mot nhan quan khac nhau. Chon category de loc bo
              suu tap dang duoc quan tam, sau do xem nhanh nhu luoi kham pha cua
              Instagram.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setSelectedCategory(category);
                    });
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm transition ${isActive
                    ? "bg-[var(--art-text-primary)] text-[var(--art-text-inverse)]"
                    : "border border-[var(--art-border-dark)] bg-[var(--art-surface-white)] text-[var(--art-text-black-72)] hover:border-[var(--art-border-dark-strong)]"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4">
            {filteredArtworks.map((artwork) => (
              <article
                key={artwork.title}
                className={`group relative overflow-hidden rounded-[26px] bg-black ${artwork.featured ? "col-span-2 row-span-2" : "row-span-1"
                  }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${artwork.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-20)] to-[var(--art-overlay-black-75)]" />
                <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-65)]">
                    {artwork.artist}
                  </p>
                  <h3 className="mt-2 text-2xl leading-tight font-semibold text-[var(--art-text-inverse)]">
                    {artwork.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--art-text-white-72)]">
                    <span>{artwork.size}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--art-overlay-white-dot)]" />
                    <span>{artwork.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="artists" className="bg-[var(--art-surface-dark)] px-4 py-18 text-[var(--art-text-inverse)] md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1920px]">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm tracking-[0.18em] text-[var(--art-text-white-55)] uppercase">
                Featured artists
              </p>
              <h2 className="max-w-[10ch] text-4xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-6xl">
                Mot so hoa si noi bat.
              </h2>
            </div>
            <p className="max-w-[420px] text-[17px] leading-7 text-[var(--art-text-white-68)]">
              Moi hoa si mang mot ngon ngu thi giac rieng. Phan nay tap trung vao
              gu tham my, ky thuat va chat giong nghe thuat.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {artists.map((artist) => (
              <article
                key={artist.name}
                className="overflow-hidden rounded-[28px] border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]"
              >
                <div
                  aria-hidden="true"
                  className="h-80 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${artist.image})` }}
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-45)]">
                    {artist.style}
                  </p>
                  <h3 className="mt-3 text-[30px] leading-tight font-medium">
                    {artist.name}
                  </h3>
                  <p className="mt-3 text-[17px] leading-7 text-[var(--art-text-white-70)]">
                    {artist.note}
                  </p>
                  <a
                    href="#consultation"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--art-accent-hover)]"
                  >
                    Nhan tu van theo hoa si
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--art-surface-white)] px-4 py-18 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1920px]">
          <div className="mb-10 max-w-[760px]">
            <p className="mb-3 text-sm tracking-[0.18em] text-[var(--art-text-black-50)] uppercase">
              Testimonials
            </p>
            <h2 className="text-4xl leading-[1.04] font-semibold tracking-[-0.04em] md:text-6xl">
              Danh gia tu khach hang da mua tranh.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[28px] bg-[var(--art-surface-light)] p-7 shadow-[var(--art-shadow-card)]"
              >
                <div className="mb-6 flex gap-1 text-[var(--art-accent)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${testimonial.name}-${index}`}>*</span>
                  ))}
                </div>
                <p className="text-[20px] leading-8 text-[var(--art-text-primary)]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-8">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-[var(--art-text-black-55)]">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consultation"
        className="bg-[var(--art-surface-light)] px-4 py-18 md:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1920px] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] bg-[var(--art-surface-dark)] p-8 text-[var(--art-text-inverse)] md:p-10">
            <p className="mb-3 text-sm tracking-[0.18em] text-[var(--art-text-white-50)] uppercase">
              Consultation
            </p>
            <h2 className="max-w-[10ch] text-4xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-6xl">
              Nhan tu van tranh cho khong gian cua ban.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[17px] leading-7 text-[var(--art-text-white-68)]">
              Dien thong tin co ban, doi ngu se lien he de de xuat bo suu tap,
              kich thuoc, chat lieu va muc ngan sach phu hop.
            </p>

            <div className="mt-10 space-y-4 text-sm text-[var(--art-text-white-72)]">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--art-accent-hover)]" />
                <span>Hotline: 0909 000 111</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--art-accent-hover)]" />
                <span>hello@artgallery.vn</span>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] bg-[var(--art-surface-white)] p-7 shadow-[var(--art-shadow-panel)] md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Ho va ten</span>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3">
                  <User className="h-4 w-4 text-[var(--art-icon-muted)]" />
                  <input
                    type="text"
                    placeholder="Nguyen Van A"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">So dien thoai</span>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3">
                  <Phone className="h-4 w-4 text-[var(--art-icon-muted)]" />
                  <input
                    type="tel"
                    placeholder="0909 123 456"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Email</span>
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3">
                  <Mail className="h-4 w-4 text-[var(--art-icon-muted)]" />
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Ngan sach du kien</span>
                <input
                  type="text"
                  placeholder="10.000.000 - 30.000.000 VND"
                  className="w-full rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3 text-sm focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Loai khong gian</span>
                <input
                  type="text"
                  placeholder="Phong khach / showroom / khach san..."
                  className="w-full rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3 text-sm focus:outline-none"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Mo ta nhu cau</span>
                <textarea
                  rows={5}
                  placeholder="Mo ta phong cach ban yeu thich, kich thuoc tuong, tong mau noi that, muc dich su dung..."
                  className="w-full rounded-3xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-4 text-sm leading-7 focus:outline-none"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[34ch] text-sm leading-6 text-[var(--art-text-black-52)]">
                Bang cach gui form, ban dong y de doi ngu ArtGallery lien he tu
                van theo thong tin da cung cap.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--art-accent)] px-6 py-3 text-sm font-medium text-[var(--art-text-inverse)] transition hover:bg-[var(--art-accent-hover)]"
              >
                Gui yeu cau
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[var(--art-surface-white)] px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-6 border-t border-[var(--art-border-dark-soft)] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold">ArtGallery</p>
            <p className="mt-2 text-sm text-[var(--art-text-black-52)]">
              Contemporary art marketplace for collectors, designers and curated
              spaces.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--art-text-black-58)]">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#/"
                className="transition hover:text-[var(--art-surface-dark)]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Homepage;
