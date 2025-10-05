import { auth } from "@/auth";
import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;
  // console.log("🚀 ~ MarketingLayout ~ user:", user);

  return (
    <main className="w-full grow relative">
      <Navbar user={user} />
      {children}
      <Footer />
    </main>
  );
}
