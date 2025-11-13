import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import PriceList from "./Component/PriceList.jsx";
import DirectThem from "./Component/DirectThem.jsx";
const RootProvider = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleReSize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App screen={screen} />,
    },
    {
      path: "/home",
      element: <Home screen={screen} />,
      children: [
        { path: "", element: <DirectThem /> },
        { path: "price_list", element: <PriceList screen={screen} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>
);
