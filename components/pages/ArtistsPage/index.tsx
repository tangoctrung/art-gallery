"use client"

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Brush, MapPin, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

const artists = [
  {
    id: 'artist_001',
    name: 'Phạm Thùy Linh',
    specialty: 'Trừu tượng đương đại',
    city: 'TP. Hồ Chí Minh',
    experience: '12 năm',
    note:
      'Kết hợp các lớp màu chuyển động với cấu trúc tối giản để tạo chiều sâu thị giác cho không gian hiện đại.',
    highlight: 'Bộ tranh acrylic khổ lớn cho sảnh và phòng khách',
    image:
      'https://avatarngau.sbs/wp-content/uploads/2025/06/avatar-anime-nam-ngau-cam-kiem.jpg',
    tags: ['Acrylic', 'Large format', 'Abstract'],
  },
  {
    id: 'artist_002',
    name: 'Minh Châu',
    specialty: 'Sơn dầu phong cảnh',
    city: 'Đà Lạt',
    experience: '9 năm',
    note:
      'Tập trung vào ánh sáng tự nhiên và bảng màu trầm ấm, phù hợp các không gian cần chiều sâu và cảm giác yên tĩnh.',
    highlight: 'Loạt tranh phong cảnh miền núi và hồ nước',
    image:
      'https://i.pinimg.com/736x/82/13/cb/8213cba4053bca065d0250406e73d33b.jpg',
    tags: ['Oil painting', 'Landscape', 'Collector pick'],
  },
  {
    id: 'artist_003',
    name: 'An Nhiên',
    specialty: 'Chân dung hiện đại',
    city: 'Hà Nội',
    experience: '7 năm',
    note:
      'Khai thác ánh mắt, khoảng lặng và tâm trạng nhân vật bằng các mảng hình tiết chế, thiên về cảm xúc hơn mô tả.',
    highlight: 'Commission chân dung cá nhân và bộ đôi',
    image:
      'https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-commercial-cartoon-music-festival-idol-singer-hand-account-element-png-image_619028.jpg',
    tags: ['Portrait', 'Commission', 'Modern'],
  },
  {
    id: 'artist_004',
    name: 'Nguyễn Minh Châu',
    specialty: 'Tối giản đương đại',
    city: 'Huế',
    experience: '11 năm',
    note:
      'Làm việc với hình khối gọn, khoảng thở lớn và nhịp điệu màu trung tính để cân bằng các công trình kiến trúc hiện đại.',
    highlight: 'Series canvas tối giản cho villa và boutique hotel',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    tags: ['Minimalism', 'Neutral palette', 'Interior-ready'],
  },
  {
    id: 'artist_005',
    name: 'Tuệ Tâm',
    specialty: 'Mực nho và mixed media',
    city: 'Hội An',
    experience: '8 năm',
    note:
      'Pha trộn tinh thần Á Đông với bố cục đương đại, tạo nên các tác phẩm mềm nhưng vẫn có điểm nhấn thị giác rõ ràng.',
    highlight: 'Mixed media trên giấy dó và canvas',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
    tags: ['Ink wash', 'Mixed media', 'Asian contemporary'],
  },
  {
    id: 'artist_006',
    name: 'Bảo Trân',
    specialty: 'Pop art màu mạnh',
    city: 'TP. Hồ Chí Minh',
    experience: '6 năm',
    note:
      'Sử dụng màu bão hòa, typography và nhịp hình táo bạo để tạo hiệu ứng bắt mắt cho không gian trẻ và thương mại.',
    highlight: 'Bộ sưu tập pop art cho cafe, studio, retail',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    tags: ['Pop art', 'Bold color', 'Commercial space'],
  },
  {
    id: 'artist_007',
    name: 'Hoàng Sơn',
    specialty: 'Line art và đơn sắc',
    city: 'Đà Nẵng',
    experience: '10 năm',
    note:
      'Tạo dấu ấn bằng đường nét thanh, cấu trúc sạch và ngôn ngữ thị giác phù hợp các không gian sống tối giản.',
    highlight: 'Tranh line art theo bộ 3 hoặc bộ 6',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    tags: ['Line art', 'Monochrome', 'Modern home'],
  },
  {
    id: 'artist_008',
    name: 'Gia Bảo',
    specialty: 'Siêu thực ý niệm',
    city: 'Hà Nội',
    experience: '13 năm',
    note:
      'Phát triển các bố cục giàu tính kể chuyện với lớp nghĩa biểu tượng, hợp khách hàng muốn tác phẩm có chiều sâu sưu tầm.',
    highlight: 'Concept series dành cho private collection',
    image:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80',
    tags: ['Surreal', 'Conceptual', 'Private collection'],
  },
]

