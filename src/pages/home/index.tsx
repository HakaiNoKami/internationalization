import HTMLParse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { commonNs, homeNs, ns } from "../../i18n";
import logo from "../../logo.svg";
import "./style.css";

export const Home = () => {
  const { t } = useTranslation(ns.home);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>{HTMLParse(t(homeNs.title))}</p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(commonNs.knowMore)}
        </a>
      </header>
    </div>
  );
};
