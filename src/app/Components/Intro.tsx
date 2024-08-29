"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const cursive = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen p-4 sm:p-6 md:p-8 lg:px-40 bg-background text-foreground dark:bg-background dark:text-foreground flex flex-col justify-end pb-16">
      <img
        alt="Truck background"
        src="https://cdn.prod.website-files.com/62e3fc9fe0b5d9617e0c85e0/632dee28f1208cf96c013909_Entrance%20%202023International_%20%20Corporate%20Office.png"
        className="absolute inset-0 object-cover w-full h-full "
        width={1413}
        height={768}
        style={{ aspectRatio: "1413/768", objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-80 to-transparent"></div>

      <header className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center space-x-2">
          <TruckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary dark:text-primary-foreground" />
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            Carroll Fulmer
          </span>
        </div>
        <nav className="hidden md:flex items-baseline space-x-6">
          <Link
            href="#"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            About Us
          </Link>
          <Link href="#" prefetch={false}>
            <Button
              variant="default"
              className="px-4 py-3 sm:px-6 sm:py-4 text-base  sm:text-lg font-semibold transition-colors"
            >
              Free Book
            </Button>
          </Link>
        </nav>
        <button
          className="md:hidden text-primary-foreground dark:text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-primary-foreground dark:bg-primary-foreground text-primary-foreground dark:text-primary-foreground p-4 rounded-md shadow-lg z-20">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="text-lg font-medium text-primary-foreground  hover:underline"
              prefetch={false}
            >
              Home
            </Link>

            <Link
              href="#"
              className="text-lg font-medium text-primary-foreground dark:text-primary-foreground transition-colors hover:underline"
              prefetch={false}
            >
              About Us
            </Link>
            <Button
              variant="default"
              className="px-4 py-3 text-base font-semibold transition-colors"
            >
              Drive With Us
            </Button>
          </nav>
        </div>
      )}
      <main className="relative space-y-10 z-10 flex flex-col items-start justify-center flex-1 mt-8 sm:mt-12 md:mt-16 text-left px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Not just another <br className="hidden sm:block" /> trucking company
        </h1>
        <span
          className={` ${cursive.className} mt-2 sm:mt-4 text-foreground text-3xl sm:text-4xl md:text-6xl lg:text-7xl italic `}
          style={{ textShadow: "2px 2px 0px #4CAF50" }}
        >
          -we &#x27;re family
        </span>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          We offer coast-to-coast coverage, extensive trucking experience and
          fast, secure shipping.
        </p>
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            variant="default"
            className="w-full sm:w-auto py-3 text-base sm:text-lg font-bold"
          >
            Drive With Us
          </Button>
          <Button
            variant="outline"
            className="text-primary border-primary bg-transparent w-full sm:w-auto py-3 text-base sm:text-lg font-bold"
          >
            Load Tracking
          </Button>
        </div>
      </main>
    </div>
  );
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
