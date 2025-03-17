import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import TopSection from "@/components/BannerSection/TopSection";
import StylingSection from "@/components/HomeSection/LifeStyleSection";
import LatestStyle from "@/components/HomeSection/LatestStyle";
import FeaturedSection from "@/components/HomeSection/FeaturedSection";
import TechSection from "@/components/HomeSection/TechSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="home page-template page-template-page-fullwidth page-template-page-fullwidth-php page page-id-13 penci-disable-desc-collapse soledad-ver-8-6-3 pclight-mode pcmn-drdw-style-slide_down pchds-default elementor-default elementor-kit-7 elementor-page elementor-page-13 e--ua-blink e--ua-chrome e--ua-webkit penci-ready-js">
      <div id="soledad_wrapper" class="wrapper-boxed header-style-header-10 penci-hlogo-center header-search-style-default" style={{ transform: "none" }}>
        <Header />
        {/* <TopSection /> */}
        <FeaturedSection />
        <StylingSection />
        <LatestStyle />
        <TechSection />
        <Footer />
      </div>
    </div>
  );
}
