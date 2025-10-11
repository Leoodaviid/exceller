import { auth } from "@/auth";
import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import { WhatsAppButton } from "@/components/ui/wpp-button";

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
      <WhatsAppButton
        phoneNumber="+55 85 981801316"
        className="left-6 right-auto"
        message="Olá! Estou visitando o site da Exceller e gostaria de obter mais informações."
      />
      <Footer />
    </main>
  );
}
