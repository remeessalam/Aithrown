import img1 from "../../assets/services-details/web-development1.jpeg";
import img2 from "../../assets/services-details/app-development1.jpeg";
import { Link } from "react-router-dom";

const WebAppDevelopment = () => {
  return (
    <div className="flex flex-col gap-10 text-white">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web and app development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Web & App Development
        </h2>
        {/* <h3 data-aos="fade-up" className="text-xl font-medium mt-2">
          AppGalaxy - A Subsidiary of Aithrown
        </h3> */}
        <Link
          to="https://www.instagram.com/aithrown_official?igsh=MW45Y2RxbGg4bGZlYQ=="
          // to="https://www.appgalaxy.ai"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          className="inline-block bg-blue-500 w-fit text-white text-lg font-medium py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-all"
        >
          Visit Aithrown Instagram
        </Link>
        <p data-aos="fade-up" className="description">
          In today&apos;s digital era, both web and mobile applications play a
          critical role in shaping how we interact, communicate, and conduct
          business. These platforms enable businesses to reach broader
          audiences, provide seamless user experiences, and drive significant
          engagement. Developing robust web and mobile applications requires
          creativity, technical expertise, and a user-first approach to ensure
          maximum impact.
          <br />
          <br />
          Web and app development share similarities yet demand distinct
          considerations. Websites offer universal accessibility via web
          browsers, while apps cater to specific platforms, such as iOS and
          Android, often requiring separate versions. Regardless of the
          platform, performance, design, and functionality remain at the core of
          development.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          We specialize in crafting high-quality websites and applications
          tailored to your unique needs. Whether it&apos;s a customer-facing
          website, a mobile app for your users, or an enterprise-level solution,
          we ensure exceptional performance and seamless experiences.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="web and app development"
        />
        <p data-aos="fade-up" className="description">
          For web development, our focus is on building dynamic, responsive, and
          visually captivating websites that reflect your brand identity while
          ensuring optimal performance. From intuitive front-end designs to
          robust back-end infrastructures, we create websites that function
          flawlessly and drive results.
          <br />
          <br />
          For app development, we emphasize platform-specific optimization,
          ensuring your applications perform seamlessly on iOS and Android
          devices. By addressing platform-specific challenges like touch-based
          navigation, connectivity issues, and power consumption, we deliver
          apps that enhance user satisfaction and engagement.
          <br />
          <br />
          Both web and app development processes involve meticulous planning,
          including ideation, design, development, testing, and deployment. We
          focus on delivering solutions that captivate users, streamline
          workflows, and maximize efficiency, ensuring your business thrives in
          an increasingly competitive market.
        </p>
      </div>
      {/* <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isWeb ? "Web Development Portfolio" : "App Development Portfolio"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedPortfolios.map((id, index) => (
            <div
              key={index}
              className="relative w-full pt-[80%] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={`https://iframe.mediadelivery.net/embed/57031/${id}?autoplay=true&loop=true&muted=true&preload=true&responsive=true`}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-none"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default WebAppDevelopment;
