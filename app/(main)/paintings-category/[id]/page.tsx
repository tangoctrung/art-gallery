"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Minus, Plus, Search, X } from "lucide-react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const paintingSlides = [
  {
    id: "silent-geometry",
    title: "Silent Geometry",
    artist: "Pham Thuy Linh",
    image:
      "https://vastphotos.com/files/uploads/photos/10150/high-resolution-nature-landscape-l.jpg?v=20231025053826",
  },
  {
    id: "monsoon-garden",
    title: "Monsoon Garden",
    artist: "Minh Chau",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "quiet-figure",
    title: "Quiet Figure",
    artist: "An Nhien",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "blue-interval",
    title: "Blue Interval",
    artist: "Gia Bao",
    image:
      "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
];

function ListPaintingOfCategory() {
  const router = useRouter();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    handleSelect();
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  const currentPainting = paintingSlides[activeIndex] ?? paintingSlides[0];

  const handleOpenPreview = () => {
    setZoomLevel(1);
    setImageOffset({ x: 0, y: 0 });
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setZoomLevel(1);
    setImageOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel((current) => Math.min(current + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((current) => {
      const nextZoom = Math.max(current - 0.25, 0.75);

      if (nextZoom <= 1) {
        setImageOffset({ x: 0, y: 0 });
      }

      return nextZoom;
    });
  };

  const handlePreviewWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      setZoomLevel((current) => Math.min(current + 0.2, 3));
      return;
    }

    setZoomLevel((current) => {
      const nextZoom = Math.max(current - 0.2, 0.75);

      if (nextZoom <= 1) {
        setImageOffset({ x: 0, y: 0 });
      }

      return nextZoom;
    });
  };

  const handlePreviewPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (zoomLevel <= 1) {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: imageOffset.x,
      originY: imageOffset.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePreviewPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const dragState = dragStateRef.current;

    if (!dragState.isDragging || zoomLevel <= 1) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;

    setImageOffset({
      x: dragState.originX + deltaX,
      y: dragState.originY + deltaY,
    });
  };

  const handlePreviewPointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    dragStateRef.current.isDragging = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <>
      <main className="relative h-svh overflow-hidden bg-[var(--art-surface-dark)] text-[var(--art-text-inverse)]">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-5 left-5 z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-[rgba(0,0,0,0.55)] px-4 py-2.5 text-sm text-white backdrop-blur-md transition hover:bg-[rgba(0,0,0,0.72)] md:top-7 md:left-7"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại
        </button>

        <Carousel className="h-full" setApi={setCarouselApi}>
          <CarouselContent className="h-full">
            {paintingSlides.map((painting) => (
              <CarouselItem key={painting.id} className="h-full pl-0">
                <article className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-black px-[5%] py-20">
                  <div
                    className={`relative z-10 flex h-full w-full items-center justify-center transition-all duration-700 ease-out ${painting.id === currentPainting.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-65"
                      }`}
                  >
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className={`max-h-full max-w-full object-contain transition-all duration-[900ms] ease-out ${painting.id === currentPainting.id
                        ? "translate-x-0 scale-100"
                        : "translate-x-6 scale-[0.985]"
                        }`}
                    />

                    <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                      <button
                        type="button"
                        onClick={handleOpenPreview}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.14)] px-4 py-2.5 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[rgba(255,255,255,0.24)]"
                        aria-label={`Zoom ${painting.title}`}
                      >
                        <Search className="h-4 w-4" />
                        Zoom
                      </button>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/85 via-black/30 to-transparent px-[5%] pb-8 pt-20 md:pb-12">
                    <div className="mx-auto flex max-w-[1920px] flex-col gap-3">
                      <h1
                        className={`max-w-[12ch] text-3xl font-semibold tracking-[-0.04em] transition-all duration-700 ease-out md:leading-[1.07] ${painting.id === currentPainting.id
                            ? "translate-y-0 scale-100 opacity-100 delay-100"
                            : "translate-y-10 scale-[0.985] opacity-0"
                          }`}
                      >
                        {painting.title}
                      </h1>
                      <p
                        className={`text-[17px] leading-7 tracking-[-0.374px] text-[var(--art-text-white-68)] transition-all duration-700 ease-out ${painting.id === currentPainting.id
                            ? "translate-y-0 opacity-100 delay-200"
                            : "translate-y-6 opacity-0"
                          }`}
                      >
                        Tác giả: {painting.artist}
                      </p>
                      <Link
                        href={`/painting/${painting.id}`}
                        className={`pointer-events-auto inline-flex items-center gap-2 text-sm text-[var(--art-accent-hover)] transition-all duration-700 ease-out hover:underline ${painting.id === currentPainting.id
                            ? "translate-y-0 opacity-100 delay-300"
                            : "translate-y-6 opacity-0"
                          }`}
                      >
                        Xem chi tiết
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-5 z-30 h-12 w-12 border border-[var(--art-border-light)] bg-[rgba(0,0,0,0.45)] text-white backdrop-blur-md hover:bg-[rgba(255,255,255,0.18)] hover:text-white md:left-7" />
          <CarouselNext className="right-5 z-30 h-12 w-12 border border-[var(--art-border-light)] bg-[rgba(0,0,0,0.45)] text-white backdrop-blur-md hover:bg-[rgba(255,255,255,0.18)] hover:text-white md:right-7" />
        </Carousel>
      </main>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(0,0,0,0.92)] px-4 py-6 backdrop-blur-sm"
          onClick={handleClosePreview}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-end bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0)_100%)] px-4 py-4 md:px-6 md:py-6">
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleZoomOut();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] text-white transition hover:bg-[rgba(255,255,255,0.22)]"
                aria-label="Thu nhỏ ảnh"
              >
                <Minus className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleZoomIn();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] text-white transition hover:bg-[rgba(255,255,255,0.22)]"
                aria-label="Phóng to ảnh"
              >
                <Plus className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClosePreview();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] text-white transition hover:bg-[rgba(255,255,255,0.22)]"
                aria-label="Đóng xem ảnh"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <div
              className={zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : ""}
              onClick={(event) => event.stopPropagation()}
              onWheel={handlePreviewWheel}
              onPointerDown={handlePreviewPointerDown}
              onPointerMove={handlePreviewPointerMove}
              onPointerUp={handlePreviewPointerUp}
              onPointerCancel={handlePreviewPointerUp}
            >
              <img
                src={currentPainting.image}
                alt={currentPainting.title}
                className="max-h-[calc(100vh-5rem)] max-w-[calc(100vw-2rem)] object-contain transition-transform duration-200 select-none md:max-h-[calc(100vh-6rem)]"
                draggable={false}
                style={{
                  transform: `translate(${imageOffset.x}px, ${imageOffset.y}px) scale(${zoomLevel})`,
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ListPaintingOfCategory;
