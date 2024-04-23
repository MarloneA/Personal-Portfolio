import Image from "next/image";
import Navigation from "./components/navigation";
import LandingPage from "./components/landingPage";
import AboutMe from "./components/about";
import Work from "./components/work";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 max-w-screen-2xl m-auto snap-y snap-mandatory overflow-y-scroll">
      <div className="w-full">
        <Navigation />
        <LandingPage />
      </div>

      <div className="mb-24 w-full">
        <AboutMe />
      </div>

      <div className="mb-24 snap-center">
        <h1 className="leading-snug	text-4xl md:text-4xl text-center dark:text-white text-black motion-safe:animate-hero-text-reveal pt-24">
          Work & Latest Content
        </h1>
        <Work />
      </div>

      {/* <h1>Client Testimonials</h1>
      <section>
        <div>
          <h1>Here's what other people think about my work</h1>
          <p></p>
        </div>
        <div></div>
      </section> */}

      <Footer />
      <div className="text-left pt-24">All rights reserved c Marlone Akidiva 2024</div>
    </main>
  );
}
