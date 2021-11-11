import i18next from "i18next";
import languageDetector, {
  CustomDetector,
} from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { i18nLanguage, languages } from "../consts";

const CommonPT = require("./pt/common.json");
const CommonEN = require("./en/common.json");

const HomePagePT = require("./pt/homePage.json");
const HomePageEN = require("./en/homePage.json");

const OtherPagePT = require("./pt/otherPage.json");
const OtherPageEN = require("./en/otherPage.json");

const NotFoundPagePT = require("./pt/notFoundPage.json");
const NotFoundPageEN = require("./en/notFoundPage.json");

const RoutePT = require("./pt/route.json");
const RouteEN = require("./en/route.json");

const resources = {
  pt: {
    common: CommonPT,
    homePage: HomePagePT,
    otherPage: OtherPagePT,
    notFoundPage: NotFoundPagePT,
    route: RoutePT,
  },
  en: {
    common: CommonEN,
    homePage: HomePageEN,
    otherPage: OtherPageEN,
    notFoundPage: NotFoundPageEN,
    route: RouteEN,
  },
};

const languagePathDetector: CustomDetector = {
  name: "languagePathDetector",
  lookup() {
    const path = window.location.pathname;
    const firstItemPath = path?.split("/")?.[0 || 1];
    const defaultLanguage = window.localStorage.getItem(i18nLanguage) || "";
    return languages.some((language) => language === firstItemPath)
      ? firstItemPath
      : defaultLanguage;
  },
};

const detector = new languageDetector();
detector.addDetector(languagePathDetector);

i18next
  .use(initReactI18next)
  .use(detector)
  .init({
    debug: false,
    ns: ["common", "homePage", "otherPage", "notFoundPage", "route"],
    defaultNS: "common",
    fallbackNS: "common",
    fallbackLng: languages,
    detection: {
      order: ["languagePathDetector"],
      lookupLocalStorage: i18nLanguage,
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export * from "./ns";

export default i18next;
