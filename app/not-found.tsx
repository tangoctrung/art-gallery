import Link from "next/link";

function PageNotFound() {
  return (
    <main className="flex min-h-[100svh] items-center bg-[linear-gradient(180deg,rgba(26,29,34,0.92)_0%,rgba(26,29,34,1)_100%)] px-[5%] py-16 text-[var(--art-text-inverse)]">
      <section className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[var(--art-text-inverse)] md:text-7xl md:leading-[1.07]">
          404
        </h1>
        <p className="mt-5 max-w-[48ch] text-3xl leading-7 tracking-[-0.374px] text-[var(--art-text-white-85)]">
          Trang không tồn tại.
        </p>
        <p className="mt-5 max-w-[48ch] text-[17px] leading-7 tracking-[-0.374px] text-[var(--art-text-white-68)]">
          Liên kết có thể đã thay đổi, nội dung đã bị gỡ bỏ, hoặc đường dẫn bạn
          nhập không chính xác.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--art-accent)] px-5 py-2.5 text-[17px] text-[var(--art-text-inverse)] transition hover:bg-[var(--art-accent-hover)]"
          >
            Về trang chủ
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound
