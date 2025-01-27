import GetInTouch from "../Components/GetInTouch";
import LogoSlider from "../Components/LogoSlider";
import ServicesList from "../Components/ServicesList";
import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";
import CompanyAchievements from "../Components/CompanyAchievements";
import WhyChooseUs from "../Components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <HomepageBanner />
      <LogoSlider />
      <ServicesList />
      <CompanyAchievements />
      <IndustriesWeServe />
      <BestServicesSlider />
      <WhyChooseUs />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
