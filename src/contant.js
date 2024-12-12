import healthcareImg from "./assets/industries/Healthcare.jpg";
import ecommerceImg from "./assets/industries/E-commerce & Retail.jpg";
import financeImg from "./assets/industries/Finance & Banking.jpg";
import energyImg from "./assets/industries/Energy.jpg";
import realEstateImg from "./assets/industries/Real Estate.jpg";
import manufacturingImg from "./assets/industries/Manufacturing.jpg";
import dataAnalyticsImg from "./assets/industries/Data Analytics & Business Intelligence.jpg";
import iotDevelopmentImg from "./assets/industries/IoT Development.jpg";
import logisticsImg from "./assets/industries/Logistics & Supply Chain.jpg";
import educationImg from "./assets/industries/Education.jpg";
import telecomImg from "./assets/industries/Telecom.jpg";
import webDevIcon from "./assets/images/slider-item-webdev-icon.png";
import appDevIcon from "./assets/images/slider-item-appdev-icon.png";
import aiIcon from "./assets/images/slider-item-ai-icon.png";
import webDevCardImg from "./assets/images/slider-item-webdev.png";
import appDevCardImg from "./assets/images/slider-item-appdev.png";
import aiCardImg from "./assets/images/slider-item-ai.png";
// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

import service1 from "./assets/service1.png";
// import service2 from "./assets/service2.png";
import service3 from "./assets/service3.png";
import service4 from "./assets/service4.png";
import service5 from "./assets/service5.png";
import service6 from "./assets/service6.png";
import service7 from "./assets/service7.png";
export const clientDetails = {
  phone: "+91-8547203254",
  whatsappbox: "8547203254",
  address:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam maxime obcaecati praesentium in",
};

export const navItems = [
  {
    label: "[ LET'S TALK AI ]",
    // path: "",
    extraClasses: "text-white hover:text-blue-400",
  },
  { label: "HOME", path: "/", extraClasses: "hover:text-blue-400" },
  { label: "ABOUT", path: "/about-us", extraClasses: "hover:text-blue-400" },
  { label: "SERVICES", path: "/services", extraClasses: "hover:text-blue-400" },
  // Uncomment the below links if needed
  {
    label: "INDUSTRIES",
    path: "/industries",
    extraClasses: "hover:text-blue-400",
  },
  {
    label: "BLOGS",
    // path: "/industries",
    extraClasses: "hover:text-blue-400",
  },
  // { label: "PORTFOLIO", path: "/portfolio", extraClasses: "hover:text-blue-400" },
  // { label: "RESOURCES", path: "/resources", extraClasses: "hover:text-blue-400" },
  {
    label: "CONTACT US",
    path: "/contact-us",
    extraClasses:
      "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
  },
];

export const allServices = [
  {
    id: 1,
    img: service1,
    title: "Web & App Development",
    description:
      "In order to scale new customer acquisition and retention for commerce brands, we work across platforms to deliver seamless digital experiences.",
    link: "/services/web-app-development",
    smallPara:
      "In today's interconnected world, web and mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. From e-commerce platforms to mobile apps, these digital tools are essential for driving user engagement and meeting business goals.\n\n" +
      "Web application development involves crafting responsive and visually appealing interfaces (front-end) while ensuring robust and scalable server-side functionalities (back-end). Similarly, mobile app development requires platform-specific expertise, creating unique experiences for iOS and Android users while adhering to the technical demands of each platform. Together, web and app development form the backbone of modern digital ecosystems, offering tailored solutions to meet user needs and deliver impactful results.\n\n" +
      "AppGalaxy, a subsidiary of Aithrown, focuses on delivering premium website and app development services. With a commitment to excellence, AppGalaxy ensures that every digital solution is designed to provide seamless user experiences and drive business growth.",
  },

  {
    id: 2,
    img: service3,
    title: "Artificial Intelligence",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/artificial-intelligence",
    smallPara:
      "Artificial Intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force reshaping industries and societies. AI development, the process of creating intelligent systems capable of learning, reasoning, and problem-solving, is driving innovation and revolutionizing the way we live and work.\n\nAt the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks. Deep learning, a more advanced form of machine learning, utilizes artificial neural networks to process complex data and learn from it.",
  },
  {
    id: 3,
    img: service4,
    title: "Blockchain",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/blockchain",
    smallPara:
      "Blockchain technology, a decentralized and distributed ledger system, has emerged as a disruptive force with the potential to transform industries across the globe. Blockchain development involves creating and implementing applications that leverage the unique features of blockchain technology to enhance security, efficiency, and transparency.\n\n At the core of blockchain is a distributed network of nodes that maintain a shared ledger of transactions. Each transaction is recorded as a block and added to the chain, creating an immutable and tamper-proof record. This decentralized nature eliminates the need for intermediaries, such as banks or clearinghouses, fostering trust and reducing the risk of fraud.",
  },
  {
    id: 4,
    img: service5,
    title: "Robotic Process Automation (RPA)",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/rpa",
    smallPara:
      "Robotic Process Automation (RPA) is a technology that uses software robots to automate repetitive, rule-based tasks. These software robots can mimic human actions, interacting with applications and systems to perform tasks that were previously done manually. RPA has emerged as a powerful tool for businesses looking to improve efficiency, reduce costs, and enhance accuracy.\n\n One of the key benefits of RPA is its ability to automate repetitive tasks that are prone to human error. By eliminating manual intervention, RPA can significantly reduce the risk of mistakes and ensure consistency in processes. This can lead to improved quality and compliance, as well as reduced operational costs.",
  },
  {
    id: 5,
    img: service6,
    title: "AR & VR",
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/ar-vr",
    smallPara:
      "Augmented Reality (AR) and Virtual Reality (VR) are immersive technologies that are rapidly transforming the way we interact with the digital world. AR overlays digital information onto the real world, enhancing our perception of reality, while VR creates entirely simulated environments that transport us to different places and experiences.\n\n AR and VR have a wide range of applications across various industries. In gaming, they offer immersive experiences that blur the lines between the real and virtual worlds. In education, they can provide interactive and engaging learning experiences. In healthcare, they are used for training, surgery simulations, and rehabilitation. In architecture and design, they allow for virtual walkthroughs of buildings and spaces before construction.",
  },
  {
    id: 6,
    img: service7,
    title: "Game Development",
    description:
      "Creating immersive and engaging experiences through innovative game development solutions.",
    link: "/services/game-development",
    smallPara:
      "Game Development is an exciting and dynamic field that combines creativity, storytelling, and cutting-edge technology to create interactive experiences. From casual mobile games to expansive multiplayer universes, game development encompasses a wide range of platforms and genres, catering to diverse audiences worldwide.\n\n" +
      "The process of game development involves multiple stages, including concept design, programming, asset creation, and testing. Developers use powerful game engines like Unity and Unreal Engine to build visually stunning and performance-optimized games. With the integration of AI, augmented reality (AR), and virtual reality (VR), modern games are becoming more immersive and adaptive, providing players with unique and personalized experiences. Game development continues to push the boundaries of entertainment, merging technology and artistry to captivate players globally.",
  },
];

