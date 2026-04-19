"use client";

import InfoPainting from "./InfoPainting";
import DescPainting from "./DescPainting";
import PaintingSimilar from "./PaintingSimilar";

const painting = {
  title: "Silent Geometry",
  artist: "Phạm Thùy Linh",
  artistAvatar: "https://marketplace.canva.com/tXH-Q/MAG7IGtXH-Q/1/tl/canva-MAG7IGtXH-Q.jpg",
  artistSologan: "Họa sĩ trừu tượng",
  price: "18.500.000 VND",
  size: "120 x 160 cm",
  medium: "Sơn dầu",
  year: "2025",
  category: "Trừu tượng đương đại",
  status: "Còn hàng",
  image:
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=80",
  description: [
    "Tác phẩm khai thác những mảng màu lớn và một cấu trúc hình học tiết chế để tạo ra cảm giác cân bằng, tĩnh lặng và có chiều sâu. Tổng thể bức tranh được xử lý theo hướng tối gian, nhưng vẫn giữ được tiết tấu thị giác rõ nét khi người xem đứng trước bề mặt thật.",
    "Gam màu xanh thẫm, be và kem được xếp theo từng lớp mỏng, tạo hiệu ứng ánh sáng mềm và độ sâu chất liệu. Đây là một tác phẩm phù hợp với không gian sống hiện đại, showroom cao cấp hoặc khu vực tiếp khách cần một điểm nhấn nghệ thuật tinh tế.",
  ],
  artistPhilosophy:
    "Theo đuổi hội họa trừu tượng đương đại, tập trung vào mối quan hệ giữa hình khối, tiết tấu và khoảng lặng trong mỗi bố cục.",
};

function PaintingDetailPage() {
  return (
    <main className="min-h-[calc(100svh-150px)] bg-[var(--art-surface-light)] text-[var(--art-text-primary)]">
      <InfoPainting painting={painting} />
      <DescPainting description={painting.description} />
      <PaintingSimilar />
    </main>
  );
}

export default PaintingDetailPage;
