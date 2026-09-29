import ExperienceTimeline from "@/components/pages/Home/ExperienceTimeline/ExperienceTimeline";
import HomeHero from "@/components/pages/Home/Hero/Hero";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ExperienceTimeline />
      <div className="w-full h-[50svh]"></div>
    </div>
  );
}