export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: healthcareImg,
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: ecommerceImg,
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: financeImg,
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: energyImg,
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: realEstateImg,
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: manufacturingImg,
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: dataAnalyticsImg,
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: iotDevelopmentImg,
    desc: "Connecting devices and systems to enhance automation and operational efficiency.",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: logisticsImg,
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: educationImg,
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11, // Adjusted the duplicate ID
    title: "Telecom",
    img: telecomImg,
    desc: "Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];

export const bestServices = [
  {
    id: 1,
    title: "Web & App Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "AppGalaxy, a subsidiary of Aithrown, specializes in premium website and app development services. We work across platforms to deliver seamless digital experiences that scale new customer acquisition and retention for commerce brands.",
    link: "/services/web-app-development",
  },

  {
    id: 2,
    title: "Artificial Intelligence",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Let AI elevate your business, streamline operations, and open doors to new possibilities.",
    link: "/services/artificial-intelligence",
  },

  {
    id: 3,
    title: "AR & VR",
    icon: webDevIcon,
    img: webDevCardImg,
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/ar-vr",
  },
  {
    id: 4,
    title: "Game Development",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Creating immersive and engaging experiences through innovative game development solutions.",
    link: "/services/game-development",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Rohan Sharma",
    title: "CEO of ShopSmart Pvt Ltd",
    description:
      "Working with [Your Company Name] was a game-changer for our e-commerce business. We needed a mobile app that could handle a large inventory and ensure a seamless shopping experience for our customers. [Your Company Name] not only delivered a user-friendly app for both Android and iOS but also integrated real-time inventory management and personalized recommendations using AI algorithms. Their team was incredibly responsive and flexible, making adjustments based on our feedback at every stage of development.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "As a financial services company, we required a blockchain solution to improve transparency and security for our clients. We approached [Your Company Name] with a complex set of requirements involving smart contracts, secure transaction tracking, and decentralized data storage. Their team impressed us with their in-depth knowledge of blockchain technology and ability to explain complex concepts in simple terms. From initial consultation to the final implementation, [Your Company Name] was professional, efficient, and very detail-oriented.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "We wanted to leverage AI to enhance our retail analytics capabilities, but we had no idea where to start. [Your Company Name] provided a comprehensive solution that included everything from customer behavior analysis to predictive modeling. They created an AI-driven platform that analyzed real-time customer data and provided actionable insights on purchasing trends, inventory optimization, and personalized marketing strategies.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Meera Nair",
    title: "Co-Founder of HealthNet Solutions",
    description:
      "Since implementing their solution, we have seen a significant improvement in data security, with no incidents of breaches or unauthorized access. Our clients and patients feel more confident knowing that their data is protected with cutting-edge technology. [Your Company Name]'s attention to detail and ongoing support has been invaluable, making them our go-to partner for all things cybersecurity.",
  },
  {
    id: 5,
    img: "",
    name: "Anjali Deshmukh",
    title: "Sales Director at Elite Properties Pvt Ltd",
    description:
      "We were looking for innovative ways to enhance our client experience in real estate sales. [Your Company Name] helped us develop an immersive VR platform that allows potential buyers to take virtual tours of our properties from anywhere in the world. The VR environment was meticulously designed, with detailed 3D renderings that gave buyers a realistic feel of our homes.",
  },
  {
    id: 6,
    img: "",
    name: "Ajay Patil",
    title: "CTO of TechServe Solutions",
    description:
      "We needed a completely revamped website that could better reflect our growing enterprise software business. [Your Company Name] came in and completely redesigned our website from the ground up, implementing a responsive, mobile-friendly design with integrated CRM tools and a content management system. The website's new user interface is sleek, modern, and easy to navigate, providing our clients with a better experience.",
  },
  {
    id: 7,
    img: "",
    name: "Sunil Kapoor",
    title: "Operations Manager at SteelTech Manufacturing",
    description:
      "Our manufacturing process was riddled with inefficiencies due to manual data entry and repetitive tasks. [Your Company Name]’s Robotic Process Automation (RPA) solution helped us automate critical processes, from order fulfillment to inventory management. The RPA bots they developed have been instrumental in cutting down human errors, reducing operational costs, and improving productivity.",
  },
];

export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];
