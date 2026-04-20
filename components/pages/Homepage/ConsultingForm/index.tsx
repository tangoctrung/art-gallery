"use client"

import { ArrowRight, Mail, Phone, User } from "lucide-react"

function ConsultingForm() {
  return (
    <section
      id="consultation"
      className="bg-[var(--art-surface-light)] lg:py-24 py-10 md:py-20 px-[5%]"
    >
      <div className="mx-auto grid max-w-350 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-xl h-fit bg-[var(--art-surface-dark)] p-8 text-[var(--art-text-inverse)] md:p-10">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] mb-4">
            Nhận tư vấn tranh cho không gian của bạn.
          </h2>
          <p className="text-base leading-7 text-(--art-text-white-65)">
            Điền thông tin cơ bản, đội ngũ sẽ liên hệ để đề xuất bộ sưu tập, kích thước, chất liệu và mức ngân sách phù hợp.
          </p>

          <div className="mt-10 space-y-4 text-sm text-[var(--art-text-white-72)]">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[var(--art-accent-hover)]" />
              <span>Hotline: 0909 1111</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[var(--art-accent-hover)]" />
              <span>hello@artgallery.vn</span>
            </div>
          </div>
        </div>

        <form className="rounded-xl bg-[var(--art-surface-white)] p-7 shadow-[var(--art-shadow-panel)] md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Họ và tên</span>
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3">
                <User className="h-4 w-4 text-[var(--art-icon-muted)]" />
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Số điện thoại</span>
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3">
                <Phone className="h-4 w-4 text-[var(--art-icon-muted)]" />
                <input
                  type="tel"
                  placeholder="0909 123 456"
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Email</span>
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3">
                <Mail className="h-4 w-4 text-[var(--art-icon-muted)]" />
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Ngân sách dự kiến</span>
              <input
                type="text"
                placeholder="10.000.000 - 30.000.000 VND"
                className="w-full rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3 text-sm focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Loại không gian</span>
              <input
                type="text"
                placeholder="Phong khach / showroom / khach san..."
                className="w-full rounded-2xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-3 text-sm focus:outline-none"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm text-[var(--art-text-black-55)]">Mô tả nhu cầu</span>
              <textarea
                rows={5}
                placeholder="Mô tả phong cách bạn yêu thích, kích thước tường, tông màu nội thất, mục đích sử dụng..."
                className="w-full rounded-3xl border border-[var(--art-border-dark)] bg-[var(--art-surface-form)] px-4 py-4 text-sm leading-7 focus:outline-none"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col flex-wrap items-start justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--art-accent)] px-6 py-3 text-sm font-medium text-[var(--art-text-inverse)] transition hover:bg-[var(--art-accent-hover)]"
            >
              Gửi yêu cầu
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ConsultingForm
