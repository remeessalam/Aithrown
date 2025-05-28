import { useState } from "react";
import ReactPlayer from "react-player";
import appdev from "../assets/appgalaxy/appdev.mp4";
import webdev from "../assets/appgalaxy/webdev.mp4";

import webvideoone from "../assets/video/workvideos/web-1.mp4";
import webvideotwo from "../assets/video/workvideos/web-2.mp4";
import webvideothree from "../assets/video/workvideos/web-3.mp4";

import appvideoone from "../assets/video/workvideos/app-1.mp4";
import appvideotwo from "../assets/video/workvideos/app-2.mp4";
import appvideothree from "../assets/video/workvideos/app-3.mp4";

//eslint-disable-next-line
const Project = ({ paddingTop, src }) => (
  <div
    style={{ position: "relative" }}
    className="border min-h-[30rem] py-10 px-4 flex justify-center "
  >
    <ReactPlayer
      url={src}
      playing
      loop
      muted
      playsinline
      width="100%"
      height="100%"
      config={{
        file: {
          attributes: {
            style: { objectFit: "cover", width: "100%", height: "100%" },
          },
        },
      }}
    />
  </div>
);

const webProjects = [
  {
    paddingTop: "80.25%",
    src: webvideoone,
  },
  {
    paddingTop: "80.25%",
    src: webvideotwo,
  },
  {
    paddingTop: "80.77777777777777%",
    src: webvideothree,
  },
];

const appProjects = [
  {
    paddingTop: "75%",
    src: appvideoone,
  },
  {
    paddingTop: "75%",
    src: appvideotwo,
  },
  {
    paddingTop: "100%",
    src: appvideothree,
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
