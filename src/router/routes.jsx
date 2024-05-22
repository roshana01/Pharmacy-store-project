import About from "../pages/About";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import ShowProduct from "../pages/ShowProduct";
import ListCart from "../pages/AddListShop/ListCart";
// import About from "../pages/Team.jsx/About";

const routes = [
  { path: "/", element: <Home />, breadcrumb: "Home" },
  { path: "/about", element: <About />, breadcrumb: "About" },
  { path: "/contact", element: <Contact />, breadcrumb: "Contact Us" },
  { path: "/cart", element: <ListCart />, breadcrumb: "cart" },
  { path: "/product", element: <ShowProduct />, breadcrumb: "product" },
  { path: "*", element: <NotFound />, breadcrumb: "Not Found" },
];

export default routes;
