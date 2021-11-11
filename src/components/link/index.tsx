import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  Link as LinkRouter,
  LinkProps as LinkRouterProps,
} from "react-router-dom";

type LinkProps = LinkRouterProps & { children: ReactNode };

const Link = ({ children, to, ...props }: LinkProps) => {
  const { language } = useTranslation().i18n;

  return (
    <LinkRouter to={`${language}${to}`} lang={language} {...props}>
      {children}
    </LinkRouter>
  );
};

export default Link;
