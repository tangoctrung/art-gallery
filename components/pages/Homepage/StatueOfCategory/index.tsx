"use client"

const statues = [
  {
    category: "Tượng chân dung",
    image:
      "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2025/7/17/420625928e1b3845610a3-17527293162061727509481.jpg",
  },
  {
    category: "Tượng tượng đài",
    image:
      "https://glints.com/vn/blog/wp-content/uploads/2022/10/kie%CC%82%CC%81n-tru%CC%81c-865x1024.jpg",
  },
  {
    category: "Tượng tôn giáo",
    image:
      "https://mythuatms.com/image/data/HUONG%20LY/MY%20THUAT%20CN/tim%20hieu%20ve%20nghe%20thuat%20dieu%20khac%20va%20tao%20hinh%20tuong%20phat/tao-hinh-tuong-phat-5b.webp",
  },
  {
    category: "Phù điêu nổi cao",
    image:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/17/871581/Bao-Vat-Quoc-Gia-14.jpg",
  },
  {
    category: "Phù điêu nổi thấp",
    image:
      "https://dieukhacda.com.vn/wp-content/uploads/2022/08/tuong-phu-dieu-bang-da-1.jpg",
  },
  {
    category: "Tượng cách điệu",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Tượng nghệ thuật kiến trúc",
    image:
      "https://ninhbinhstone.com.vn/wp-content/uploads/2021/03/tuong-nghe-thuat-1.jpg",
  },
  {
    category: "Tượng trưng bày bảo tàng",
    image:
      "https://tramanh.art/wp-content/uploads/2023/06/davidflorence.jpeg",
  },
];

function StatueOfCategory() {
  return (
    <section
      id="statue-collections"
      className="lg:py-24 py-10 md:py-20 px-[5%]"
    >
      <div className="mx-auto max-w-480">
        <div className="max-w-full mb-10 flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-center tracking-[-0.04em] mb-4">
            Thể loại tượng
          </h2>
          <p className="max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] text-[17px] leading-7 text-(--art-text-black-62) text-center">
            Mỗi bức tranh là một nhân quan khác nhau. Hãy lựa chọn những thể loại mà bạn quan tâm để tìm ra được bức tranh mình ưng ý nhất.
          </p>
        </div>

        <div className="grid auto-rows-[320px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
          {statues.map((artwork, index) => (
            <article
              key={`${artwork.category}-${index}`}
              className={`group relative overflow-hidden rounded-lg bg-black ${index === 0 ? "sm:col-span-2 sm:row-span-2" : "col-span-1 row-span-1"}`}
            >
              <img
                src={artwork.image}
                alt={`${artwork.category}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[var(--art-overlay-black-05)] via-[var(--art-overlay-black-20)] to-[var(--art-overlay-black-75)]" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-65)] line-clamp-1">
                  {artwork.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatueOfCategory
