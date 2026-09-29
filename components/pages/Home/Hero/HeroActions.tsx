import GithubIcon from "@/components/GithubIcon";
import Link from "@/components/Link";
import HeroButton from "@/components/pages/Home/Hero/HeroButton";
import { blurRiseIn } from "@/components/pages/Home/Hero/animations";
import { ArrowDown } from "lucide-react";
import * as motion from "motion/react-client";

export default function HeroActions() {
  return (
    <div className="flex gap-2 xl:flex-col">
      <motion.div {...blurRiseIn(0)}>
        <HeroButton className="text-white bg-black hover:bg-black/60">
          Download CV
          <ArrowDown className="size-7" />
        </HeroButton>
      </motion.div>
      <motion.div {...blurRiseIn(1)}>
        <HeroButton
          nativeButton={false}
          render={<Link href="https://github.com/DleiaDev" />}
        >
          Visit GitHub
          <GithubIcon className="size-7" />
        </HeroButton>
      </motion.div>
    </div>
  );
}
