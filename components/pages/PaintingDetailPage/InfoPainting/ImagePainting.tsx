import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Minus, Plus, X } from "lucide-react";

function ImagePainting({ painting }: { painting: any }) {
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
      <button
        type="button"
        onClick={handleOpenPreview}
        className="block w-full overflow-hidden rounded-xl bg-black text-left shadow-[var(--art-shadow-card)]"
        aria-label={`Xem ảnh lớn của ${painting.title}`}
      >
        <img
          src={painting.image}
          alt={painting.title}
          className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02] "
        />
      </button>
      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(0,0,0,0.88)] px-4 py-6 backdrop-blur-sm"
          onClick={handleClosePreview}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-end bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_100%)] px-4 py-4 md:px-6 md:py-6">
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
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] px-3 text-white transition hover:bg-[rgba(255,255,255,0.22)]"
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
                src={painting.image}
                alt={painting.title}
                className="max-h-[calc(100vh-5rem)] max-w-full object-contain transition-transform duration-200 select-none md:max-h-[calc(100vh-6rem)]"
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
  )
}

export default ImagePainting