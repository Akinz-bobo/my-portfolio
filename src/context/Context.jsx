import { RiReactjsLine } from "react-icons/ri";
import { DiSass, DiMongodb } from "react-icons/di";
import { BiCodeBlock, } from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaWix, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#F55050");
  const [currentMode, setCurrentMode] = useState("dark");
  const [currentLang, setCurrentLang] = useState("en");
  const { t, i18n } = useTranslation();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("ThemeMode", e.target.value);
    setSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setSettings(false);
  };
  const setLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
    localStorage.setItem("currentLang", e.target.value);
    setSettings(false);
  };

  //todo Data

  const navItems = [
    {
      name: t("navItem1"),
      href: "home",
    },
    {
      name: t("navItem2"),
      href: "about",
    },
    {
      name: t("navItem3"),
      href: "service",
    },
    {
      name: t("navItem4"),
      href: "portfolio",
    },
    {
      name: t("navItem5"),
      href: "contact",
    },
  ];
  const themeColors = [
    {
      name: "blue-theme",
      color: "#1A97F5",
    },
    {
      name: "green-theme",
      color: "#03C9D7",
    },
    {
      name: "purple-theme",
      color: "#7352FF",
    },
    {
      name: "red-theme",
      color: "#F55050",
    },
    {
      name: "indigo-theme",
      color: "#3F72AF",
    },
    {
      color: "#F55302",
      name: "orange-theme",
    },
  ];
  const aboutData = [
    {
      skill: t("aboutSkills1"),
      description: t("aboutSkills1Description1"),
      icon: <BiCodeBlock />,
      technologies: {
        one: "HTML5",
        two: "CSS3",
        three: "Javascript",
        four: "ReactJs",
        five: "NextJs",
        six: "Git & Github",
        seven: "Chakra and Material Ui",
        eight: "Tailwindcss",
      }
    },
    {
      skill: t("aboutSkills2"),
      description: t("aboutSkills1Description2"),
      icon: <BiCodeBlock />,
      technologies: {
        one: "Node Js",
        two: "Express",
        three: "MongoDb",
        four: "MYSQL",
        five: "FireBase",
        six: "Strapi CMS",
        seven: "Typescript",
      }
    },
    {
      skill: t("aboutSkills3"),
      description: t("aboutSkills1Description3"),
      icon: <FaWix />,
      technologies: {
        one: "Adding advance functionalities",
        two: "Building functional websites from scratch",
        three: "API integration",
        four: "Payment Integration",
        five: "SEO optimization",
      }
    },
  ];
  const serviceData = [
    {
      skill: t("html"),
      description: t("htmlDescription"),
      icon: <AiOutlineHtml5 />,
    },
    {
      skill: t("css"),
      description: t("cssDescription"),
      icon: <FaCss3 />,
    },
    {
      skill: t("js"),
      description: t("jsDescription"),
      icon: <IoLogoJavascript />,
    },
    {
      skill: t("react"),
      description: t("reactDescription"),
      icon: <RiReactjsLine />,
    },
    {
      skill: t("sass"),
      description: t("sassDescription"),
      icon: <DiSass />,
    },
    {
      skill: t("tailwind"),
      description: t("tailwindDescription"),
      icon: <SiTailwindcss />,
    },
    {
      skill: t("bootstrap"),
      description: t("bootstrapDescription"),
      icon: <SiBootstrap />,
    },
    {
      skill: t("nodejs"),
      description: t("nodejsDescription"),
      icon: <FaNodeJs />,
    },
    {
      skill: t("mongodb"),
      description: t("mongodbDescription"),
      icon: <DiMongodb />,
    },
    {
      skill: t("express"),
      description: t("expressDescription"),
      icon: <SiExpress />,
    },
  ];
  const portfolioTitle = [
    {
      name: t("all"),
      activetab: [true, false, false, false,],
    },
    {
      name: t("app"),
      activetab: [false, true, false, false,],
    },
    {
      name: t("templates"),
      activetab: [false, false, true, false,],
    },
    {
      name: t("games"),
      activetab: [false, false, false, true,],
    },
  ];
  const portfolioData = [
    {
      all: [
        {
          title: t("reactjs"),
          projectName: t("projectName0"),
          pic: "bg-DigitalRepair",
          githubLink: "https://github.com/Akinz-bobo/repair-digital-factory",
          viewOnline: "https://repairsystemmanagement.vercel.app/",
        },
        {
          title: t("app"),
          projectName: t("projectName1"),
          pic: "bg-dashboard",
          githubLink: "https://github.com/Akinz-bobo/dashboard-app",
          viewOnline: "https://akinz-bobo.github.io/dashboard-app/",
        },
        {
          title: t("app"),
          projectName: t("projectName2"),
          pic: "bg-weatherforecast",
          githubLink: "https://github.com/Akinz-bobo/weather-forecast-app",
          viewOnline: "https://akinz-bobo.github.io/weather_forecast/",
        },
        {
          title: t("app"),
          projectName: t("projectName3"),
          pic: "bg-musicPlayer",
          githubLink: "https://github.com/Akinz-bobo/Music-Player-App",
          viewOnline: "https://akinz-bobo.github.io/Music-Player-App/",
        },
        {
          title: t("app"),
          projectName: t("projectName4"),
          pic: "bg-alannews",
          githubLink: "https://github.com/Akinz-bobo/news-website",
          viewOnline: "https://mehdi0-0keramati.github.io/AlanNews",
        },
        {
          title: t("app"),
          projectName: t("projectName5"),
          pic: "bg-cryptocurrency",
          githubLink: "https://github.com/Akinz-bobo/crypto-market-place",
          viewOnline: "https://akinz-bobo.github.io/crypto-currency/",
        },

        {
          title: t("reactjs"),
          projectName: t("projectName6"),
          pic: "bg-legends_landingpage",
          githubLink: "https://github.com/Akinz-bobo/legends-landing-page-clone",
          viewOnline: "https://akinz-bobo.github.io/legends-landingpage/",
        },
        {
          title: t("reactjs"),
          projectName: t("projectName7"),
          pic: "bg-GPT3",
          githubLink: "https://github.com/Akinz-bobo/GPT-3-App",
          viewOnline: "https://akinz-bobo.github.io/GPT-3/",
        },
        {
          title: t("vanillajs"),
          projectName: t("projectName13"),
          pic: "bg-eCommerceTemplate",
          githubLink:
            "https://github.com/Akinz-bobo/E-Commerce-Website",
          viewOnline:
            "https://akinz-bobo.github.io/E-Commerce-Website/",
        },

        {
          title: t("games"),
          projectName: t("projectName18"),
          pic: "bg-quizapp",
          githubLink: "https://github.com/Akinz-bobo/my-quiz-app",
          viewOnline: "https://akinz-bobo.github.io/QuizApp/",
        },
      ],

      app: [
        {
          title: t("app"),
          projectName: t("projectName1"),
          pic: "bg-dashboard",
          githubLink: "https://github.com/Akinz-bobo/dashboard-app",
          viewOnline: "https://akinz-bobo.github.io/dashboard-app/",
        },
        {
          title: t("app"),
          projectName: t("projectName2"),
          pic: "bg-weatherforecast",
          githubLink: "https://github.com/Akinz-bobo/weather-forecast-app",
          viewOnline: "https://akinz-bobo.github.io/weather_forecast/",
        },
        {
          title: t("app"),
          projectName: t("projectName3"),
          pic: "bg-musicPlayer",
          githubLink: "https://github.com/Akinz-bobo/Music-Player-App",
          viewOnline: "https://akinz-bobo.github.io/Music-Player-App/",
        },
        {
          title: t("app"),
          projectName: t("projectName4"),
          pic: "bg-alannews",
          githubLink: "https://github.com/Akinz-bobo/news-website",
          viewOnline: "https://mehdi0-0keramati.github.io/AlanNews",
        },
        {
          title: t("app"),
          projectName: t("projectName5"),
          pic: "bg-cryptocurrency",
          githubLink: "https://github.com/Akinz-bobo/crypto-market-place",
          viewOnline: "https://akinz-bobo.github.io/crypto-currency/",
        },
      ],

      templates: [
        {
          react: [
            {
              title: t("reactjs"),
              projectName: t("projectName0"),
              pic: "bg-DigitalRepair",
              githubLink: "https://github.com/Akinz-bobo/repair-digital-factory",
              viewOnline: "https://repairsystemmanagement.vercel.app/",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName6"),
              pic: "bg-legends_landingpage",
              githubLink: "https://github.com/Akinz-bobo/legends-landing-page-clone",
              viewOnline: " https://akinz-bobo.github.io/legends-landingpage/",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName7"),
              pic: "bg-GPT3",
              githubLink: "https://github.com/Akinz-bobo/GPT-3-App",
              viewOnline: "https://akinz-bobo.github.io/GPT-3/",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName10"),
              pic: "bg-littleProject",
              githubLink:
                "https://github.com/Akinz-bobo/little-project-react",
              viewOnline: "https://littleproject-reactjs.netlify.app",
            },
          ],
          vanillaJS: [
            {
              title: t("vanillajs"),
              projectName: t("projectName13"),
              pic: "bg-eCommerceTemplate",
              githubLink:
                "https://github.com/Akinz-bobo/E-Commerce-Website",
              viewOnline:
                "https://akinz-bobo.github.io/E-Commerce-Website/",
            },
          ],
        },
      ],

      games: [
        {
          title: t("games"),
          projectName: t("projectName18"),
          pic: "bg-quizapp",
          githubLink: "https://github.com/Akinz-bobo/my-quiz-app",
          viewOnline: "https://akinz-bobo.github.io/QuizApp/",
        },
      ],
    },
  ];

  //todo Data

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        settings,
        setSettings,
        currentMode,
        setCurrentMode,
        currentColor,
        setCurrentColor,
        currentLang,
        setCurrentLang,
        t,
        i18n,
        setMode,
        setColor,
        setLang,
        navItems,
        themeColors,
        aboutData,
        serviceData,
        portfolioTitle,
        portfolioData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
