"use client"

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const paintingCategories = [
  {
    id: 1,
    name: "Realism (Chủ nghĩa Hiện thực)",
    image_url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=500&auto=format",
    description: "Tái hiện sự vật chính xác như mắt người nhìn thấy."
  },
  {
    id: 2,
    name: "Impressionism (Ấn tượng)",
    image_url: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=500&auto=format",
    description: "Tập trung vào ánh sáng và những nét vẽ ngắn, nhanh."
  },
  {
    id: 3,
    name: "Abstract (Trừu tượng)",
    image_url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format",
    description: "Sử dụng hình khối, màu sắc và đường nét thay vì vật thể thực."
  },
  {
    id: 4,
    name: "Surrealism (Siêu thực)",
    image_url: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=500&auto=format",
    description: "Kết hợp các yếu tố kỳ quặc, giống như trong giấc mơ."
  },
  {
    id: 5,
    name: "Pop Art",
    image_url: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=500&auto=format",
    description: "Sử dụng hình ảnh từ văn hóa đại chúng và màu sắc rực rỡ."
  },
  {
    id: 6,
    name: "Minimalism (Tối giản)",
    image_url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format",
    description: "Loại bỏ mọi chi tiết thừa, chỉ giữ lại những gì cơ bản nhất."
  },
  {
    id: 7,
    name: "Cubism (Lập thể)",
    image_url: "https://images.unsplash.com/photo-1576016770956-debb63d92058?q=80&w=500&auto=format",
    description: "Phá vỡ vật thể thành các mảnh đa giác hình học."
  },
  {
    id: 8,
    name: "Digital Art",
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format",
    description: "Được tạo ra bằng phần mềm đồ họa và bảng vẽ."
  },
  {
    id: 9,
    name: "Watercolor (Màu nước)",
    image_url: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=500&auto=format",
    description: "Mềm mại, trong trẻo nhờ kỹ thuật pha loãng với nước."
  },
  {
    id: 10,
    name: "Oil Painting (Sơn dầu)",
    image_url: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=500&auto=format",
    description: "Chất liệu dày, có độ bền và độ sâu màu cao."
  },
  {
    id: 11,
    name: "Cyberpunk",
    image_url: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=500&auto=format",
    description: "Tương lai với đèn neon và công nghệ cao."
  },
  {
    id: 12,
    name: "Charcoal (Than chì)",
    image_url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format",
    description: "Sử dụng than để tạo ra các mảng sáng tối mạnh mẽ."
  },
  {
    id: 13,
    name: "Ukiyo-e (Nhật Bản)",
    image_url: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=500&auto=format",
    description: "Phong cách tranh khắc gỗ truyền thống của Nhật Bản."
  },
  {
    id: 14,
    name: "Graffiti",
    image_url: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=500&auto=format",
    description: "Nghệ thuật đường phố bằng bình xịt phá cách."
  },
  {
    id: 15,
    name: "Line Art",
    image_url: "https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?q=80&w=500&auto=format",
    description: "Tập trung vào các nét vẽ đơn giản, thanh mảnh."
  },
  {
    id: 16,
    name: "Pointillism (Điểm nhãn)",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRp66CGYHp0mWwgnOD1xL8wbQtXCVw_ztgg&s",
    description: "Tạo hình bằng các chấm màu nhỏ đặt cạnh nhau."
  },
  {
    id: 17,
    name: "Modern Art",
    image_url: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=500&auto=format",
    description: "Phong cách hiện đại phá vỡ các quy tắc truyền thống."
  },
  {
    id: 18,
    name: "Renaissance (Phục hưng)",
    image_url: "https://blog.artsper.com/wp-content/uploads/2022/04/New-Featured-Image-1200-x-675-6.jpg",
    description: "Tập trung vào tỉ lệ vàng và vẻ đẹp con người."
  },
  {
    id: 19,
    name: "Concept Art",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTW8s5VJsO1ryyWxWXhYkk57CS_fRJki7pGY3yfwJwr2G8v0cTgiM2L0wB6hyQFs4S2hV2i4jro-tcY0jpRwD2j1MV-y3098mYjCaHYQGftgt8gcrWl7BbqfQyly3mQOZPjJ1RCrgpIlw/s1600/ralph-mcquarrie-star-wars-concept-artist-passes-away.jpg",
    description: "Thiết kế ý tưởng cho phim và trò chơi."
  },
  {
    id: 20,
    name: "Ink Wash (Tranh thủy mặc)",
    image_url: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=500&auto=format",
    description: "Sử dụng mực đen với các nồng độ khác nhau."
  }
];