const artistFocuses = ['Trừu tượng', 'Phong cảnh', 'Chân dung', 'Tối giản', 'Mixed media', 'Pop art']

function ArtistsPage() {
  const router = useRouter();
  return (
    <main className="min-h-[calc(100svh-150px)] bg-[var(--art-surface-light)] text-[var(--art-text-primary)]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(14,18,24,1)_0%,rgba(26,29,34,0.96)_58%,rgba(34,39,48,0.94)_100%)] px-[5%] py-14 text-[var(--art-text-inverse)] md:py-20 xl:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[38vw] bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.22),transparent_62%)] blur-3xl lg:block"
        />

        <div className="relative mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1.1fr)_380px] lg:items-start">
          <div className="max-w-[760px]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--art-text-white-55)]">
              Artists Directory
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.05]">
              Danh sách các hoạ sĩ nổi bật.
            </h1>
            <p className="mt-5 max-w-[640px] text-[17px] leading-7 text-[var(--art-text-white-72)] md:text-[19px]">
              Trang này ưu tiên khả năng quét nhanh: mỗi artist là một card riêng với chân dung, chuyên môn,
              mô tả ngắn và định hướng tác phẩm phù hợp cho từng loại không gian.
            </p>

            <div className="mt-8">
              <button
                onClick={() => {
                  router.back();
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--art-border-light-emphasis)] px-5 py-3 text-sm font-medium text-[var(--art-text-inverse)] transition hover:border-[var(--art-accent-hover)] hover:text-[var(--art-accent-hover)]"
              >
                <ArrowLeft /> Quay lại
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--art-border-light)] bg-[rgb(255_255_255_/_0.04)] p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--art-text-white-50)]">Nghệ sĩ</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">08</p>
              </div>
              <div className="rounded-xl border border-[var(--art-border-light)] bg-[rgb(255_255_255_/_0.04)] p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--art-text-white-50)]">Khu vực</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">05</p>
              </div>
              <div className="rounded-xl border border-[var(--art-border-light)] bg-[rgb(255_255_255_/_0.04)] p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--art-text-white-50)]">Phong cách</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">06</p>
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-[var(--art-border-light)] bg-[rgb(255_255_255_/_0.06)] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--art-text-white-55)]">
                  Tuyển chọn
                </p>
                <p className="mt-1 text-sm text-[var(--art-text-white-72)]">
                  Nhóm hoạ sĩ phù hợp trưng bày nhà ở, studio và không gian thương mại.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-[rgb(255_255_255_/_0.04)] p-5">
                <p className="text-sm text-[var(--art-text-white-72)]">
                  Chọn nhanh theo phong cách thị giác thay vì duyệt từng tác phẩm rời.
                </p>
              </div>

              <div className="rounded-xl bg-[rgb(255_255_255_/_0.04)] p-5">
                <p className="text-sm text-[var(--art-text-white-72)]">
                  Artist đến từ nhiều thành phố để gợi ý ngữ cảnh và gu thẩm mỹ khác nhau.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--art-border-light)] bg-[rgb(255_255_255_/_0.03)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-50)]">
                  Nhóm phong cách
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {artistFocuses.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-[var(--art-border-light)] px-3 py-2 text-xs text-[var(--art-text-white-72)]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-[5%] py-8 md:py-10 xl:py-14">
        <div className="mx-auto max-w-350">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {artists.map((artist, index) => (
              <article
                key={artist.id}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--art-border-dark)] bg-[var(--art-surface-white)] shadow-[var(--art-shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--art-shadow-panel)]"
              >
                <div className="relative aspect-square overflow-hidden bg-[var(--art-surface-dark-soft)]">
                  <img
                    src={artist.image}
                    alt={`Chân dung hoạ sĩ ${artist.name}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[var(--art-overlay-black-80)] to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[28px] leading-tight font-medium tracking-[-0.03em]">
                        {artist.name}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--art-text-black-58)]">{artist.specialty}</p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-[var(--art-border-dark-soft)] pt-5">
                    <Link
                      href={`/artists/${index}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--art-accent)] transition hover:text-[var(--art-accent-hover)]"
                    >
                      Xem chi tiết
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArtistsPage
