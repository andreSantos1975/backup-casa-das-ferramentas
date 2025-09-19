import HeroSection from "@/components/HeroSection/HeroSection";
import ProductGrid from "@/components/ProductGrid/ProductGrid"; // Importar ProductGrid
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductGrid /> {/* Adicionar ProductGrid aqui */}
      {/* Você pode adicionar outros componentes ou conteúdo aqui */}
      <WhatsAppButton />
    </div>
  );
}
