import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./components/Loader";
import WebAppDevelopment from "./pages/ServicesPage/WebAppDevelopment";
import GameDevelopment from "./pages/ServicesPage/GameDevelopment";
import ArtificialIntelligence from "./pages/ServicesPage/ArtificialIntelligence";
import BlockChain from "./pages/ServicesPage/BlockChain";
import RPA from "./pages/ServicesPage/RPA";
import ARAndVR from "./pages/ServicesPage/ARAndVR";
// import ServicePageLayout from "./Layout/ServicePageLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Industries = lazy(() => import("./pages/Industries"));
const ServicePageLayout = lazy(() => import("./Layout/ServicePageLayout"));
// const LandingPage = lazy(() => import("./landingpage/LandingPage"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutusPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />, // Main /services page with AppLayout
      },
      {
        path: "/industries",
        element: <Industries />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/services",
    element: <ServicePageLayout />, // Separate layout for /services child routes
    children: [
      {
        path: "web-app-development",
        element: <WebAppDevelopment />,
      },
      {
        path: "game-development",
        element: <GameDevelopment />,
      },
      {
        path: "artificial-intelligence",
        element: <ArtificialIntelligence />,
      },
      {
        path: "blockchain",
        element: <BlockChain />,
      },
      {
        path: "rpa",
        element: <RPA />,
      },
      {
        path: "ar-vr",
        element: <ARAndVR />,
      },
    ],
  },
]);

export default AppRouter;
