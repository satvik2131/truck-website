import Link from "next/link";
import { TruckIcon } from "../home/TruckIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CustomButton } from "./CustomButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const src =
    "https://cdn.prod.website-files.com/62e3fc9fe0b5d9617e0c85e0/632dee28f1208cf96c013909_Entrance%20%202023International_%20%20Corporate%20Office.png";

  const navs = ["Home", "Inventory", "About Us", "Contact Us"];

  return (
    <>
      <header className="relative z-10 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <TruckIcon />
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            Lamar&apos;s Truck
          </span>
        </div>
        <nav className="hidden md:flex items-baseline space-x-9 ">
          {navs.map((nav) => {
            return <NavItem nav={nav} />;
          })}

          <Link href="#" prefetch={false}>
            <CustomButton text="Free Book" transparent={false} />
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
        <div className="md:hidden absolute top-16 right-4 bg-slate-600 text-primary-foreground p-4 rounded-md shadow-lg z-20">
          <nav className="flex flex-col space-y-4">
            {navs.map((nav) => {
              return <NavItem nav={nav} />;
            })}
            <Link href="#" prefetch={false}>
              <CustomButton text="Free Book" transparent={false} />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

function NavItem({ nav }: { nav: string }) {
  return (
    <Link
      key={nav}
      href="#home"
      className="text-base text-center leading-normal font-medium text-foreground transition-colors hover:text-secondary-foreground"
      prefetch={false}
    >
      {nav}
    </Link>
  );
}
