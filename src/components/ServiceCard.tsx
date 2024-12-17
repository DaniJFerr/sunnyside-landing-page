import { ServiceCardProps } from "../types";

export function ServiceCard({
  title,
  description,
  backgroundImage,
  textColor,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow items-center px-20 pt-96 pb-14 text-center min-h-[600px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={backgroundImage}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative mt-72 md:mt-0 flex-col max-w-full w-[322px]">
          <h3
            className={`self-center text-3xl font-black tracking-normal ${textColor}`}
          >
            {title}
          </h3>
          <p className="mt-7 text-base font-semibold tracking-normal leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
