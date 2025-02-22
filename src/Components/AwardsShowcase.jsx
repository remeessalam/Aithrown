import image from "../assets/awards/award.jpg";
import image1 from "../assets/awards/award1.jpg";
import image2 from "../assets/awards/award2.jpg";
// import image3 from "../assets/awards/award3.jpg";
import image4 from "../assets/awards/award4.jpg";

const AwardsShowcase = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Awards & Recognition
        </h2>

        {/* Description */}
        <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
          Our commitment to excellence has earned us recognition from industry
          leaders. Explore our prestigious accolades that showcase our journey
          in transforming the IT landscape through innovation and client-centric
          solutions.
        </p>

        {/* Awards Section */}
        <div className="space-y-12">
          {/* Horizontal Image Award (Special Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  p-8 rounded-2xl shadow-lg">
            {/* Image takes 2 columns on desktop */}
            <div className="lg:col-span-2">
              <img
                src={image}
                alt="Innovation Award"
                className="w-full max-h-[80vh] object-cover rounded-xl shadow-md"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-3xl font-bold text-white">
                2025 Global Innovation Leader
              </h3>
              <p className="text-white text-lg">
                Honored for revolutionizing enterprise solutions with:
              </p>
              <ul className="list-disc pl-6 space-y-2  text-white">
                <li>AI-powered automation platforms</li>
                <li>Blockchain security integrations</li>
                <li>Cloud-native architecture designs</li>
              </ul>
              <div className="mt-4">
                <span className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  Technology Excellence Category
                </span>
              </div>
            </div>
          </div>

          {/* Alternate Layout Awards */}

          {/* Award 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
            <div className="order-1 md:order-2 relative overflow-hidden rounded-xl">
              <img
                src={image1}
                alt="IT Excellence Award"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
            <div className="order-2 md:order-1 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                IT Excellence Champion
              </h3>
              <p className="text-white leading-relaxed">
                Recognized for delivering cutting-edge solutions to 150+
                enterprises, achieving 98% client satisfaction through:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
                  <p className="text-black font-semibold">250+ Projects</p>
                  <p className="text-sm text-gray-600">
                    Completed successfully
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
                  <p className="text-black font-semibold">25+ Countries</p>
                  <p className="text-sm text-gray-600">Global client reach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Award 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={image2}
                alt="AI Solutions Award"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                AI Innovation Pioneer
              </h3>
              <p className="text-white leading-relaxed">
                Awarded for developing industry-leading AI solutions that helped
                clients achieve:
              </p>
              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2 ">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>45% average efficiency gain</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>$2.8B+ client revenue growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>30 patents filed</span>
                </div>
              </div>
              {/* <button className="self-start mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-blue-800 transition-colors">
                View Case Studies →
              </button> */}
            </div>
          </div>

          {/* Award 3 - Vertical Image Layout */}
          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <img
                  src={image4}
                  alt="Cloud Excellence Award"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="p-8 lg:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Cloud Solutions Excellence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-lg font-semibold mb-2">
                      Key Achievements
                    </p>
                    <ul className="space-y-2 text-black">
                      <li>✔️ 99.99% Uptime Guarantee</li>
                      <li>✔️ 200+ Cloud Migrations</li>
                      <li>✔️ ISO 27001 Certified</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">Client Impact</p>
                    <ul className="space-y-2 text-black">
                      <li>🚀 60% Faster Deployment</li>
                      <li>💰 40% Cost Reduction</li>
                      <li>🔒 Enterprise-grade Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsShowcase;
