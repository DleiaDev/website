import GithubIcon from "@/components/GithubIcon";
import HeroButton from "@/components/pages/Home/Hero/HeroButton";
import { ArrowDown } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex gap-2 xl:flex-col">
      <HeroButton className="text-white bg-black hover:bg-black/60">
        Download CV
        <ArrowDown className="size-7" />
      </HeroButton>
      <HeroButton
        nativeButton={false}
        render={<a href="https://github.com/DleiaDev" target="_blank" />}
      >
        Visit GitHub
        <GithubIcon className="size-7" />
      </HeroButton>
    </div>
  );
}
