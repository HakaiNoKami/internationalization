import { useTranslation } from "react-i18next";
import { notFoundNs, ns } from "../../i18n";

export const NotFound = () => {
  const { t } = useTranslation(ns.notFound);

  return <h1>{t(notFoundNs.title)}</h1>;
};
