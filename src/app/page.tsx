import Image from "next/image";
import Intro from "./home/Intro";
import InventoryCarousel from "./home/InventoryCarousel";
import AboutUs from "./home/AboutUs";
import ContactUs from "./home/ContactUs";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Intro />
      <AboutUs />
      <InventoryCarousel />
      <ContactUs />
      <Footer />
    </main>
  );
}
