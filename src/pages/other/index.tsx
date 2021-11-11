import { useTranslation } from "react-i18next";
import { ns, otherNs } from "../../i18n";

export const Other = () => {
  const { t } = useTranslation(ns.other);

  return <h1>{t(otherNs.title)}</h1>;
};
