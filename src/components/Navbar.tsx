import { useState, useEffect } from "react";
import { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "contact", href: "#contact"},
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() =>{
    const handleCloseMenu = () => {
      if(isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleCloseMenu);
    window.addEventListener('resize', handleCloseMenu);

    return () => {
      window.addEventListener('scroll', handleCloseMenu);
      window.addEventListener('resize', handleCloseMenu);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex relative gap-5 justify-between self-stretch w-full text-lg font-semibold tracking-normal leading-none max-md:max-w-full">
      <a href="/" className="flex justify-center" aria-label="Home">
        <img
          loading="lazy"
          src="/images/logo.svg"
          alt="Sunnyside Agency Logo"
          className=" object-contain shrink-0 max-w-full aspect-[5.15] w-[170px]"
        />
      </a>

      <div 
          className={`md:hidden tham tham-e-squeeze tham-w-6 ${isOpen ? 'tham-active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="tham-box">
            <div className="tham-inner" />
          </div>
        </div>


      <div
        className={`flex gap-1 md:gap-4 items-center z-10 transition-all duration-300 ease-in-out transform
          max-md:absolute max-md:flex-col max-md:top-[80px] max-md:right-0 max-md:bg-white 
          max-md:p-8 max-md:rounded-lg max-md:shadow-lg max-md:w-[90%] max-md:mx-4
          ${isOpen 
            ? 'max-md:transform-scale-0.5 transform-origin-top max-md:opacity-100 max-md:visible'
            : 'max-md:transform-scale-1 transform-origin-top max-md:opacity-0 max-md:invisible'
          }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={` md:overflow-hidden md:self-stretch my-auto ${
              activeItem === item.label
                ? "px-8 py-4 text-base font-bold tracking-normal leading-loose uppercase whitespace-nowrap bg-amber-300 md:bg-white rounded-3xl text-slate-800 max-md:px-5"
                : "px-8 py-4 tracking-normal leading-loose rounded-3xl hover:bg-sky-300 max-md:px-2"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
