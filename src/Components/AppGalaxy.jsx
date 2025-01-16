import ReactPlayer from "react-player";
import appdev from "../assets/appgalaxy/appdev.mp4";
import webdev from "../assets/appgalaxy/webdev.mp4";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Customized solutions designed around your specific challenges",
    image: appdev,
  },
  {
    title: "Web Development",
    description:
      "Customized solutions designed around your specific challenges",
    image: webdev,
  },
];
// const projects = [
//   {
//     title: "Cafe-App Project",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2011.30.43%E2%80%AFAM-xK1XkBnN8dPBZo2n21mOiL2rHDjsWv.png",
//   },
//   {
//     title: "Food-App Project",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2011.30.43%E2%80%AFAM-xK1XkBnN8dPBZo2n21mOiL2rHDjsWv.png",
//   },
//   {
//     title: "EV-Car Project",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2011.30.43%E2%80%AFAM-xK1XkBnN8dPBZo2n21mOiL2rHDjsWv.png",
//   },
//   {
//     title: "Exercise Project",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2011.30.43%E2%80%AFAM-xK1XkBnN8dPBZo2n21mOiL2rHDjsWv.png",
//   },
//   {
//     title: "Pen-App Project",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2011.30.43%E2%80%AFAM-xK1XkBnN8dPBZo2n21mOiL2rHDjsWv.png",
//   },
//   {
//     title: "Travel Project",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2011.30.43%E2%80%AFAM-xK1XkBnN8dPBZo2n21mOiL2rHDjsWv.png",
//   },
// ];
const AppGalaxy = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-white font-medium ">AppGalaxy</h1>
      <div>
        <div className="grid md:grid-cols-2 gap-6  px-4 py-[5rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-xl"
            >
              <ReactPlayer
                url={service.image}
                loop={true}
                playsinline
                playing={true}
                width="100%"
                height="50vh"
                muted
                className=" object-cover overflow-hidden !max-h-[60vh]"
                config={{
                  file: {
                    attributes: {
                      style: {
                        objectFit: "cover",
                        // width: "100vw",
                        height: "50vh !important",
                      },
                    },
                  },
                }}
              />
              <div className="p-6 !bg-common ">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-6 h-6 text-secondary">
                    &lt;/&gt;
                  </span>
                  <h3 className="text-primary text-xl font-bold uppercase ">
                    {service.title}
                  </h3>
                </div>
                <p className="text-secondary text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              OUR PROJECTS
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Leverage our mobile app expertise to create a powerful digital
              presence and increase customer retention
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((obj, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={obj.image || "/placeholder.svg"}
                    alt={obj.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold text-center uppercase">
                      {obj.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                Website Portfolio
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                App Portfolio
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default AppGalaxy;
