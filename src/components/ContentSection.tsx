import { ContentSectionProps } from "../types";

export function ContentSection({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: ContentSectionProps) {
  return (
    <div className="w-full max-md:max-w-full">
      <div
        className={`flex ${
          isReversed ? "flex-row-reverse" : ""
        } max-md:flex-col`}
      >
        <div className="flex object-cover flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col md:items-start items-center md:self-stretch p-12 lg:p-36 my-auto font-black text-slate-800 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl tracking-tight">{title}</h2>
            <p className=" self-center md:self-stretch mt-8 text-lg font-semibold tracking-normal leading-8 text-slate-500 max-md:max-w-full">
              {description}
            </p>
            <button className="mt-10 text-base tracking-wider leading-loose uppercase max-md:ml-2.5 text-slate-800 hover:text-yellow-500 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out grow w-full aspect-[1.2] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
