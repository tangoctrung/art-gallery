import LayoutMain from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutMain>
      {children}
    </LayoutMain>
  );
}
