import React from "react";
import { CounterProvider } from "./Context/AppContext";
import routes from "./router/routes.jsx";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const route = useRoutes(routes);

  return (
    <>
      <CounterProvider>
        <Header />
        {route}
        <Footer />
      </CounterProvider>
    </>
  );
}
