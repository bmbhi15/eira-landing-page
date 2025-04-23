import type { MetaFunction } from "@remix-run/node";
import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/layout/HeroSection";
import PromotionSection from "../components/layout/PromotionSection";
import FeaturesSection from "~/components/layout/FeaturesSection";
import TutorialSection from "~/components/layout/TutorialSection";
import SecuritySection from "~/components/layout/SecuritySection";
import TestimonialsSection from "~/components/layout/TestimonialsSection";
import PromotionalBox from "~/components/layout/PromotionalBox";
import FooterSection from "~/components/layout/FooterSection";
import { useState } from "react";
export const meta: MetaFunction = () => {
  return [
    { title: "EIRA - Home" },
    { name: "description", content: "Welcome to EIRA" },
  ];
};

export default function Home() {
  const [isStudent, setIsStudent] = useState(true);

  const handleToggleChange = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div
      style={{
        width: "clamp(600px, 90%, 1400px)",
        margin: "0 auto",
      }}
    >
      <NavBar onToggleChange={handleToggleChange} />
      <HeroSection isStudent={isStudent} />
      <PromotionSection isStudent={isStudent} />
      <FeaturesSection />
      <TutorialSection />
      <SecuritySection />
      <TestimonialsSection />
      <PromotionalBox isStudent={isStudent} />
      <FooterSection />
    </div>
  );
}
