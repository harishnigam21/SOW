/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LogIn from "./Component/LogIn.jsx";
import Home from "./Home.jsx";
import PriceList from "./Component/PriceList.jsx";
import DirectThem from "./Component/DirectThem.jsx";
import Terms from "./Component/Terms.jsx";
import Loader from "./common component/Loader.jsx";
const RootProvider = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [switchLanguage, setSwitchLanguage] = useState("english");
  const [containLoading, setContainLoading] = useState(true);
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
  const containUrl = `${import.meta.env.VITE_BACKEND_HOST}/get_contain`;
  const getContain = async () => {
    const response = await fetch(containUrl, {
      method: "GET",
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.message);
    }
    window.sessionStorage.setItem("contain", JSON.stringify(data.data));
    setMainContain(data.data);
    setContainLoading(false);
  };

  // const [mainContain, setMainContain] = useState(getContain); //direct Update

  const [mainContain, setMainContain] = useState(
    window.sessionStorage.getItem("contain")
      ? () => {
          setContainLoading(false);
          return JSON.parse(window.sessionStorage.getItem("contain"));
        }
      : getContain()
  );

  const router = containLoading
    ? createBrowserRouter([
        {
          path: "/*",
          element: <Loader />,
          errorElement: Loader,
        },
      ])
    : createBrowserRouter([
        {
          path: "/",
          element: (
            <App
              Contain={mainContain}
              screen={screen}
              switchLanguage={switchLanguage}
              setSwitchLanguage={setSwitchLanguage}
            />
          ),
          children: [
            {
              path: "",
              element: (
                <LogIn Contain={mainContain} switchLanguage={switchLanguage} />
              ),
            },
            {
              path: "login",
              element: (
                <LogIn Contain={mainContain} switchLanguage={switchLanguage} />
              ),
            },
            {
              path: "terms",
              element: (
                <Terms
                  Contain={mainContain}
                  switchLanguage={switchLanguage}
                  screen={screen}
                />
              ),
            },
          ],
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

createRoot(document.getElementById("root")).render(<RootProvider />);
