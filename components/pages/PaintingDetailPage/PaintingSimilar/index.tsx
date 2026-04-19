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
import { useRouter } from "next/navigation";

const similarPaintings = [
  {
    title: "Velvet Echo",
    artist: "Bao Tran",
    price: "14.900.000 VND",
    size: "85 x 115 cm",
    image:
      "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Monsoon Garden",
    artist: "Minh Chau",
    price: "22.000.000 VND",
    size: "100 x 140 cm",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quiet Figure",
    artist: "An Nhien",
    price: "16.200.000 VND",
    size: "90 x 120 cm",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Blue Interval",
    artist: "Gia Bao",
    price: "12.800.000 VND",
    size: "80 x 100 cm",
    image:
      "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

function PaintingSimilar() {
  const router = useRouter();
  return (
    <section className="bg-[var(--art-surface-dark)] px-[5%] py-12 text-[var(--art-text-inverse)] md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="mt-3 text-3xl md:text-4xl  font-semibold tracking-[-0.04em] md:leading-[1.1]">
              Tác phẩm liên quan
            </h2>
          </div>
          <p className="max-w-[46ch] text-[17px] leading-7 tracking-[-0.374px] text-[var(--art-text-white-68)]">
            Những lựa chọn gắn liền với gam màu, tiết tấu thị giác và tinh thần không gian của tác phẩm hiện tại.
          </p>
        </div>

        <Carousel className="relative">
          <CarouselContent className="items-stretch">
            {similarPaintings.map((item, index) => (
              <CarouselItem
                key={item.title}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-xl bg-[var(--art-surface-dark-soft)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-45)]">
                      {item.artist}
                    </p>
                    <h3 className="mt-3 text-[30px] leading-tight font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[17px] leading-7 text-[var(--art-text-white-70)]">
                      {item.size}
                    </p>
                    <p className="mt-1 flex-1 text-[17px] leading-7 text-[var(--art-text-white-70)]">
                      {item.price}
                    </p>
                    <Link
                      href={`/painting/${index + 1}`}
                      onClick={() => {
                        router.push(`/painting/${index + 1}}`)
                      }}
                      target="_blank"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--art-accent-hover)]"
                    >
                      Xem tác phẩm
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:left-4" />
          <CarouselNext className="right-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
}

export default PaintingSimilar;
