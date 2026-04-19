"use client"

import Link from "next/link";
import {
  startTransition,
  useDeferredValue,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

const categories = [
  "Trừu tượng",
  "Sơn dầu",
  "Tối giản",
  "Phong cảnh",
  "Chân dung",
];

const artworks = [
  {
    title: "Silent Geometry",
    artist: "Linh Pham",
    category: "Trừu tượng",
    price: "18.500.000 VND",
    size: "120 x 160 cm",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Monsoon Garden",
    artist: "Minh Chau",
    category: "Trừu tượng",
    price: "22.000.000 VND",
    size: "100 x 140 cm",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quiet Figure",
    artist: "An Nhien",
    category: "Trừu tượng",
    price: "16.200.000 VND",
    size: "90 x 120 cm",
    image:
      "https://images.pexels.com/photos/1292996/pexels-photo-1292996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Horizon in Hue",
    artist: "Nhat Ha",
    category: "Trừu tượng",
    price: "19.600.000 VND",
    size: "110 x 150 cm",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Velvet Echo",
    artist: "Bao Tran",
    category: "Trừu tượng",
    price: "14.900.000 VND",
    size: "85 x 115 cm",
    image:
      "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Moss Study",
    artist: "Thu Hoai",
    category: "Trừu tượng",
    price: "20.400.000 VND",
    size: "120 x 120 cm",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soft Frame",
    artist: "Hoang Son",
    category: "Trừu tượng",
    price: "11.500.000 VND",
    size: "70 x 100 cm",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Velvet Echo 1",
    artist: "Bao Tran",
    category: "Trừu tượng",
    price: "14.900.000 VND",
    size: "85 x 115 cm",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/372/798/files/680xauto-original-article-2021-07-60ec4f1b5d566-jpeg.jpg?v=1637916541867",
  },
  {
    title: "Moss Study 1",
    artist: "Thu Hoai",
    category: "Trừu tượng",
    price: "20.400.000 VND",
    size: "120 x 120 cm",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/tranh_truu_tuong_don_gian_2_efea34318b.jpg",
  },
  {
    title: "Soft Frame 1",
    artist: "Hoang Son",
    category: "Trừu tượng",
    price: "11.500.000 VND",
    size: "70 x 100 cm",
    image:
      "https://kenh14cdn.com/thumb_w/600/A3YmnWqkHeph7OwGyu6TwbX57tgTw/Image/2014/10/disco/2-dfb72.jpg",
  },
  {
    title: "Monsoon Garden 1",
    artist: "Minh Chau",
    category: "Trừu tượng",
    price: "22.000.000 VND",
    size: "100 x 140 cm",
    image:
      "https://cdn.vjshop.vn/tin-tuc/10-ky-thuat-chup-anh-thuc-nghiem-ban-can-biet/chup-anh-thuc-nghiem-1.jpg",
  },
  {
    title: "Quiet Figure 1",
    artist: "An Nhien",
    category: "Trừu tượng",
    price: "16.200.000 VND",
    size: "90 x 120 cm",
    image:
      "https://bantranh.com/wp-content/uploads/2021/12/10-buc-tranh-truu-tuong-dep7-400x400.jpg",
  },
  {
    title: "Horizon in Hue 1",
    artist: "Nhat Ha",
    category: "Trừu tượng",
    price: "19.600.000 VND",
    size: "110 x 150 cm",
    image:
      "https://redsvn.net/wp-content/uploads/2019/05/e49c20fbcd0414c415011fac5ebef7f3.jpg",
  },
  {
    title: "Monsoon Garden",
    artist: "Minh Chau",
    category: "Sơn dầu",
    price: "22.000.000 VND",
    size: "100 x 140 cm",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quiet Figure",
    artist: "An Nhien",
    category: "Chân dung",
    price: "16.200.000 VND",
    size: "90 x 120 cm",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Horizon in Hue",
    artist: "Nhat Ha",
    category: "Phong cảnh",
    price: "19.600.000 VND",
    size: "110 x 150 cm",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Moss Study",
    artist: "Thu Hoai",
    category: "Sơn dầu",
    price: "20.400.000 VND",
    size: "120 x 120 cm",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soft Frame",
    artist: "Hoang Son",
    category: "Tối giản",
    price: "11.500.000 VND",
    size: "70 x 100 cm",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
  },
];

function PaintingOfCategory() {
  const categoryScrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const deferredCategory = useDeferredValue(selectedCategory);
  const filteredArtworks = artworks.filter(
    (artwork) => artwork.category === deferredCategory,
  );

  const handleCategoryPointerDown = (
    event: ReactMouseEvent<HTMLDivElement>,
  ) => {
    const scroller = categoryScrollerRef.current;

    if (!scroller) {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      hasMoved: false,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
    };
  };

  const handleCategoryPointerMove = (
    event: ReactMouseEvent<HTMLDivElement>,
  ) => {
    const scroller = categoryScrollerRef.current;
    const dragState = dragStateRef.current;

    if (!scroller || !dragState.isDragging) {
      return;
    }

    const distance = event.clientX - dragState.startX;
    if (Math.abs(distance) > 6) {
      dragState.hasMoved = true;
    }
    scroller.scrollLeft = dragState.scrollLeft - distance;
  };

  const handleCategoryPointerUp = () => {
    dragStateRef.current.isDragging = false;
  };

  const handleCategoryClick = (category: string) => {
    if (dragStateRef.current.hasMoved) {
      dragStateRef.current.hasMoved = false;
      return;
    }

    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  return (
    <section
      id="collections"
      className="bg-[var(--art-surface-dark)] text-[var(--art-text-inverse)]  py-10 md:py-20 px-[5%]"
    >
      <div className="mx-auto max-w-480">
        <div className="max-w-full mb-10 flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-center tracking-[-0.04em] mb-4">
            Bức tranh nổi tiếng
          </h2>
          <p className="max-w-[100%] sm:max-w-[70%] lg:max-w-[50%] text-[17px] leading-7 text-(--art-text-white-45) text-center">
            Mỗi bức tranh là một nhân quan khác nhau. Hãy lựa chọn những thể loại mà bạn quan tâm để tìm ra được bức tranh mình ưng ý nhất.
          </p>
        </div>

        <div
          ref={categoryScrollerRef}
          onMouseDown={handleCategoryPointerDown}
          onMouseMove={handleCategoryPointerMove}
          onMouseUp={handleCategoryPointerUp}
          onMouseLeave={handleCategoryPointerUp}
          className="mb-8 w-full cursor-grab overflow-x-auto pb-2 select-none [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max flex-nowrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition ${isActive
                    ? "bg-[var(--art-text-primary)] text-[var(--art-text-inverse)]"
                    : "border border-[var(--art-border-dark)] bg-[var(--art-surface-white)] text-[var(--art-text-black-72)] hover:border-[var(--art-border-dark-strong)]"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filteredArtworks.map((artwork, index) => (
            <article
              key={`${artwork.title}-${artwork.artist}-${index}`}
              className="group relative mb-4 overflow-hidden rounded-lg bg-black break-inside-avoid"
            >
              <Link href={`painting/${index}`}>
                <img
                  src={artwork.image}
                  alt={`${artwork.title} by ${artwork.artist}`}
                  loading="lazy"
                  className="h-auto w-full transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-20)] to-[var(--art-overlay-black-75)]" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-65)] line-clamp-1">
                    {artwork.artist}
                  </p>
                  <h3 className="mt-1 text-2xl leading-tight font-semibold text-[var(--art-text-inverse)] line-clamp-1">
                    {artwork.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--art-text-white-72)]">
                    <span>{artwork.size}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--art-overlay-white-dot)]" />
                    <span>{artwork.price}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaintingOfCategory
