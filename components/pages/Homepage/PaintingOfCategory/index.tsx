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

const paintingCategories = [
  {
    name: "Trừu tượng",
    description: "Hình khối, màu sắc và đường nét tạo cảm xúc thay cho vật thể thực.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=900&auto=format",
  },
  {
    name: "Sơn dầu",
    description: "Lớp màu dày, độ sâu cao và chất liệu bền cho không gian trưng bày.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=900&auto=format",
  },
  {
    name: "Tối giản",
    description: "Bố cục tiết chế, giữ lại đường nét và mảng màu thật cần thiết.",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format",
  },
  {
    name: "Phong cảnh",
    description: "Ánh sáng, chiều sâu và không khí thiên nhiên trong từng khung tranh.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=900&auto=format",
  },
  {
    name: "Chân dung",
    description: "Tập trung vào ánh mắt, thần thái và cảm xúc của nhân vật.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=900&auto=format",
  },
  {
    name: "Màu nước",
    description: "Mềm, trong và giàu sắc độ nhờ kỹ thuật pha loãng với nước.",
    image:
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=900&auto=format",
  },
  {
    name: "Lập thể",
    description: "Phá vỡ chủ thể thành các mảng hình học có nhịp điệu mạnh.",
    image:
      "https://images.unsplash.com/photo-1576016770956-debb63d92058?q=80&w=900&auto=format",
  },
  {
    name: "Digital Art",
    description: "Tác phẩm tạo bằng công cụ số, màu sắc hiện đại và giàu hiệu ứng.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format",
  },
];

const motionDelayClasses = [
  "homepage-motion-delay-100",
  "homepage-motion-delay-180",
  "homepage-motion-delay-260",
  "homepage-motion-delay-340",
];

function PaintingOfCategory() {
  return (
    <section
      id="collections"
      className="flex h-full items-center bg-[var(--art-surface-dark)] px-[5%] py-6 text-[var(--art-text-inverse)] md:py-10"
    >
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="mb-5 flex max-w-full flex-col items-center md:mb-7">
          <h2 className="homepage-motion homepage-motion-down mb-3 text-center text-3xl font-semibold md:text-4xl">
            Thể loại tranh vẽ
          </h2>
        </div>

        <Carousel
          className="relative"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="items-stretch">
            {paintingCategories.map((category, index) => (
              <CarouselItem
                key={category.name}
                className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <Link
                  href={`/paintings-category?category=${encodeURIComponent(category.name)}`}
                  className={`homepage-motion homepage-motion-up ${motionDelayClasses[index % motionDelayClasses.length]} group relative flex h-[60svh] min-h-80 overflow-hidden rounded-lg bg-black shadow-[0_22px_58px_rgba(0,0,0,0.28)]`}
                >
                  <img
                    src={category.image}
                    alt={`Minh hoạ thể loại tranh ${category.name}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-30)] to-[var(--art-overlay-black-80)]" />
                  <div className="relative z-10 mt-auto flex min-h-52 w-full flex-col justify-end p-5 md:p-6">
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--art-text-inverse)]">
                      {category.name}
                    </h3>
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

export default PaintingOfCategory
