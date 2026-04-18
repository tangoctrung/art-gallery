"use client"

import { Brush, PersonStanding, Sparkles, Wallpaper } from 'lucide-react'
import React from 'react'


const dataIntro = [
  {
    id: 1,
    title: "Những bức họa nổi tiếng",
    description: "Ở đây chúng tôi có nhiều tranh vẽ với nhiều thể loại khác nhau được tạo thành từ nhiều vật liệu khác nhau.",
    icon: <Wallpaper className="h-6 w-6 text-(--art-accent)" />,
  },
  {
    id: 2,
    title: "Bức tượng độc lạ",
    description: "Chúng tôi có cả tượng làm từ nhiều vật liệu như gỗ, kim loại,...",
    icon: <PersonStanding className="h-6 w-6 text-(--art-accent)" />,
  },
  {
    id: 3,
    title: "Họa sĩ có chuyên môn cao",
    description: "Những tác phẩm đều là của các họa sĩ, nhà điêu khắc có chuyên môn cao.",
    icon: <Brush className="h-6 w-6 text-(--art-accent)" />,
  },
]
function Introduction() {
  return (
    <section className="px-[5%] py-10 md:py-20 border-b border-(--art-border-dark-soft) bg-(--art-surface-light)">
      <h3 className='text-4xl font-semibold tracking-[-0.04em] mb-10 text-center'>Tại sao chọn ArtGallery</h3>
      <div className="mx-auto grid max-w-480 gap-6 md:grid-cols-3">
        {dataIntro.map((item) => (
          <div
            key={item.id.toString() + item.title}
            className="rounded-xl bg-(--art-surface-white) px-6 py-6 shadow-(--art-shadow-card)"
          >
            <div className="flex items-center gap-3 text-[18px] font-semibold leading-7 text-(--art-text-black-80)">
              {item.icon}
              {item.title}
            </div>
            <p className="text-[14px] leading-5 text-(--art-text-black-80)">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Introduction
