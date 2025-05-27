import { useState } from "react";
import ReactPlayer from "react-player";
import appdev from "../assets/appgalaxy/appdev.mp4";
import webdev from "../assets/appgalaxy/webdev.mp4";

//eslint-disable-next-line
const Project = ({ paddingTop, src }) => (
  <div
    style={{ position: "relative" }}
    className="border min-h-[30rem] py-10 px-4 flex justify-center "
  >
    <iframe
      src={src}
      loading="lazy"
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen
    />
  </div>
);

const webProjects = [
  {
    paddingTop: "80.25%",
    src: "https://iframe.mediadelivery.net/embed/57031/25f52287-3df5-4179-a3b3-298e0eca01b3?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "80.25%",
    src: "https://iframe.mediadelivery.net/embed/57031/f0a4b4a2-0c27-411b-8cbb-f8869dd1edea?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "80.77777777777777%",
    src: "https://iframe.mediadelivery.net/embed/57031/e2635682-adc8-4049-a852-b51195901a2f?autoplay=true&loop=true&muted=true",
  },
  {
    paddingTop: "80.77777777777777%",
    src: "https://iframe.mediadelivery.net/embed/57031/e90c1293-925e-4ba5-92a1-d0e875194910?autoplay=true&loop=true&muted=true",
  },
  {
    paddingTop: "80.4055944055944%",
    src: "https://iframe.mediadelivery.net/embed/57031/9618e237-56b3-40a3-8818-283f3c2eca96?autoplay=true&loop=true&muted=true",
  },
  {
    paddingTop: "85%",
    src: "https://iframe.mediadelivery.net/embed/57031/3be1bf5c-102b-4672-bc10-8ab08c4a35f4?autoplay=true&loop=true&muted=true",
  },
];

const appProjects = [
  {
    paddingTop: "75%",
    src: "https://iframe.mediadelivery.net/embed/57031/a41b871a-1511-43d7-bbc9-a4f0f7aa5541?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "75%",
    src: "https://iframe.mediadelivery.net/embed/57031/7dab5eda-1e63-4327-bb3e-37e19cabc276?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "100%",
    src: "https://iframe.mediadelivery.net/embed/57031/948bd771-3e43-4448-85b2-25f2e631dd9b?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "131.11111111111111%",
    src: "https://iframe.mediadelivery.net/embed/57031/a499b475-5f4e-44a6-832d-83200f805427?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "80.77777777777777%",
    src: "https://iframe.mediadelivery.net/embed/57031/609178c6-daad-431c-987b-3cc3d7075cfc?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "80.7709497206704%",
    src: "https://iframe.mediadelivery.net/embed/57031/6993048e-fe00-4120-bddd-e534e9392fe7?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "80.77777777777777%",
    src: "https://iframe.mediadelivery.net/embed/57031/b7e3ec23-5c2d-4361-a1ad-178b5f302f05?autoplay=true&loop=true&muted=true",
  },
  {
    paddingTop: "80.25%",
    src: "https://iframe.mediadelivery.net/embed/57031/2ba77c3e-48b8-4828-b8db-e90089be8de1?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
  {
    paddingTop: "79.25%",
    src: "https://iframe.mediadelivery.net/embed/57031/8f5f7212-a2bf-4c6e-a27b-cffee58499ab?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  },
];

const services = [
  {
    title: "Mobile App Development",
    description:
      "Customized solutions designed around your specific challenges",
    image: appdev,
    type: "app",
  },
  {
    title: "Web Development",
    description:
      "Customized solutions designed around your specific challenges",
    image: webdev,
    type: "web",
  },
];

const AppGalaxy = () => {
  // Initialize with "app" to show app projects by default
  const [selectedService, setSelectedService] = useState("app");

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-8">
        {/* <h1 className="text-5xl text-white font-medium">AppGalaxy</h1> */}
        {/* {selectedService && (
          <button
            onClick={() => setSelectedService(null)}
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Back to AppGalaxy
          </button>
        )} */}
      </div>
      {/* {!selectedService ? ( */}
      <div className="grid md:grid-cols-2 gap-6 py-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-xl cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedService(service.type)}
          >
            <ReactPlayer
              url={service.image}
              loop
              playsinline
              playing
              width="100%"
              height="50vh"
              muted
              className="object-cover overflow-hidden !max-h-[60vh]"
              config={{
                file: {
                  attributes: {
                    style: { objectFit: "cover", height: "50vh !important" },
                  },
                },
              }}
            />
            <div className="p-6 bg-common">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-6 h-6 text-secondary">
                  &lt;/&gt;
                </span>
                <h3 className="text-primary text-xl font-bold uppercase">
                  {service.title}
                </h3>
              </div>
              <p className="text-secondary text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <h1 className="heading text-white text-center py-3">
            {" "}
            {selectedService === "web" ? "Web Project" : "App Project"}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {selectedService === "web"
            ? webProjects.map((project, index) => (
                <Project key={`web-${index}`} {...project} />
              ))
            : appProjects.map((project, index) => (
                <Project key={`app-${index}`} {...project} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default AppGalaxy;
