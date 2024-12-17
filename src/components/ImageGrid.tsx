import { ImageGridItemProps } from "../types";

const images: ImageGridItemProps[] = [
  {
    src: "/images/desktop/image-gallery-milkbottles.jpg",
    alt: "Gallery image 1",
  },
  {
    src: "/images/desktop/image-gallery-orange.jpg",
    alt: "Gallery image 2",
  },
  {
    src: "/images/desktop/image-gallery-cone.jpg",
    alt: "Gallery image 3",
  },
  {
    src: "/images/desktop/image-gallery-sugarcubes.jpg",
    alt: "Gallery image 4",
  },
];

export function ImageGrid() {
  return (
    <div className="flex max-md:flex-col">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
        >
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="grow w-full aspect-[0.81]"
          />
        </div>
      ))}
    </div>
  );
}
