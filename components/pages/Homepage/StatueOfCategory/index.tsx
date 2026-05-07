"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  {
    id: "sculpt_001",
    category: "Classical Marble",
    image: "https://estatebuyers.nyshowplace.com/wp-content/uploads/2019/10/Get-To-Know-These-Iconic-Marble-Sculptures.jpg",
    description: "Phong cách Hy Lạp - La Mã cổ điển, tập trung vào vẻ đẹp hình thể con người."
  },
  {
    id: "sculpt_002",
    category: "Bronze Casting (Tượng đúc đồng)",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/14309/33567/main-image",
    description: "Sử dụng khuôn đúc kim loại, tạo độ bền cao và chi tiết sắc sảo."
  },
  {
    id: "sculpt_003",
    category: "Wood Carving (Điêu khắc gỗ)",
    image: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&w=600&q=80",
    description: "Sử dụng các loại gỗ tự nhiên, mang lại cảm giác ấm cúng và mộc mạc."
  },
  {
    id: "sculpt_004",
    category: "Terracotta (Tượng đất nung)",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    description: "Gốm không tráng men, thường có màu nâu đỏ đặc trưng của đất sét."
  },
  {
    id: "sculpt_005",
    category: "Abstract Sculpture",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80",
    description: "Nhấn mạnh vào hình khối và cảm xúc thay vì mô tả thực thể."
  },
  {
    id: "sculpt_006",
    category: "Modern Metal Art",
    image: "https://m.media-amazon.com/images/I/71FifKVSKCL._AC_UF894,1000_QL80_.jpg",
    description: "Thường làm từ thép không gỉ hoặc nhôm với các đường nét công nghiệp."
  },
  {
    id: "sculpt_007",
    category: "Kinetic Sculpture",
    image: "https://www.apicalreform.com/wp-content/uploads/2020/12/800-x-533-thumnail-stingray-photo00.jpg",
    description: "Các tác phẩm có thể chuyển động nhờ gió, điện hoặc cơ học."
  },
  {
    id: "sculpt_008",
    category: "Relief (Điêu khắc phù điêu)",
    image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&w=600&q=80",
    description: "Hình ảnh được chạm khắc nổi trên một mặt phẳng."
  },
  {
    id: "sculpt_009",
    category: "Buddhist Sculpture",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    description: "Mang đậm tính tôn giáo và tâm linh của Á Đông."
  },
  {
    id: "sculpt_010",
    category: "Installation Art",
    image: "https://blog.artsper.com/wp-content/uploads/2025/04/Henrique-Oliveira-Tangled-Constructions.jpg",
    description: "Thay đổi không gian bằng cách sắp xếp nhiều vật thể khác nhau."
  },
  {
    id: "sculpt_011",
    category: "Minimalist Sculpture",
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=600&q=80",
    description: "Sử dụng các hình học cơ bản và bề mặt đơn sắc."
  },
  {
    id: "sculpt_012",
    category: "Ivory/Bone Carving",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=600&q=80",
    description: "Kỹ thuật điêu khắc cực kỳ tinh xảo trên chất liệu cứng."
  },
  {
    id: "sculpt_013",
    category: "Glass Art ",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    description: "Tận dụng độ trong suốt và khả năng khúc xạ ánh sáng."
  },
  {
    id: "sculpt_014",
    category: "Hyper-realism",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
    description: "Tượng giống người thật đến từng lỗ chân lông và sợi tóc."
  },
  {
    id: "sculpt_015",
    category: "Wire Sculpture",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    description: "Sử dụng các sợi dây kim loại uốn lượn tạo hình khối rỗng."
  },
  {
    id: "sculpt_016",
    category: "Ice Sculpture",
    image: "https://www.chateau-lake-louise.com/content/uploads/2023/11/2023_LakeLouise_SnowDaysIceSculpture_MarckGutt-1-1.jpg",
    description: "Tác phẩm nghệ thuật tạm thời được tạc từ các khối băng lớn."
  },
  {
    id: "sculpt_017",
    category: "Stone Totem",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "Thường thấy trong các nền văn hóa bản địa, mang tính biểu tượng dòng họ."
  },
  {
    id: "sculpt_018",
    category: "Bust (Tượng bán thân)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SsgFhXyH2fMHC-aURfY-yKZkFWAc2BG-Fw&s",
    description: "Tập trung thể hiện chân dung từ ngực trở lên."
  },
  {
    id: "sculpt_019",
    category: "Found Object Art",
    image: "https://www.phaidon.com/cdn/shop/articles/1692-508012392714-phaidon-history-of-found-object-sculpture-list-900x450-c.jpg?v=1758343293",
    description: "Biến các đồ vật phế thải hoặc hàng ngày thành tác phẩm nghệ thuật."
  },
  {
    id: "sculpt_020",
    category: "Environmental Art",
    image: "https://www.iberdrola.com/documents/20125/39763/artnatur_746x419.jpg/40b9cf66-f8de-13ef-95cd-bfdbb5f0d218?t=1626066450895",
    description: "Tác phẩm quy mô lớn kết hợp trực tiếp với thiên nhiên."
  }
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
            {statueCategories.map((statue, index) => {
              return (
                <CarouselItem
                  key={statue.category}
                  className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <Link
                    href={`/statues-category?category=${encodeURIComponent(statue.category)}`}
                    className={`homepage-motion homepage-motion-up ${motionDelayClasses[index % motionDelayClasses.length]} group relative flex h-[40svh] min-h-80 overflow-hidden rounded-lg bg-black shadow-[var(--art-shadow-card)]`}
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
                  <Link
                    href={`/statues-category?category=${encodeURIComponent(statue.category)}`}
                    className={`mt-4 homepage-motion homepage-motion-up ${motionDelayClasses[index % motionDelayClasses.length]} group relative flex h-[40svh] min-h-80 overflow-hidden rounded-lg bg-black shadow-[var(--art-shadow-card)]`}
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
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="left-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:left-4" />
          <CarouselNext className="right-3 h-11 w-11 border border-[var(--art-border-light)] bg-[var(--art-surface-dark-soft)]/90 text-[var(--art-text-inverse)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[var(--art-surface-white)] hover:text-[var(--art-text-primary)] disabled:pointer-events-none disabled:opacity-35 md:right-4" />
        </Carousel>
      </div>
    </section>
  )
}

export default StatueOfCategory
