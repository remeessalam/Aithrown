import whychooseus from "../assets/images/whychooseus.jpg";
import { whyChooseUs } from "../contant";
const WhyChooseUs = () => {
  return (
    <div
      className="relative mt-1 sm:mt-16 py-[4rem] -z-20 w-[100vw] bg-cover bg-top bg-no-repeat text-white"
      style={{ backgroundImage: `url(${whychooseus})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/50 lg:bg-black/50" />

      {/* <div className="absolute top-0 w-full h-full bg-primary/30"></div> */}
      <div className=" grid  grid-cols-3 z-20  wrapper items-center">
        <div className="w-full col-span-3 sm:col-span-2 sm:w-[100%]">
          {/* <RoundedHeading text={" Why Choose Us"} /> */}
          <h2
            data-aos="fade-up"
            className="text-smhead text-white sm:text-start text-center leading-tight"
          >
            Why Choose Us
          </h2>
          <div>
            <h2
              data-aos="fade-up"
              className="text-sechead mt-4  sm:text-start text-center leading-tight"
            >
              The Power Behind Our IT Solutions
            </h2>
            <p
              data-aos="fade-up"
              className="text-desc text-white max-w-[40rem]  sm:text-start text-center"
            >
              We begin by evaluating your needs to gain a clear understanding of
              your goals, challenges, and requirements.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid items-center gap-5 mt-9">
              <div className="flex flex-col gap-5 h-full">
                {whyChooseUs.map((obj) => (
                  <div
                    key={obj.id}
                    data-aos="fade-right"
                    className=" w-full h-full"
                  >
                    <div className="flex w-full text-start items-center  gap-3">
                      <div className="min-w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
                        <img
                          src={obj.icon}
                          className="h-[3rem] object-contain grayscale"
                          alt=""
                        />
                      </div>
                      <h5 className="text-head text-white">{obj.heading}</h5>
                    </div>
                    <p className=" !text-white text-desc  text-start mt-3 ">
                      {obj.description}
                    </p>
                  </div>
                ))}
                {/* <div
                  data-aos="fade-right"
                  className="p-5 border border-primary rounded-xl w-full h-full"
                >
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-7xl">{whyChooseUs[1].heading}</h5>
                    <img
                      src={target}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-black text-start mt-3">
                    {whyChooseUs[1].description}
                  </p>
                </div> */}
              </div>
              {/* <div data-aos="fade-up" className="w-full lg:block hidden">
              <img
                src={whychooseusimg}
                className="object-contain max-h-[25rem] mx-auto"
                alt="why choose us"
              />
            </div> */}
              {/* <div className="flex flex-col gap-5 h-full">
                <div
                  data-aos="fade-left"
                  className="p-5 border  border-primary rounded-xl w-full h-full"
                >
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-7xl">{whyChooseUs[2].heading}</h5>
                    <img
                      src={expert}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-black text-start mt-3">
                    {whyChooseUs[2].description}
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className="p-5 border  border-primary  rounded-xl w-full h-full"
                >
                  <div className="flex w-full text-start items-center justify-between gap-3">
                    <h5 className="text-7xl">{whyChooseUs[3].heading}</h5>
                    <img
                      src={cogwheel}
                      className="h-[3rem] object-contain mb-3"
                      alt=""
                    />
                  </div>
                  <p className="desc text-black text-start mt-3">
                    {whyChooseUs[3].description}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
