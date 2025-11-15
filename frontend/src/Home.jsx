/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menulist } from "./assets/menulist";
import { Outlet } from "react-router-dom";
import InHeader from "./common component/InHeader";
export default function Home({ screen }) {
  const [inHeaderBar, setInHeaderBar] = useState(true);
  const navigate = useNavigate();
  const veifyUser = async () => {
    const verifyUrl = `${import.meta.env.VITE_BACKEND_HOST}/verify`;
    try {
      const response = await fetch(verifyUrl, {
        method: "GET",
        headers: {
          authorization: `Bearer ${JSON.parse(
            window.sessionStorage.getItem("accTk")
          )}`,
          "content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        navigate("/");
      }
    } catch (error) {
      navigate("/");
      console.log(error);
    }
  };
  useEffect(() => {
    veifyUser();
  }, []);
  const [user, setUser] = useState(
    window.localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user"))
      : {
          email: "abcde@gmail.com",
          first_name: "ABCD",
          last_name: "XYZ",
          gender: "none",
          mobile_no: "7894561230",
        }
  );
  return (
    <>
      <InHeader
        screen={screen}
        user={user}
        inHeaderBar={inHeaderBar}
        setInHeaderBar={setInHeaderBar}
      />
      <section className="inHome">
        {inHeaderBar && (
          <article className="inHomeLeft">
            <strong>Menu</strong>
            {menulist.map((list, index) => (
              <Link
                className="menuListItem"
                to={list.path}
                key={`menulist/${index}`}
              >
                <list.icon className="icon" />
                <strong
                  style={{
                    color:
                      list.path == window.location.pathname.split("/").slice(-1)
                        ? "blue"
                        : "black",
                  }}
                >
                  {list.name}
                </strong>
              </Link>
            ))}
          </article>
        )}
        <article className="inHomeRight">
          <Outlet context={user} />
        </article>
      </section>
    </>
  );
}