function PaintingsCategoryPage() {
  const router = useRouter();
  return (
    <main className="min-h-[calc(100svh-150px)] bg-[var(--art-surface-light)] text-[var(--art-text-primary)]">
      <section className="bg-black px-[5%] py-14 text-[var(--art-text-inverse)] md:py-20 xl:py-24 bg-[linear-gradient(135deg,rgba(14,18,24,1)_0%,rgba(26,29,34,0.96)_58%,rgba(34,39,48,0.94)_100%)] px-[5%] py-14 text-[var(--art-text-inverse)]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[50vw] bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.22),transparent_62%)] blur-3xl lg:block"
        />
        <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-end">
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--art-text-white-55)] uppercase">
              Paintings Category
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.05]">
              Thể loại tranh vẽ được trình bày như bộ sưu tập.
            </h1>
            <p className="mt-5 max-w-[640px] text-[17px] leading-7 text-[var(--art-text-white-72)] md:text-[19px]">
              Mỗi category là một điểm nhấn thị giác độc lập: có ảnh tượng trưng, nhịp chiều cao khác nhau và được sắp xếp theo masonry grid để trang trông sống hơn thay vì một lưới đồng đều.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  router.back()
                }}
                className="inline-flex gap-2 items-center rounded-full border border-[var(--art-border-light-emphasis)] px-5 py-3 text-sm font-medium text-[var(--art-text-inverse)] transition hover:border-[var(--art-accent-hover)] hover:text-[var(--art-accent-hover)]"
              >
                <ArrowLeft />
                Quay lại
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--art-border-light)] bg-[rgb(255_255_255_/_0.06)] p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--art-text-white-55)] uppercase">
              Tuyển chọn
            </p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-5xl font-semibold tracking-[-0.06em]">08</p>
                <p className="mt-1 text-sm leading-6 text-[var(--art-text-white-72)]">
                  nhóm tranh tiêu biểu từ các dòng treo tường phổ biến đến các lựa chọn thiên về sưu tầm.
                </p>
              </div>
              <div className="h-px bg-[var(--art-border-light)]" />
              <div className="grid grid-cols-2 gap-4 text-sm text-[var(--art-text-white-72)]">
                <div className="rounded-2xl bg-[rgb(255_255_255_/_0.04)] p-4">
                  Tỷ lệ tile thay đổi để tạo nhịp đọc tự nhiên.
                </div>
                <div className="rounded-2xl bg-[rgb(255_255_255_/_0.04)] p-4">
                  Ảnh minh hoạ nội bộ nên không phụ thuộc nguồn ngoài.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="painting-category-grid" className="px-[5%] py-6 md:py-10 xl:py-14">
        <div className="mx-auto max-w-350">
          <div className="columns-1 sm:columns-2 gap-4 md:columns-3 xl:columns-4">
            {paintingCategories.map((category, index) => (
              <article
                key={category.name}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-black shadow-[var(--art-shadow-card)]"
              >
                <Link href={`/paintings-category/${index}`} className="block">
                  <div>
                    <img
                      src={category.image_url}
                      alt={`Minh hoạ cho thể loại ${category.name}`}
                      className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-20)] to-[var(--art-overlay-black-75)]" />
                  <div className="flex absolute inset-0 flex-col justify-end p-4 md:p-5">
                    <h3 className="mt-1 text-base font-semibold uppercase tracking-[0.18em] text-[var(--art-text-white-65)] line-clamp-1">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaintingsCategoryPage
