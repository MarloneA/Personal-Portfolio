import LandingPage from "@/components/Home/landingPage";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "mailto:marlone.akidiva@gmail.com", Icon: IconBrandGmail },
  { href: "https://github.com/MarloneA", Icon: IconBrandGithub },
  { href: "https://www.youtube.com/@marlonethedev", Icon: IconBrandYoutube },
  {
    href: "https://www.linkedin.com/in/marlone-akidiva/",
    Icon: IconBrandLinkedin,
  },
];

const Divider = () => (
  <div className="border-t border-black dark:border-white w-full"></div>
);

const ContactMessage = () => (
  <h2 className="mt-8 font-semibold text-base sm:text-lg md:text-2xl dark:font-normal dark:text-light text-center md:text-left">
    Have a project in mind? Get in touch{" "}
    <Link href="/contact" className="underline underline-offset-2">
      here 📞
    </Link>
    , and let's make it happen.
  </h2>
);

const SocialLinks = () => (
  <ul className="flex flex-wrap justify-center md:justify-between my-8 gap-4 md:gap-0 w-full md:w-48">
    {SOCIAL_LINKS.map(({ href, Icon }) => (
      <li key={href}>
        <a href={href} className="flex items-center justify-center">
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 sm:p-8 lg:p-12 max-w-screen-2xl max-h-screen">
      <LandingPage />
      <footer className="flex flex-col items-center w-full">
        <Divider />
        <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start gap-8">
          <ContactMessage />
          <SocialLinks />
        </div>
      </footer>
    </main>
  );
}
