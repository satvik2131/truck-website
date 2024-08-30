"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import { TruckIcon } from "./TruckIcon";
import Image from "next/image";

const cursive = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Intro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const src =
    "https://cdn.prod.website-files.com/62e3fc9fe0b5d9617e0c85e0/632dee28f1208cf96c013909_Entrance%20%202023International_%20%20Corporate%20Office.png";

  return (
    <div
      id="home"
      className="relative w-full min-h-screen p-4 sm:p-6 md:p-8 lg:px-40 bg-background text-foreground dark:bg-background dark:text-foreground flex flex-col justify-end pb-16"
    >
      <Image
        alt="Truck background"
        loader={() => src}
        src={src}
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
            href="#home"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#aboutus"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#inventory"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            Inventory
          </Link>
          <Link
            href="#contactus"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            prefetch={false}
          >
            Contact Us
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
