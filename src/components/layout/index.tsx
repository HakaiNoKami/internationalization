import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { commonNs } from "../../i18n";
import Link from "../link";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">{t(commonNs.home)}</Link>
          </li>
          <li>
            <Link to="/other">{t(commonNs.other)}</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
