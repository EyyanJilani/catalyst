import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/Header";
import HomeBanner from "@/components/HomeBanner";
import ClientsSlider from "@/components/ClientsSlider";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <HomeBanner />
        <Services />
        <Achievements />
        <ClientsSlider />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
