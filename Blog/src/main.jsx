import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tags from "./pages/Tags.jsx";
import Authors from "./pages/Authors.jsx";
import MonthArchive from "./pages/MonthArchive.jsx";
import YearArchive from "./pages/YearArchive.jsx";
import Contact from "./pages/Contact.jsx";
import SingleBlogPage from "./pages/BanarasiSaree.jsx";
import WoodenToys from "./pages/WoodenToys.jsx";
import Tribaljewellery from "./pages/TribalJewellery.jsx";
import Pottery from "./pages/Pottery.jsx";
import IndianSpices from "./pages/IndianSpices.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/tags",
    element: <App element={<Tags />} />,
  },
  {
    path: "/authors",
    element: <App element={<Authors />} />,
  },
  {
    path: "/monthly-archive",
    element: <App element={<MonthArchive />} />,
  },
  {
    path: "/yearly-archive",
    element: <App element={<YearArchive />} />,
  },
  {
    path: "/contact",
    element: <App element={<Contact />} />,
  },
  {
    path: "/banarasi-saree",
    element: <App element={<SingleBlogPage />} />,
  },
  {
    path: "/wooden-toys",
    element: <App element={<WoodenToys />} />,

  },
  {
    path: "/tribal-jewelry",
    element: <App element={<Tribaljewellery />} />,

  },
  {
    path: "/indian-pottery",
    element: <App element={<Pottery />} />,

  },
  {
    path: "/indian-spices",
    element: <App element={<IndianSpices />} />,

  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
