import Header from "../components/Header";
import HomeBanner from "@/components/HomeBanner";
import ClientsSlider from "@/components/ClientsSlider";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// import "../styles/globals.css";



export default function Home() {
  return (
    
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
    
  );
}
