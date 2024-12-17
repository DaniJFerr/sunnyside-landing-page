import { TestimonialProps } from "../types";

export function TestimonialCard({
  image,
  quote,
  name,
  role,
}: TestimonialProps) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-lg font-semibold tracking-normal leading-8 text-center text-gray-600 max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          alt={`${name}'s profile`}
          className="object-contain self-center rounded-full aspect-square w-[72px]"
        />
        <p className="mt-14 max-md:mt-10">{quote}</p>
        <h4 className="self-center mt-8 text-lg font-black tracking-normal text-slate-800">
          {name}
        </h4>
        <p className="mt-2.5 text-sm font-semibold tracking-normal leading-6 text-zinc-400">
          {role}
        </p>
      </div>
    </div>
  );
}
