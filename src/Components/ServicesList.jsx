import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { allServices } from "../contant";
import { Link as ScrollLink, Element, scroller } from "react-scroll";

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const { pathname } = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (!isFirstRender) {
      scroller.scrollTo(`service-${selectedService.id}`, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100, // Adjust for padding or header
      });
    } else {
      setIsFirstRender(false); // Mark that the first render has occurred
    }
  }, [selectedService]);
  const navigate = useNavigate();
  // Set active service
  const handleServiceSelect = (item) => {
    navigate(item.link);
    setSelectedService(item);
  };

  return (
    <section className="wrapper py-[2rem]">
      <h1 className="heading text-center mb-8 text-white">
        Explore Our Offering
      </h1>
      <div className="grid md:grid-cols-[38%_58%] gap-10 p-5 bg-primary rounded-lg">
        <div className="w-full flex flex-col gap-10">
          <div
            data-aos="fade-up"
            className="bg-[#ECF8FF] p-4 lg:p-6 rounded-lg"
          >
            <h4 className="text-2xl font-medium">Our Services</h4>
            <div className="mt-5 flex flex-wrap md:flex-col gap-3">
              {allServices.map((item) => (
                <button
                  key={item.title}
                  className={`${
                    item.id === selectedService.id
                      ? "primary-btn text-white"
                      : "bg-white text-[#17012C]"
                  } flex items-center gap-2 justify-center rounded-full text-center px-5 py-3 transition-all duration-300 hover:-translate-y-1`}
                  onClick={() => handleServiceSelect(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* name={`service-${selectedService.id}`} */}
          <Element>
            <div className="py-[2rem] text-common">
              <h4 data-aos="fade-up" className="text-3xl font-medium">
                {selectedService.title}
              </h4>
              <p
                data-aos="fade-up"
                className="mt-4 description whitespace-pre-line"
              >
                {selectedService.smallPara}
              </p>
              <Link
                data-aos="fade-up"
                to={selectedService.link}
                className="secondary-btn w-fit mt-6"
              >
                Read More
              </Link>
            </div>
          </Element>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
