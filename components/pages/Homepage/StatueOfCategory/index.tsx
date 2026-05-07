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

const statueCategories = [
  {
    category: "Tượng chân dung",
    description: "Tập trung vào gương mặt, thần thái và dấu ấn cá nhân của nhân vật.",
    image:
      "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2025/7/17/420625928e1b3845610a3-17527293162061727509481.jpg",
  },
  {
    category: "Tượng tượng đài",
    description: "Quy mô lớn, giàu tính biểu tượng và phù hợp với không gian công cộng.",
    image:
      "https://glints.com/vn/blog/wp-content/uploads/2022/10/kie%CC%82%CC%81n-tru%CC%81c-865x1024.jpg",
  },
  {
    category: "Tượng tôn giáo",
    description: "Đường nét trang nghiêm, giàu ý nghĩa tâm linh và văn hoá.",
    image:
      "https://mythuatms.com/image/data/HUONG%20LY/MY%20THUAT%20CN/tim%20hieu%20ve%20nghe%20thuat%20dieu%20khac%20va%20tao%20hinh%20tuong%20phat/tao-hinh-tuong-phat-5b.webp",
  },
  {
    category: "Phù điêu nổi cao",
    description: "Khối nổi rõ, tạo chiều sâu thị giác mạnh trên mặt phẳng trưng bày.",
    image:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/17/871581/Bao-Vat-Quoc-Gia-14.jpg",
  },
  {
    category: "Phù điêu nổi thấp",
    description: "Biên độ khối nhẹ hơn, phù hợp trang trí tường và không gian nội thất.",
    image:
      "https://dieukhacda.com.vn/wp-content/uploads/2022/08/tuong-phu-dieu-bang-da-1.jpg",
  },
  {
    category: "Tượng cách điệu",
    description: "Đơn giản hoá hình thể để nhấn vào nhịp khối, đường cong và cảm xúc.",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Tượng nghệ thuật kiến trúc",
    description: "Gắn với không gian kiến trúc, mặt tiền, sân vườn hoặc sảnh trưng bày.",
    image:
      "https://ninhbinhstone.com.vn/wp-content/uploads/2021/03/tuong-nghe-thuat-1.jpg",
  },
  {
    category: "Tượng bảo tàng",
    description: "Đề cao giá trị trưng bày, chất liệu và câu chuyện lịch sử của tác phẩm.",
    image:
      "https://tramanh.art/wp-content/uploads/2023/06/davidflorence.jpeg",
  },
];

const motionDelayClasses = [
  "homepage-motion-delay-100",
  "homepage-motion-delay-180",
  "homepage-motion-delay-260",
  "homepage-motion-delay-340",
];

function StatueOfCategory() {
  return (
    <section
      id="statue-collections"
      className="flex h-full items-center bg-[var(--art-surface-dark)] px-[5%] py-6 text-[var(--art-text-inverse)] md:py-10"
    >
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="mb-5 flex max-w-full flex-col items-center md:mb-7">
          <h2 className="homepage-motion homepage-motion-down mb-3 text-center text-3xl font-semibold md:text-4xl">
            Thể loại tượng
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
            {statueCategories.map((statue, index) => (
              <CarouselItem
                key={statue.category}
                className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <Link
                  href={`/statues-category?category=${encodeURIComponent(statue.category)}`}
                  className={`homepage-motion homepage-motion-up ${motionDelayClasses[index % motionDelayClasses.length]} group relative flex h-[52svh] min-h-80 overflow-hidden rounded-lg bg-black shadow-[var(--art-shadow-card)] md:h-[56svh] md:max-h-[520px]`}
                >
                  <img
                    src={statue.image}
                    alt={`Minh hoạ thể loại ${statue.category}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-30)] to-[var(--art-overlay-black-80)]" />
                  <div className="relative z-10 mt-auto flex min-h-52 w-full flex-col justify-end p-5 md:p-6">
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--art-text-inverse)]">
                      {statue.category}
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

export default StatueOfCategory
