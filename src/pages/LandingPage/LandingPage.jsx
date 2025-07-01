import React from "react";
import GetInTouch from "../../Components/GetInTouch";
import logo from "../../assets/logo/logo.png";
import landingpagebanner from "../../assets/landingpagebanner.jpg";
import landingpagebannervertical from "../../assets/landingpagebannervertical.jpg";
const LandingPage = () => {
  // Updated color palette to match Tailwind config
  const colors = {
    primary: "#0458F6", // Blue
    secondary: "#000000", // Black
    common: "#ffffff", // White
    light: "#f1f5f9", // Light background
    text: "#334155", // Text color
  };

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Smooth scroll function that accounts for fixed header
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const solutions = [
    {
      title: "Smart Diagnostics",
      desc: "AI-assisted imaging and anomaly detection",
      icon: "🔍",
    },
    {
      title: "Virtual Health & Telemedicine",
      desc: "Secure platforms for online consultations",
      icon: "🩺",
    },
    {
      title: "Predictive Patient Monitoring",
      desc: "Wearable & IoT data for early intervention",
      icon: "📊",
    },
    {
      title: "Workflow Automation",
      desc: "Reduce paperwork & manual bottlenecks",
      icon: "⚡",
    },
    {
      title: "Data & Analytics Dashboards",
      desc: "Track health KPIs and resource utilization",
      icon: "📈",
    },
  ];

  const benefits = [
    "Cut diagnosis turnaround time by up to 35%",
    "Boost patient follow-up rates and satisfaction",
    "Reduce no-shows with automated alerts and reminders",
    "Increase clinician productivity with AI-powered tools",
    "Comply with HIPAA and healthcare data standards",
  ];

  const clients = [
    "Hospitals & Clinics",
    "Diagnostic Centers",
    "Telehealth Providers",
    "HealthTech Startups",
    "Home & Elderly Care Services",
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Global styles */}
      <style jsx global>{`
        body {
          padding-top: 80px; /* Add padding for fixed header */
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; /* Account for fixed header */
        }
      `}</style>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-delay-100 {
          animation-delay: 0.1s;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-delay-300 {
          animation-delay: 0.3s;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
        }

        .mobile-menu-enter {
          animation: slideIn 0.3s forwards;
        }

        .mobile-menu-exit {
          animation: slideOut 0.3s forwards;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Add padding to sections to account for fixed header */
        .section-padding {
          scroll-margin-top: 80px;
        }
      `}</style>

      {/* Header */}
      <header
        className="py-4 px-6 fixed top-0 left-0 right-0 z-50 shadow-md"
        style={{ backgroundColor: colors.secondary, color: colors.common }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center animate-fade-in">
            <img src={logo} alt="logo" className="h-[3rem] sm:h-[4rem]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => smoothScrollTo("solutions")}
              className="transition-colors duration-300 animate-fade-in animate-delay-100 hover:opacity-80 cursor-pointer bg-transparent border-none"
              style={{ color: colors.common }}
            >
              Solutions
            </button>
            <button
              onClick={() => smoothScrollTo("benefits")}
              className="transition-colors duration-300 animate-fade-in animate-delay-200 hover:opacity-80 cursor-pointer bg-transparent border-none"
              style={{ color: colors.common }}
            >
              Benefits
            </button>
            <button
              onClick={() => smoothScrollTo("who-we-help")}
              className="transition-colors duration-300 animate-fade-in animate-delay-300 hover:opacity-80 cursor-pointer bg-transparent border-none"
              style={{ color: colors.common }}
            >
              Who We Help
            </button>
            <button
              onClick={() => smoothScrollTo("how-it-works")}
              className="transition-colors duration-300 animate-fade-in animate-delay-400 hover:opacity-80 cursor-pointer bg-transparent border-none"
              style={{ color: colors.common }}
            >
              How It Works
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          {/* Desktop CTA Button */}
          <button
            onClick={() => smoothScrollTo("contact")}
            className="hidden md:block px-4 py-2 rounded-md transition-colors duration-300 shadow-lg animate-fade-in"
            style={{ backgroundColor: colors.primary, color: colors.common }}
          >
            Schedule a Free Consultation
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-6 mobile-menu-enter"
            style={{
              backgroundColor: colors.common,
            }}
          >
            <div className="flex justify-end mb-8">
              <button
                className="text-2xl"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: colors.text }}
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => {
                  smoothScrollTo("solutions");
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                Solutions
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("benefits");
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                Benefits
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("who-we-help");
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                Who We Help
              </button>
              <button
                onClick={() => {
                  smoothScrollTo("how-it-works");
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                How It Works
              </button>
            </nav>

            <button
              className="w-full mt-8 px-4 py-3 rounded-md transition-colors"
              style={{ backgroundColor: colors.primary, color: colors.common }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        className="relative flex justify-center items-center  pb-24 px-6 overflow-hidden sm:pt-0 pt-20 h-screen bg-current bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${landingpagebanner})`,

          //   background: `linear-gradient(to right, ${colors.secondary}, #1a1a1a)`,
        }}
      >
        <div
          className="absolute inset-0 sm:hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${landingpagebannervertical})`,
          }}
        />
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-8 w-full h-full">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="border border-white rounded-lg"></div>
            ))}
          </div>
        </div>
        <div className=" absolute bg-black/40 inset-0  w-full h-full" />
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
              style={{ color: colors.common }}
            >
              AI Solutions for Smarter, Safer Healthcare
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              We help hospitals, clinics, and healthtech companies automate,
              analyze, and transform care delivery using next-generation AI and
              digital solutions.
            </p>
            <button
              onClick={() => smoothScrollTo("contact")}
              className="px-8 py-4 rounded-md transition-colors duration-300 text-xl font-medium shadow-xl animate-float"
              style={{ backgroundColor: colors.primary, color: colors.common }}
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="py-20 px-6 section-padding"
        style={{ backgroundColor: colors.light }}
      >
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <div
              className="inline-block mb-6 p-3 rounded-full"
              style={{ backgroundColor: `${colors.primary}1A` }}
            >
              <div
                className="text-white w-14 h-14 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.primary }}
              >
                💡
              </div>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: colors.secondary }}
            >
              Revolutionizing Healthcare Through Technology
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: colors.text }}
            >
              At Aithrown, we believe in combining human compassion with
              artificial intelligence. Our mission is to simplify healthcare
              processes, support doctors, and improve outcomes through trusted,
              scalable digital tools built for modern healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="py-20 px-6 section-padding"
        style={{ backgroundColor: colors.common }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.secondary }}
            >
              AI-Driven Healthcare Solutions
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-lg card-hover animate-fade-in animate-delay-${
                  (index % 3) * 100
                }`}
                style={{ backgroundColor: colors.common }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: colors.primary }}
                >
                  {solution.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.secondary }}
                >
                  {solution.title}
                </h3>
                <p style={{ color: colors.text }}>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className="py-20 px-6 section-padding"
        style={{ backgroundColor: colors.light }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.secondary }}
            >
              Designed for Real-World Impact
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <ul className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className="p-2 rounded-full mr-4"
                      style={{ backgroundColor: `${colors.primary}1A` }}
                    >
                      <div
                        className="text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: colors.primary }}
                      >
                        ✓
                      </div>
                    </div>
                    <span className="text-lg" style={{ color: colors.text }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in animate-delay-200">
              <ul className="space-y-4">
                {benefits.slice(3).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className="p-2 rounded-full mr-4"
                      style={{ backgroundColor: `${colors.primary}1A` }}
                    >
                      <div
                        className="text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: colors.primary }}
                      >
                        ✓
                      </div>
                    </div>
                    <span className="text-lg" style={{ color: colors.text }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section
        id="who-we-help"
        className="py-20 px-6 section-padding"
        style={{ backgroundColor: colors.common }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.secondary }}
            >
              Solutions for Every Healthcare Provider
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full shadow-md animate-fade-in animate-delay-${
                  (index % 5) * 100
                }`}
                style={{
                  backgroundColor: colors.primary,
                  color: colors.common,
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success */}
      <section
        id="client-success"
        className="py-20 px-6 section-padding"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, #0a46e4)`,
        }}
      >
        <div className="container mx-auto text-center max-w-3xl">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 p-3 rounded-full bg-white bg-opacity-20">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl bg-white"
                style={{ color: colors.primary }}
              >
                ❝
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <blockquote className="text-xl text-white italic mb-6">
              &quot;Aithrown helped us automate routine checkups and follow-ups,
              saving over 300 hours of staff time in 3 months.&quot;
            </blockquote>
            <cite className="block text-white font-semibold text-lg">
              — Dr. Renu M., Operations Lead, Phoenix Care Center
            </cite>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-6 section-padding"
        style={{ backgroundColor: colors.light }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.secondary }}
            >
              Your AI Journey with Aithrown
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "1. Consultation",
                desc: "Understand your goals, systems, and challenges.",
                icon: "🗣️",
              },
              {
                title: "2. Custom Strategy",
                desc: "Select or tailor-fit a healthcare module.",
                icon: "📋",
              },
              {
                title: "3. Pilot Implementation",
                desc: "Go live in 4-6 weeks.",
                icon: "🚀",
              },
              {
                title: "4. Scale & Support",
                desc: "Full rollout with analytics and updates.",
                icon: "📈",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center card-hover animate-fade-in animate-delay-200"
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: colors.primary }}
                >
                  {step.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.secondary }}
                >
                  {step.title}
                </h3>
                <p style={{ color: colors.text }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="pt-20 px-6"
        style={{ backgroundColor: colors.secondary }}
      >
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Build a Smarter Healthcare System Together
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Ready to explore how AI can streamline your healthcare delivery?
              We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>
      <div id="contact">
        <GetInTouch />
      </div>
      {/* Footer */}
      <footer
        className="py-10 px-6"
        style={{ backgroundColor: colors.secondary, color: colors.common }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold flex items-center animate-fade-in">
                <img src={logo} alt="logo" className="h-[3rem] sm:h-[4rem]" />
              </div>
              <p className="mt-2 text-gray-400">AI for Healthcare Excellence</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                style={{ color: colors.common }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                style={{ color: colors.common }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="transition-colors hover:opacity-80"
                style={{ color: colors.common }}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Aithrown. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
