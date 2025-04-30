import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CategorySection from "@/components/HomeSection/CategorySection";
import FeaturedSection from "@/components/HomeSection/FeaturedSection";
import LifeStyleSection from "@/components/HomeSection/LifeStyleSection";
import MultiCategory from "@/components/HomeSection/MultiCategory";
import TechSection from "@/components/HomeSection/TechSection";
import { HOST } from "@/utils/static";
import axios from "axios";


export default async function  Home() {
  
  const travel = await axios.get(`${HOST}post/fetch-all-post-by-category/${"Travel"}`);
  const travel_data = travel.data.response;

  const fashion = await   axios.get(`${HOST}post/fetch-all-post-by-category/${"Fashion"}`);
  const fashion_data = fashion.data.response;

  const category = await   axios.get(`${HOST}category/fetch-all-category`);
  const category_data = category.data.response;

  const healthy = await   axios.get(`${HOST}post/fetch-all-post-by-category/${"Healthy"}`);
  const healthy_data = healthy.data.response;

  const sales = await   axios.get(`${HOST}post/fetch-all-post-by-category/${"Sales"}`);
  const sales_data = sales.data.response;

  const business = await   axios.get(`${HOST}post/fetch-all-post-by-category/${"Business"}`);
  const business_data = business.data.response;

  
  const technology = await   axios.get(`${HOST}post/fetch-all-post-by-category/${"Tech"}`);
  const technology_data = technology.data.response;


  return (
    <div className="home page-template page-template-page-fullwidth page-template-page-fullwidth-php page page-id-13 penci-disable-desc-collapse soledad-ver-8-6-3 pclight-mode pcmn-drdw-style-slide_down pchds-default elementor-default elementor-kit-7 elementor-page elementor-page-13 e--ua-blink e--ua-chrome e--ua-webkit penci-ready-js">
      <div id="soledad_wrapper" class="wrapper-boxed header-style-header-10 penci-hlogo-center header-search-style-default" style={{ transform: "none" }}>
      <Header />
      <FeaturedSection data={travel_data}/> 

        <LifeStyleSection data={fashion_data}  />
        <CategorySection data={category_data? category_data : []} />
        <MultiCategory dataHealthy={healthy_data} dataBusiness={business_data}datasales={sales_data}/>
        <TechSection data={technology_data}/>
      <Footer />
      </div>
    </div>
  );
}
