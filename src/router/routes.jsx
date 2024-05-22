// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";
// import ShowProduct from "../pages/ShowProduct";
// import ListCart from "../pages/AddListShop/ListCart";

import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const ListCart = lazy(() => import("../pages/AddListShop/ListCart"));
const ShowProduct = lazy(() => import("../pages/ShowProduct"));
const NotFound = lazy(() => import("../pages/NotFound"));

const routes = [
  { path: "/", element: <Home />, breadcrumb: "Home" },
  { path: "/about", element: <About />, breadcrumb: "About" },
  { path: "/contact", element: <Contact />, breadcrumb: "Contact Us" },
  { path: "/cart", element: <ListCart />, breadcrumb: "cart" },
  { path: "/product", element: <ShowProduct />, breadcrumb: "product" },
  { path: "*", element: <NotFound />, breadcrumb: "Not Found" },
];

export default routes;
