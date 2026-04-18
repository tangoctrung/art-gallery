"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'


const spotlightSlides = [
  {
    eyebrow: "ArtGallery Curated",
    artist: "Trần Văn Ngọc",
    image:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/tranh-phong-canh-24.jpg",
  },
  {
    eyebrow: "Interior Spotlight",
    artist: "Nguyễn Quốc Hảo",
    image:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/tranh-phong-canh-10.jpg",
  },
  {
    eyebrow: "Bức tranh Mùa xuân ở Italia",
    artist: "Levitan",
    image:
      "https://brocanvas.vn/wp-content/uploads/2021/11/buc-tranh-mua-xuan-o-italyv1624075797023.jpg",
  },
  {
    eyebrow: "Người đàn bà xa lạ(1883)",
    artist: "Ivan Kramskoy",
    image:
      "https://bantranh.com/wp-content/uploads/2019/03/10-buc-tranh-noi-tieng-nhat-cua-hoi-hoa-nga1-533x400.jpg",
  },
];

type ImageOrientation = "landscape" | "portrait";

function Spotlight() {
  const [imageOrientations, setImageOrientations] = useState<Record<string, ImageOrientation>>({});

  return (
    <section id="spotlight" className="">
      <div className="">
        <Carousel>
          <CarouselContent>
            {spotlightSlides.map((slide) => {
              return (
                <CarouselItem key={slide.eyebrow}>
                  <article
                    className="relative flex min-h-[70svh] sm:min-h-[calc(100svh-50px)] w-full overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-(--art-surface-dark)">
                      <img
                        src={slide.image}
                        alt={slide.eyebrow}
                        className={`h-full w-full object-cover`}
                      />
                    </div>
                    <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-transparent to-black"></div>

                    <div className="absolute z-20 px-[5%] bottom-6 md:bottom-10 max-w-[90%] md:max-w-1/2">
                      <h2 className="text-3xl font-bold leading-9 mb-3 text-[var(--art-text-white-78)]">
                        {slide.eyebrow}
                      </h2>
                      <p className="text-base font-normal leading-5 text-[var(--art-text-white-50)]">
                        Tác giả: {slide.artist}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#collections"
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--art-accent)] px-5 py-3 text-sm font-medium text-[var(--art-text-inverse)] transition hover:bg-[var(--art-accent-hover)]"
                        >
                          Xem
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}

export default Spotlight
