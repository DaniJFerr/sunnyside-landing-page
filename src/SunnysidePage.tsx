import { Navbar } from "./components/Navbar";
import { ContentSection } from "./components/ContentSection";
import { ServiceCard } from "./components/ServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { ImageGrid } from "./components/ImageGrid";

const testimonials = [
  {
    image:
      "/images/image-emily.jpg",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    role: "Marketing Director",
  },
  {
    image:
      "/images/image-thomas.jpg",
    quote:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    role: "Chief Operating Officer",
  },
  {
    image:
      "/images/image-jennie.jpg",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    role: "Business Owner",
  },
];

export function SunnysidePage() {
  return (
    <div className="flex overflow-hidden flex-col bg-stone-50">
      <header className="flex overflow-hidden relative flex-col items-center px-10 pt-9 pb-80 w-full text-gray-500 md:text-white min-h-[800px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="/images/desktop/image-header.jpg"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <Navbar />
        <h1 className="relative mt-28 z-0 text-6xl font-black text-center text-white uppercase tracking-[8.75px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          We are creatives
        </h1>
        <img
          loading="lazy"
          src="/images/icon-arrow-down.svg"
          alt="Decorative arrow"
          className="object-contain animate-bounce relative mt-24 mb-0 aspect-[0.28] w-[30px] max-md:mt-10 max-md:mb-2.5"
        />
      </header>

      <main>
        <ContentSection
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          imageSrc="/images/desktop/image-transform.jpg"
          imageAlt="Brand transformation illustration"
        />

        <ContentSection
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          imageSrc="/images/desktop/image-stand-out.jpg"
          imageAlt="Stand out illustration"
          isReversed
        />

        <div className="w-full max-md:max-w-full">
          <div className="flex max-md:flex-col">
            <ServiceCard
              title="Graphic Design"
              description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
              backgroundImage="/images/desktop/image-graphic-design.jpg"
              textColor="text-teal-900"
            />
            <ServiceCard
              title="Photography"
              description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
              backgroundImage="/images/desktop/image-photography.jpg"
              textColor="text-cyan-950"
            />
          </div>
        </div>

        <section className="mt-40 max-md:mt-10">
          <h2 className="text-xl font-black text-center text-zinc-400 tracking-[5px]">
            CLIENT TESTIMONIALS
          </h2>
          <div className="flex gap-5 mt-20 max-md:flex-col max-md:mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        <section className="mt-40 w-full max-md:mt-10 max-md:max-w-full">
          <ImageGrid />
        </section>
      </main>

      <footer className="flex flex-col justify-center items-center px-20 py-20 w-full bg-green-300 text-slate-500 max-md:px-5 max-md:max-w-full">
        <nav className="flex flex-col items-center text-lg font-semibold tracking-normal leading-none">
          <img
            loading="lazy"
            src="/images/logo-footer.svg"
            alt="Sunnyside Agency Logo"
            className="object-contain aspect-[5.15] w-[170px]"
          />
          <div className="flex gap-10 mt-10">
            <a className=" hover:text-white" href="#about">About</a>
            <a className=" hover:text-white" href="#services">Services</a>
            <a className=" hover:text-white" href="#projects">Projects</a>
          </div>
          <div className="flex justify-items-center object-contain gap-6 mt-24 max-md:mt-10">
            <a  className=" max-w-full " href="#facebook"><img className="aspect-[8.2]  hover:brightness-0 hover:invert transition-all" alt="Social media links" loading="lazy" src="/images/icon-facebook.svg" /></a>
            <a  className=" max-w-full " href="#facebook"><img className="aspect-[8.2]  hover:brightness-0 hover:invert transition-all" alt="Social media links" loading="lazy" src="/images/icon-instagram.svg" /></a>
            <a  className=" max-w-full " href="#facebook"><img className="aspect-[8.2]  hover:brightness-0 hover:invert transition-all" alt="Social media links" loading="lazy" src="/images/icon-pinterest.svg" /></a>
            <a  className=" max-w-full " href="#facebook"><img className="aspect-[8.2]  hover:brightness-0 hover:invert transition-all" alt="Social media links" loading="lazy" src="/images/icon-twitter.svg" /></a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
