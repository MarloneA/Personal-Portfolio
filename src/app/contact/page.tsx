import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";
import { siteMetadata } from "@/utils/siteMetaData";
import Image from "next/image";

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center border-b-2 border-light dark:border-light border-solid w-full h-auto text-dark dark:text-light">
      <div className="flex justify-center items-center m-auto w-full sm:w-4/5 md:w-2/5 h-full p-12">
        <h2 className="font-bold text-2xl sm:text-4xl xs:text-3xl capitalize">
            Hi there, Let's Connect!
        </h2>
        <LottieAnimation />
        {/* <div className="rounded-3xl w-full p-4 lg:w-[66%] h-full"> */}
        {/* <iframe
            className="rounded-3xl w-full h-full"
            src="https://youtube.com/embed/GQkkHtBD1BM?si=oMjHK_LR8QJ0bDpV?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
            title="YouTube short video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        {/* <Image
          src="/images/headshot.png"
          alt="profile_pic"
          className="rounded-3xl w-[75%] p-4 h-full object-cover"
          width={1920}
          height={1080}
        /> */}
        {/* </div> */}
      </div>
      <div className="flex flex-col justify-center items-start px-5 md:px-16 xs:px-10 pb-8 w-full md:w-3/5 md:border-l-2 dark:border-light border-solid">
        {/* <h2 className="font-bold text-2xl sm:text-4xl xs:text-3xl capitalize">
          Let's Connect!
        </h2> */}
        <ContactForm />
      </div>
    </section>
  );
}
