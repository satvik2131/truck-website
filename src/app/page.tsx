import Image from "next/image";
import Intro from "./Components/Intro";
import Inventory from "./Components/Inventory";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutUs />
      <Inventory />
      <ContactUs />
      <Footer />
    </main>
  );
}
