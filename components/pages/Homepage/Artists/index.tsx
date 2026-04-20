"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const artists = [
  {
    name: "Phạm Thùy Linh",
    style: "Nghệ thuật trừu tượng",
    note: "Nổi bật với những lớp mẫu có chiều sâu và tiết tấu tối giản.",
    image:
      "https://avatarngau.sbs/wp-content/uploads/2025/06/avatar-anime-nam-ngau-cam-kiem.jpg",
  },
  {
    name: "Minh Châu",
    style: "Sơn dầu phong cảnh",
    note: "Khai thác ánh sáng Việt Nam qua bố cục rỗng và bé mắt đầy chất liệu.",
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
    note: "Nổi bật với những lớp mẫu có chiều sâu và tiết tấu tối giản.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nguyễn Minh Châu",
    style: "Sơn dầu tối giản",
    note: "Khai thác ánh sáng Việt Nam qua bố cục rỗng và bé mắt đầy chất liệu.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tuệ Tâm",
    style: "Chân dung hiện đại",
    note: "Tác phẩm tập trung vào ánh mắt, khoảng cách và trạng thái nội tâm.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
  },
];

function Artists() {
  const router = useRouter();
  return (
    <section id="artists" className="bg-[var(--art-surface-dark)] text-[var(--art-text-inverse)] lg:py-24 py-10 md:py-20 px-[5%]">
      <div className="mx-auto max-w-350">
        <div className="mb-10 items-center flex flex-col">
          <h2 className="text-4xl font-semibold text-center tracking-[-0.04em] mb-4">
            Một số họa sĩ, nhà điêu khắc nổi bật.
          </h2>
          <p className="max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] text-[17px] leading-7 text-(--art-text-white-65) text-center">
            Mỗi họa sĩ hay nhà nghệ thuật đều mang một ngôn ngữ thị giác riêng. Phần này tập trung vào gu thẩm mỹ, kỹ thuật và chất giọng nghệ thuật.
          </p>
        </div>

        <Carousel
          className="relative"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="items-stretch">
            {artists.map((artist) => {
              return (
                <CarouselItem key={artist.name} className="basis-1/1 sm:basis-1/2 lg:basis-1/3">
                  <article
                    key={artist.name}
                    className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]"
                  >
                    <div
                      aria-hidden="true"
                      className="h-80 w-full shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${artist.image})` }}
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-45)]">
                        {artist.style}
                      </p>
                      <h3 className="mt-3 text-[30px] leading-tight font-medium">
                        {artist.name}
                      </h3>
                      <p className="mt-3 flex-1 text-[17px] leading-7 text-[var(--art-text-white-70)]">
                        {artist.note}
                      </p>
                      <a
                        href="#consultation"
                        className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--art-accent-hover)]"
                      >
                        Xem chi tiết
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            className="left-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:left-4"
          />
          <CarouselNext
            className="right-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:right-4"
          />
        </Carousel>

        <div className="w-full flex justify-center mt-6">
          <button
            type="button"
            onClick={() => {
              router.push("/artists");
            }}
            className={`min-w-[200px] w-fit text-center gap-2 shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 bg-(--art-accent) hover:bg-(--art-accent-hover) text-sm transition text-white`}
          >
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  )
}

export default Artists
