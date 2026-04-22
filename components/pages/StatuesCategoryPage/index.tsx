"use client"

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const sculptureStyles = [
  {
    id: "sculpt_001",
    name: "Classical Marble (Tượng đá cẩm thạch cổ điển)",
    image_url: "https://estatebuyers.nyshowplace.com/wp-content/uploads/2019/10/Get-To-Know-These-Iconic-Marble-Sculptures.jpg",
    description: "Phong cách Hy Lạp - La Mã cổ điển, tập trung vào vẻ đẹp hình thể con người."
  },
  {
    id: "sculpt_002",
    name: "Bronze Casting (Tượng đúc đồng)",
    image_url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/14309/33567/main-image",
    description: "Sử dụng khuôn đúc kim loại, tạo độ bền cao và chi tiết sắc sảo."
  },
  {
    id: "sculpt_003",
    name: "Wood Carving (Điêu khắc gỗ)",
    image_url: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&w=600&q=80",
    description: "Sử dụng các loại gỗ tự nhiên, mang lại cảm giác ấm cúng và mộc mạc."
  },
  {
    id: "sculpt_004",
    name: "Terracotta (Tượng đất nung)",
    image_url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    description: "Gốm không tráng men, thường có màu nâu đỏ đặc trưng của đất sét."
  },
  {
    id: "sculpt_005",
    name: "Abstract Sculpture (Tượng trừu tượng)",
    image_url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80",
    description: "Nhấn mạnh vào hình khối và cảm xúc thay vì mô tả thực thể."
  },
  {
    id: "sculpt_006",
    name: "Modern Metal Art (Tượng kim loại hiện đại)",
    image_url: "https://m.media-amazon.com/images/I/71FifKVSKCL._AC_UF894,1000_QL80_.jpg",
    description: "Thường làm từ thép không gỉ hoặc nhôm với các đường nét công nghiệp."
  },
  {
    id: "sculpt_007",
    name: "Kinetic Sculpture (Điêu khắc động)",
    image_url: "https://www.apicalreform.com/wp-content/uploads/2020/12/800-x-533-thumnail-stingray-photo00.jpg",
    description: "Các tác phẩm có thể chuyển động nhờ gió, điện hoặc cơ học."
  },
  {
    id: "sculpt_008",
    name: "Relief (Điêu khắc phù điêu)",
    image_url: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&w=600&q=80",
    description: "Hình ảnh được chạm khắc nổi trên một mặt phẳng."
  },
  {
    id: "sculpt_009",
    name: "Buddhist Sculpture (Tượng Phật giáo)",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    description: "Mang đậm tính tôn giáo và tâm linh của Á Đông."
  },
  {
    id: "sculpt_010",
    name: "Installation Art (Nghệ thuật sắp đặt)",
    image_url: "https://blog.artsper.com/wp-content/uploads/2025/04/Henrique-Oliveira-Tangled-Constructions.jpg",
    description: "Thay đổi không gian bằng cách sắp xếp nhiều vật thể khác nhau."
  },
  {
    id: "sculpt_011",
    name: "Minimalist Sculpture (Tượng tối giản)",
    image_url: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=600&q=80",
    description: "Sử dụng các hình học cơ bản và bề mặt đơn sắc."
  },
  {
    id: "sculpt_012",
    name: "Ivory/Bone Carving (Điêu khắc ngà/xương)",
    image_url: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=600&q=80",
    description: "Kỹ thuật điêu khắc cực kỳ tinh xảo trên chất liệu cứng."
  },
  {
    id: "sculpt_013",
    name: "Glass Art (Điêu khắc thủy tinh)",
    image_url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    description: "Tận dụng độ trong suốt và khả năng khúc xạ ánh sáng."
  },
  {
    id: "sculpt_014",
    name: "Hyper-realism (Siêu thực tế)",
    image_url: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
    description: "Tượng giống người thật đến từng lỗ chân lông và sợi tóc."
  },
  {
    id: "sculpt_015",
    name: "Wire Sculpture (Tượng dây thép)",
    image_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    description: "Sử dụng các sợi dây kim loại uốn lượn tạo hình khối rỗng."
  },
  {
    id: "sculpt_016",
    name: "Ice Sculpture (Điêu khắc băng)",
    image_url: "https://www.chateau-lake-louise.com/content/uploads/2023/11/2023_LakeLouise_SnowDaysIceSculpture_MarckGutt-1-1.jpg",
    description: "Tác phẩm nghệ thuật tạm thời được tạc từ các khối băng lớn."
  },
  {
    id: "sculpt_017",
    name: "Stone Totem (Tượng linh vật đá)",
    image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "Thường thấy trong các nền văn hóa bản địa, mang tính biểu tượng dòng họ."
  },
  {
    id: "sculpt_018",
    name: "Bust (Tượng bán thân)",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SsgFhXyH2fMHC-aURfY-yKZkFWAc2BG-Fw&s",
    description: "Tập trung thể hiện chân dung từ ngực trở lên."
  },
  {
    id: "sculpt_019",
    name: "Found Object Art (Nghệ thuật vật chất sẵn có)",
    image_url: "https://www.phaidon.com/cdn/shop/articles/1692-508012392714-phaidon-history-of-found-object-sculpture-list-900x450-c.jpg?v=1758343293",
    description: "Biến các đồ vật phế thải hoặc hàng ngày thành tác phẩm nghệ thuật."
  },
  {
    id: "sculpt_020",
    name: "Environmental Art (Điêu khắc môi trường)",
    image_url: "https://www.iberdrola.com/documents/20125/39763/artnatur_746x419.jpg/40b9cf66-f8de-13ef-95cd-bfdbb5f0d218?t=1626066450895",
    description: "Tác phẩm quy mô lớn kết hợp trực tiếp với thiên nhiên."
  }
];

function StatuesCategoryPage() {
  const router = useRouter();
  return (
    <main className="min-h-[calc(100svh-150px)] bg-[var(--art-surface-light)] text-[var(--art-text-primary)]">
      <section className="bg-black px-[5%] py-14 text-[var(--art-text-inverse)] md:py-20 xl:py-24 bg-[linear-gradient(135deg,rgba(14,18,24,1)_0%,rgba(26,29,34,0.96)_58%,rgba(34,39,48,0.94)_100%)] px-[5%] py-14 text-[var(--art-text-inverse)]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[38vw] bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.22),transparent_62%)] blur-3xl lg:block"
        />
        <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-end">
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--art-text-white-55)] uppercase">
              Statues Category
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.05]">
              Hệ thống các thể loại tượng nghệ thuật trưng bày.
            </h1>
            <p className="mt-5 max-w-[640px] text-[17px] leading-7 text-[var(--art-text-white-72)] md:text-[19px]">
              Mỗi danh mục là một thực thể hình khối độc lập: sử dụng hình ảnh đại diện đa góc độ để làm nổi bật bề mặt chất liệu, kết hợp với nhịp độ chiều cao biến thiên của các bệ đỡ (pedestals).
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
                <p className="text-5xl font-semibold tracking-[-0.06em]">20</p>
                <p className="mt-1 text-sm leading-6 text-[var(--art-text-white-72)]">
                  nhóm tượng tiêu biểu từ các dòng tượng phổ biến đến các lựa chọn thiên về sưu tầm.
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
            {sculptureStyles.map((category, index) => (
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

export default StatuesCategoryPage