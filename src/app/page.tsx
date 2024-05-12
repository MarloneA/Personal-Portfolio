import Image from "next/image";
import Navigation from "@/components/Header/navigation";
import LandingPage from "@/components/Home/landingPage";
import AboutMe from "@/components/Home/about";
import Work from "@/components/Home/work";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 lg:p-12 max-w-screen-2xl m-auto">
      <div className="w-full">
        <LandingPage />
      </div>

      {/* <div className="mb-24 w-full">
        <AboutMe />
      </div>

      <div className="mb-24 snap-center">
        <h1 className="leading-snug	text-4xl md:text-4xl text-center dark:text-white text-black motion-safe:animate-hero-text-reveal pt-24">
          Work & Latest Content
        </h1>
        <Work />
      </div>

      <h1>Client Testimonials</h1>
      <section>
        <div>
          <h1>Here's what other people think about my work</h1>
          <p></p>
        </div>
        <div></div>
      </section> */}
    </main>
  );
}
