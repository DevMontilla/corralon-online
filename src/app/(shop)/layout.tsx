import { TopMenu } from "@/components";
import { titleFont } from "@/config/fonts";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <div className={`${titleFont.className} px-0 sm:px-5`}>{children}</div>
    </main>
  );
}
