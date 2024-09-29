export const metadata = {
  title: "Kıblegah Tanıtım Sitesi",
  description: "Kıblegah Tanıtım Sitesi",
  icons: {
    icon: "/images/kıblegah-icon.jpg",
  }
};


import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </div>
  );
}
