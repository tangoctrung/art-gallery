"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
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

function ThreeStatueViewerLoading() {
  return (
    <div className="h-full min-h-[420px] w-full animate-pulse rounded-[6px] bg-white/8" />
  );
}

const ThreeStatueModalViewer = dynamic(
  () => import("@/components/ui/three-statue-modal-viewer"),
  {
    ssr: false,
    loading: ThreeStatueViewerLoading,
  },
);

type StatueSlide = {
  id: string;
  title: string;
  artist: string;
  image: string;
  model?: string;
};

function isThreeDModelUrl(url?: string) {
  return /\.(glb|gltf)(?:[?#]|$)/i.test(url ?? "");
}

function getStatueModelUrl(statue: StatueSlide) {
  if (isThreeDModelUrl(statue.model)) {
    return statue.model;
  }

  if (isThreeDModelUrl(statue.image)) {
    return statue.image;
  }

  return undefined;
}

const statueSlides: StatueSlide[] = [
  {
    id: "cesium-man-3d",
    title: "Cesium Man 3D",
    artist: "Khronos Sample Assets",
    image:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/CesiumMan/glTF-Binary/CesiumMan.glb",
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/CesiumMan/glTF-Binary/CesiumMan.glb",
  },
  // {
  //   id: "classical-echo",
  //   title: "Classical Echo",
  //   artist: "Doan Nhat Ha",
  //   image:
  //     "https://img.freepik.com/free-photo/vertical-shot-bust-philosopher-isolated_181624-23590.jpg",
  // },
  {
    id: "damaged-helmet-gltf",
    title: "Damaged Helmet GLTF",
    artist: "Khronos Sample Assets",
    image:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF/DamagedHelmet.gltf",
  },
];

function ListStatueOfCategory() {
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

  const currentStatue = statueSlides[activeIndex] ?? statueSlides[0];
  const currentStatueModelUrl = getStatueModelUrl(currentStatue);

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
      const nextZoom = Math.max(current - 0.25, 1);

      if (nextZoom <= 1) {
        setImageOffset({ x: 0, y: 0 });
      }

      return nextZoom;
    });
  };

  const handlePreviewWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (currentStatueModelUrl) {
      return;
    }

    event.preventDefault();

    if (event.deltaY < 0) {
      setZoomLevel((current) => Math.min(current + 0.2, 3));
      return;
    }

    setZoomLevel((current) => {
      const nextZoom = Math.max(current - 0.2, 1);

      if (nextZoom <= 1) {
        setImageOffset({ x: 0, y: 0 });
      }

      return nextZoom;
    });
  };

  const handlePreviewPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (currentStatueModelUrl || zoomLevel <= 1) {
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

    if (currentStatueModelUrl || !dragState.isDragging || zoomLevel <= 1) {
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
            {statueSlides.map((statue) => (
              <CarouselItem key={statue.id} className="h-full pl-0">
                <article className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-black px-[5%] py-20">
                  <div
                    className={`relative z-10 flex h-full w-full items-center justify-center transition-all duration-700 ease-out ${statue.id === currentStatue.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-65"
                      }`}
                  >
                    {isThreeDModelUrl(statue.image) ? (
                      <div
                        className={`flex h-[58svh] min-h-[280px] w-[88vw] max-w-[1120px] max-h-[660px] items-center justify-center rounded-[6px] border border-white/12 bg-white/8 text-sm text-white/62 transition-all duration-[900ms] ease-out md:h-[64svh] ${statue.id === currentStatue.id
                          ? "translate-x-0 scale-100"
                          : "translate-x-6 scale-[0.985]"
                          }`}
                      >
                        <button
                          type="button"
                          onClick={handleOpenPreview}
                          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.14)] px-4 py-2.5 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[rgba(255,255,255,0.24)]"
                          aria-label={`Zoom ${statue.title}`}
                        >
                          <Search className="h-4 w-4" />
                          {getStatueModelUrl(statue) ? "Xem 3D" : "Zoom"}
                        </button>
                      </div>
                    ) : (
                      <img
                        src={statue.image}
                        alt={statue.title}
                        className={`max-h-full max-w-full object-contain transition-all duration-[900ms] ease-out ${statue.id === currentStatue.id
                          ? "translate-x-0 scale-100"
                          : "translate-x-6 scale-[0.985]"
                          }`}
                      />
                    )}

                    {!isThreeDModelUrl(statue.image) &&
                      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                        <button
                          type="button"
                          onClick={handleOpenPreview}
                          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.14)] px-4 py-2.5 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[rgba(255,255,255,0.24)]"
                          aria-label={`Zoom ${statue.title}`}
                        >
                          <Search className="h-4 w-4" />
                          Zoom
                        </button>
                      </div>}
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/85 via-black/30 to-transparent px-[5%] pb-8 pt-20 md:pb-12">
                    <div className="mx-auto flex max-w-[1920px] flex-col gap-3">
                      <h1
                        className={`max-w-[12ch] text-3xl font-semibold tracking-[-0.04em] transition-all duration-700 ease-out md:leading-[1.07] ${statue.id === currentStatue.id
                          ? "translate-y-0 scale-100 opacity-100 delay-100"
                          : "translate-y-10 scale-[0.985] opacity-0"
                          }`}
                      >
                        {statue.title}
                      </h1>
                      <p
                        className={`text-[17px] leading-7 tracking-[-0.374px] text-[var(--art-text-white-68)] transition-all duration-700 ease-out ${statue.id === currentStatue.id
                          ? "translate-y-0 opacity-100 delay-200"
                          : "translate-y-6 opacity-0"
                          }`}
                      >
                        Nhà điêu khắc: {statue.artist}
                      </p>
                      <Link
                        href={`/painting/${statue.id}`}
                        className={`pointer-events-auto inline-flex items-center gap-2 text-sm text-[var(--art-accent-hover)] transition-all duration-700 ease-out hover:underline ${statue.id === currentStatue.id
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
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(0,0,0,0.94)] px-4 py-6 backdrop-blur-sm"
          onClick={handleClosePreview}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0)_100%)] px-4 py-4 md:px-6 md:py-6">
            <div className="min-w-0 text-white">
              <p className="truncate text-sm text-white/58">
                {currentStatue.artist}
              </p>
              <h2 className="truncate text-xl font-semibold tracking-[-0.03em]">
                {currentStatue.title}
              </h2>
            </div>
            <div className="pointer-events-auto flex shrink-0 items-center gap-2">
              {!currentStatueModelUrl ? (
                <>
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
                </>
              ) : null}
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

          <div
            className={`relative h-[min(84svh,820px)] w-[min(94vw,1180px)] overflow-hidden ${!currentStatueModelUrl && zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
            onClick={(event) => event.stopPropagation()}
            onWheel={handlePreviewWheel}
            onPointerDown={handlePreviewPointerDown}
            onPointerMove={handlePreviewPointerMove}
            onPointerUp={handlePreviewPointerUp}
            onPointerCancel={handlePreviewPointerUp}
          >
            {currentStatueModelUrl ? (
              <ThreeStatueModalViewer
                modelSrc={currentStatueModelUrl}
                title={currentStatue.title}
              />
            ) : (
              <img
                src={currentStatue.image}
                alt={currentStatue.title}
                className="h-full w-full object-contain transition-transform duration-200 select-none"
                draggable={false}
                style={{
                  transform: `translate(${imageOffset.x}px, ${imageOffset.y}px) scale(${zoomLevel})`,
                }}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ListStatueOfCategory;
