export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface TestimonialProps {
  image: string;
  quote: string;
  name: string;
  role: string;
}

export interface ImageGridItemProps {
  src: string;
  alt: string;
}

export interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  textColor: string;
}
