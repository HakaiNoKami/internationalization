import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import { languages } from "./consts";
import { Home, NotFound, Other } from "./pages";

const App = () => {
  const routes: RouteObject[] = [
    { index: true, element: <Home /> },
    { path: "other", element: <Other /> },
  ];

  const allLanguageRoutes: RouteObject[] = languages.map((language) => ({
    path: language,
    children: routes,
  }));

  const translatedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...routes,
        ...allLanguageRoutes,
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  return useRoutes(translatedRoutes);
};

export default App;
