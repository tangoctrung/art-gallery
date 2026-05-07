"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const artists = [
  {
    name: "Phạm Thùy Linh",
    style: "Nghệ thuật trừu tượng",
    note: "Nổi bật với những lớp màu có chiều sâu và tiết tấu tối giản.",
    image:
      "https://avatarngau.sbs/wp-content/uploads/2025/06/avatar-anime-nam-ngau-cam-kiem.jpg",
  },
  {
    name: "Minh Châu",
    style: "Sơn dầu phong cảnh",
    note: "Khai thác ánh sáng Việt Nam qua bố cục rộng và bề mặt đầy chất liệu.",
    image:
      "https://i.pinimg.com/736x/82/13/cb/8213cba4053bca065d0250406e73d33b.jpg",
  },
  {
    name: "An Nhiên",
    style: "Chân dung hiện đại",
    note: "Tác phẩm tập trung vào ánh mắt, khoảng cách và trạng thái nội tâm.",
    image:
      "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-commercial-cartoon-music-festival-idol-singer-hand-account-element-png-image_619028.jpg",
  },
  {
    name: "Linh Phạm",
    style: "Điêu khắc",
    note: "Ngôn ngữ hình khối chắc, tiết chế và chú trọng tương quan với không gian.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nguyễn Minh Châu",
    style: "Sơn dầu tối giản",
    note: "Màu sắc lặng, nhịp sáng mềm và bố cục được chắt lọc kỹ.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tuệ Tâm",
    style: "Chân dung hiện đại",
    note: "Tạo điểm nhấn bằng thần thái, khoảng trống và cảm giác tĩnh tại.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
];

const motionDelayClasses = [
  "homepage-motion-delay-100",
  "homepage-motion-delay-180",
  "homepage-motion-delay-260",
  "homepage-motion-delay-340",
];

function Artists() {
  return (
    <section
      id="artists"
      className="flex h-full items-center bg-[var(--art-surface-dark)] px-[5%] py-6 text-[var(--art-text-inverse)] md:py-10"
    >
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="mb-5 flex flex-col items-center md:mb-7">
          <h2 className="homepage-motion homepage-motion-down mb-3 text-center text-3xl font-semibold md:text-4xl">
            Họa sĩ, nhà điêu khắc nổi bật
          </h2>
          <p className="homepage-motion homepage-motion-up homepage-motion-delay-100 max-w-[90%] text-center text-sm leading-6 text-(--art-text-white-65) sm:max-w-[70%] md:text-[17px] md:leading-7 lg:max-w-[50%]">
            Mỗi nghệ sĩ mang một ngôn ngữ thị giác riêng, từ hội hoạ trừu tượng đến điêu khắc và chân dung hiện đại.
          </p>
        </div>

        <Carousel
          className="relative"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="items-stretch">
            {artists.map((artist, index) => (
              <CarouselItem
                key={artist.name}
                className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <Link
                  href={`/artists?artist=${encodeURIComponent(artist.name)}`}
                  className={`homepage-motion homepage-motion-up ${motionDelayClasses[index % motionDelayClasses.length]} group relative flex h-[52svh] min-h-80 overflow-hidden rounded-lg bg-black shadow-[0_22px_58px_rgba(0,0,0,0.28)] md:h-[56svh] md:max-h-[520px]`}
                >
                  <img
                    src={artist.image}
                    alt={`Chân dung nghệ sĩ ${artist.name}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-30)] to-[var(--art-overlay-black-80)]" />
                  <div className="relative z-10 mt-auto flex min-h-52 w-full flex-col justify-end p-5 md:p-6">
                    <h3 className="mt-3 text-3xl font-semibold leading-tight text-[var(--art-text-inverse)]">
                      {artist.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[var(--art-accent-hover)]">
                      {artist.style}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:left-4" />
          <CarouselNext className="right-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:right-4" />
        </Carousel>
      </div>
    </section>
  )
}

export default Artists
