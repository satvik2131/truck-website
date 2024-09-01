"use client";

import { Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "../Components/Header";
import { HeroSectionCover } from "../Components/HeroSectionCover";
import { CustomButton } from "../Components/CustomButton";

const cursive = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

const plus_jakarta = Plus_Jakarta_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen p-4 sm:p-6 md:p-8 lg:px-40 bg-background text-foreground dark:bg-background dark:text-foreground flex flex-col justify-end pb-16"
    >
      <Header />
      <HeroSectionCover />

      <main className="relative space-y-6 sm:space-y-10 z-10 flex flex-col items-start justify-center flex-1 mt-6 sm:mt-12 md:mt-16 text-left px-4 sm:px-6 md:px-8">
        <h1
          className={`${plus_jakarta.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight`}
        >
          Not just another trucking
          <br className="hidden sm:block" />
          company
        </h1>
        <span
          className={`${cursive.className} mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-foreground`}
          style={{ textShadow: "2px 2px 0px #4CAF50" }}
        >
          -we're family
        </span>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl">
          At Lamar's Truck Sales, we specialize in offering high-quality,
          reliable used trucks that fit your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <CustomButton transparent={false} text="Drive With Us" />
          <CustomButton transparent={true} text="Load Tracking" />
        </div>
      </main>
    </div>
  );
}
