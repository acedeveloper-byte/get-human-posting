import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CategorySection from "@/components/HomeSection/CategorySection";
import FeaturedSection from "@/components/HomeSection/FeaturedSection";
import LifeStyleSection from "@/components/HomeSection/LifeStyleSection";
import MultiCategory from "@/components/HomeSection/MultiCategory";
import TechSection from "@/components/HomeSection/TechSection";
import { HOST } from "@/utils/static";
import axios from "axios";

const getData = async () => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-category/travel`, {
    cache: "no-store", // ya revalidate: 60 if you want ISR
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};


const getDataCat = async () => {
  const res = await fetch(`${HOST}category/fetch-all-category`, {
    cache: "no-store", // ya revalidate: 60 if you want ISR
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};


export default async  function   Home() {
  const  travedata  = await getData()
  const  categorydata  = await getDataCat()
  console.log(categorydata)
  return (
    <div className="home page-template page-template-page-fullwidth page-template-page-fullwidth-php page page-id-13 penci-disable-desc-collapse soledad-ver-8-6-3 pclight-mode pcmn-drdw-style-slide_down pchds-default elementor-default elementor-kit-7 elementor-page elementor-page-13 e--ua-blink e--ua-chrome e--ua-webkit penci-ready-js">
      <div id="soledad_wrapper" class="wrapper-boxed header-style-header-10 penci-hlogo-center header-search-style-default" style={{ transform: "none" }}>
      <Header />
      <FeaturedSection travdata={travedata.response} /> 

        <LifeStyleSection   />
        <CategorySection catdata={categorydata.response}  />
        <MultiCategory />
        <TechSection />
      <Footer />
      </div>
    </div>
  );
}
