import { MessageToastProvider } from "@value-experience-design/libella";
import { LinkWithQuery } from "@abdc/messer";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Spacing } from "@value-experience-design/ui-toolkit-theming";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router";
import { Routes } from "./routing/Routes";
import { AnimatePresence } from "motion/react";
import "./App.css";
import { Avatar } from "./pages/Avatar/Avatar";
import { KnowledgeQuiz } from "./pages/KnowledgeQuiz";
import { SocialCard } from "./pages/SocialCard/SocialCard";
import { Login } from "./pages/Login/Login";
import { Map } from "./pages/Map";
import { useParams } from "react-router";

function App() {
  return (
    <MessageToastProvider>
      <Helmet>
        <title>SAP NOW | Companion App </title>
      </Helmet>
      <BrowserRouter>
        <AnimatePresence>
          <AppRoutes />
        </AnimatePresence>
      </BrowserRouter>
    </MessageToastProvider>
  );
}

const Home = () => {
  const { userid } = useParams<{ userid: string }>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: Spacing.Large,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinkWithQuery to={`/${Routes.Avatar}/${userid}`}>Avatar</LinkWithQuery>
      <LinkWithQuery to={`/${Routes.Quiz}/${userid}`}>Quiz</LinkWithQuery>
      <LinkWithQuery to={`/${Routes.SocialCard}/${userid}`}>SocialCard</LinkWithQuery>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route
        index={true}
        path="/:userid"
        element={<Home/>}
      />
      <Route path={`${Routes.Login}`} element={<Login />} />
      <Route path={`${Routes.Map}/:userid`} element={<Map />} />
      <Route path={`${Routes.Avatar}/:userid`} element={<Avatar />} />
      <Route path={`${Routes.Quiz}/:userid`} element={<KnowledgeQuiz />} />
      <Route path={`${Routes.SocialCard}/:userid`} element={<SocialCard />} />
    </RouterRoutes>
  );
};

export default App;
