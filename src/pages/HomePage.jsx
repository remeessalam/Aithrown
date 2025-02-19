import GetInTouch from "../Components/GetInTouch";
import LogoSlider from "../Components/LogoSlider";
import ServicesList from "../Components/ServicesList";
import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";
import CompanyAchievements from "../Components/CompanyAchievements";
import WhyChooseUs from "../Components/WhyChooseUs";
import AwardsShowcase from "../Components/AwardsShowcase";

const HomePage = () => {
  return (
    <div>
      <HomepageBanner />
      <LogoSlider />
      <ServicesList />
      <CompanyAchievements />
      <IndustriesWeServe />
      <BestServicesSlider />
      <AwardsShowcase />
      <WhyChooseUs />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
