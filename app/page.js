import AboutUs from "@/components/AboutUs";
import Principal from "@/components/Principal";
import Navbar from "../components/Navbar";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Principal />
      <Services />
      <AboutUs />
      <Reviews />
      <Footer />
    </div>
  );
}
