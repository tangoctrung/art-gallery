"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const paintingCategories = [
  {
    id: 1,
    name: "Realism (Chủ nghĩa Hiện thực)",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=500&auto=format",
    description: "Tái hiện sự vật chính xác như mắt người nhìn thấy."
  },
  {
    id: 2,
    name: "Impressionism (Ấn tượng)",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=500&auto=format",
    description: "Tập trung vào ánh sáng và những nét vẽ ngắn, nhanh."
  },
  {
    id: 3,
    name: "Abstract (Trừu tượng)",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format",
    description: "Sử dụng hình khối, màu sắc và đường nét thay vì vật thể thực."
  },
  {
    id: 4,
    name: "Surrealism (Siêu thực)",
    image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=500&auto=format",
    description: "Kết hợp các yếu tố kỳ quặc, giống như trong giấc mơ."
  },
  {
    id: 5,
    name: "Pop Art",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=500&auto=format",
    description: "Sử dụng hình ảnh từ văn hóa đại chúng và màu sắc rực rỡ."
  },
  {
    id: 6,
    name: "Minimalism (Tối giản)",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format",
    description: "Loại bỏ mọi chi tiết thừa, chỉ giữ lại những gì cơ bản nhất."
  },
  {
    id: 7,
    name: "Cubism (Lập thể)",
    image: "https://images.unsplash.com/photo-1576016770956-debb63d92058?q=80&w=500&auto=format",
    description: "Phá vỡ vật thể thành các mảnh đa giác hình học."
  },
  {
    id: 8,
    name: "Digital Art",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format",
    description: "Được tạo ra bằng phần mềm đồ họa và bảng vẽ."
  },
  {
    id: 9,
    name: "Watercolor (Màu nước)",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=500&auto=format",
    description: "Mềm mại, trong trẻo nhờ kỹ thuật pha loãng với nước."
  },
  {
    id: 10,
    name: "Oil Painting (Sơn dầu)",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=500&auto=format",
    description: "Chất liệu dày, có độ bền và độ sâu màu cao."
  },
  {
    id: 11,
    name: "Cyberpunk",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=500&auto=format",
    description: "Tương lai với đèn neon và công nghệ cao."
  },
  {
    id: 12,
    name: "Charcoal (Than chì)",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format",
    description: "Sử dụng than để tạo ra các mảng sáng tối mạnh mẽ."
  },
  {
    id: 13,
    name: "Ukiyo-e (Nhật Bản)",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=500&auto=format",
    description: "Phong cách tranh khắc gỗ truyền thống của Nhật Bản."
  },
  {
    id: 14,
    name: "Graffiti",
    image: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=500&auto=format",
    description: "Nghệ thuật đường phố bằng bình xịt phá cách."
  },
  {
    id: 15,
    name: "Line Art",
    image: "https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?q=80&w=500&auto=format",
    description: "Tập trung vào các nét vẽ đơn giản, thanh mảnh."
  },
  {
    id: 16,
    name: "Pointillism (Điểm nhãn)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRp66CGYHp0mWwgnOD1xL8wbQtXCVw_ztgg&s",
    description: "Tạo hình bằng các chấm màu nhỏ đặt cạnh nhau."
  },
  {
    id: 17,
    name: "Modern Art",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=500&auto=format",
    description: "Phong cách hiện đại phá vỡ các quy tắc truyền thống."
  },
  {
    id: 18,
    name: "Renaissance (Phục hưng)",
    image: "https://blog.artsper.com/wp-content/uploads/2022/04/New-Featured-Image-1200-x-675-6.jpg",
    description: "Tập trung vào tỉ lệ vàng và vẻ đẹp con người."
  },
  {
    id: 19,
    name: "Concept Art",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTW8s5VJsO1ryyWxWXhYkk57CS_fRJki7pGY3yfwJwr2G8v0cTgiM2L0wB6hyQFs4S2hV2i4jro-tcY0jpRwD2j1MV-y3098mYjCaHYQGftgt8gcrWl7BbqfQyly3mQOZPjJ1RCrgpIlw/s1600/ralph-mcquarrie-star-wars-concept-artist-passes-away.jpg",
    description: "Thiết kế ý tưởng cho phim và trò chơi."
  },
  {
    id: 20,
    name: "Ink Wash (Tranh thủy mặc)",
    image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=500&auto=format",
    description: "Sử dụng mực đen với các nồng độ khác nhau."
  }
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
