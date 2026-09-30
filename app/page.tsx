import AgenticWorkflow from "@/components/pages/Home/AgenticWorkflow/AgenticWorkflow";
import Certifications from "@/components/pages/Home/Certifications/Certifications";
import ExperienceTimeline from "@/components/pages/Home/ExperienceTimeline/ExperienceTimeline";
import HomeHero from "@/components/pages/Home/Hero/Hero";
import Skills from "@/components/pages/Home/Skills/Skills";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ExperienceTimeline />
      <Certifications />
      <AgenticWorkflow />
      <Skills />
      <div className="w-full h-[50svh]"></div>
    </div>
  );
}
