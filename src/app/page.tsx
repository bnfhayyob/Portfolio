import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";


export default function Home() {
  return (
    <>
      {/* MOBILE: Image at top */}
      <FramerWrapper
        className="h-auto w-full relative flex justify-center items-center lg:hidden py-8"
        y={-100}
        x={0}
      >
        <HeroImage />
      </FramerWrapper>

      {/* LEFT SIDE  */}
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      {/* RIGHT SIDE image - Desktop only */}
      <FramerWrapper
        className="h-full w-[47%] relative hidden lg:block"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </>
  );
}
