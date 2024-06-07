import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import AboutMe from "@/components/Home/about";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
    </>
  );
}
