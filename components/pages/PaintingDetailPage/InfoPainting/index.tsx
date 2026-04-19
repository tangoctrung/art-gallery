"use client";

import ImagePainting from "./ImagePainting";

function InfoPainting({ painting }: { painting: any }) {


  return (
    <>
      <section className="bg-[var(--art-surface-dark)] px-[5%] py-12 text-[var(--art-text-inverse)] md:py-20">
        <div className="mx-auto grid max-w-350 items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="order-2">
            <h1 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl md:leading-[1.07]">
              {painting.title}
            </h1>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[var(--art-overlay-white-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-50)]">
                  Giá
                </p>
                <p className="mt-3 text-[28px] leading-[1.14] tracking-[0.196px]">
                  {painting.price}
                </p>
              </div>
              <div className="rounded-xl bg-[var(--art-overlay-white-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--art-text-white-50)]">
                  Kích thước
                </p>
                <p className="mt-3 text-[28px] leading-[1.14] tracking-[0.196px]">
                  {painting.size}
                </p>
              </div>
            </div>

            <dl className="mt-8 grid gap-x-8 gap-y-5 text-base leading-7 tracking-[-0.374px] sm:grid-cols-2">
              <div>
                <dt className="text-sm text-[var(--art-text-white-50)]">Chất liệu</dt>
                <dd className="mt-1 text-[var(--art-text-white-85)]">{painting.medium}</dd>
              </div>
              <div>
                <dt className="text-sm text-[var(--art-text-white-50)]">Năm sáng tác</dt>
                <dd className="mt-1 text-[var(--art-text-white-85)]">{painting.year}</dd>
              </div>
              <div>
                <dt className="text-sm text-[var(--art-text-white-50)]">Thể loại</dt>
                <dd className="mt-1 text-[var(--art-text-white-85)]">{painting.category}</dd>
              </div>
              <div>
                <dt className="text-sm text-[var(--art-text-white-50)]">Tình trạng</dt>
                <dd
                  className={`mt-1 font-bold ${painting.status === "Còn hàng" ? "text-green-400" : "text-red-500"}`}
                >
                  {painting.status}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--art-accent)] px-5 py-2.5 text-[17px] text-[var(--art-text-inverse)] transition hover:bg-[var(--art-accent-hover)]">
                Đặt hàng
              </button>
            </div>

            <div className="mt-8 rounded-xl bg-[var(--art-overlay-white-soft)] p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={painting.artistAvatar}
                      alt={painting.artist}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl leading-tight font-medium">
                      {painting.artist}
                    </h2>
                    <p className="text-sm text-(--art-text-white-68)">{painting.artistSologan}</p>
                  </div>
                </div>
              </div>

              <div className="mt-2 space-y-5 text-[17px] leading-7 tracking-[-0.374px]">
                <p className="mt-1 text-base italic text-[var(--art-text-white-78)]">
                  "{painting.artistPhilosophy}"
                </p>
              </div>
            </div>
          </div>

          <div className="order-1">
            <ImagePainting painting={painting} />
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoPainting;
