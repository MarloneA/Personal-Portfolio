import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";
import { siteMetadata } from "@/utils/siteMetaData";

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-light dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="flex items-center justify-center m-auto w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid dark:border-light">
        <LottieAnimation />
        {/* <div className="w-[66%] h-full rounded-3xl">
          <iframe
            className="w-full h-full rounded-3xl"
            src="https://youtube.com/embed/GQkkHtBD1BM?si=oMjHK_LR8QJ0bDpV?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
            title="YouTube short video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
      </div>
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">
          Let's Connect!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
