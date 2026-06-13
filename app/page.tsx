import HeroSection from "@/components/hero/HeroSection";
import IngredientList from "@/components/ingredients/IngredientList";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IngredientList />
      <Footer />
    </main>
  );
}