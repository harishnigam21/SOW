/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menulist } from "./assets/menulist";
import { Outlet } from "react-router-dom";
import InHeader from "./common component/InHeader";
import { GoDotFill } from "react-icons/go";

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
          <article className="inHomeLeft noscrollbar">
            <strong>Menu</strong>
            <article className="menuList">
              {menulist.map((list, index) => (
                <Link
                  className="menuListItem onnav"
                  to={list.path}
                  key={`menulist/${index}`}
                >
                  <GoDotFill
                    style={{
                      fontSize: "30px",
                      color: "#05d221",
                      position: "absolute",
                      left: 0,
                      display:
                        list.path ==
                        window.location.pathname.split("/").slice(-1)
                          ? "flex"
                          : "none",
                    }}
                  />
                  <div className="icondiv" style={{display:'flex',alignItems:'center'}}>
                    <list.icon style={{ color: list.color }} className="icon" />
                  </div>
                  <strong
                    style={{
                      color:
                        list.path ==
                        window.location.pathname.split("/").slice(-1)
                          ? "green"
                          : "black",
                    }}
                  >
                    {list.name}
                  </strong>
                </Link>
              ))}
            </article>
          </article>
        )}
        <article className="inHomeRight">
          <Outlet context={user} />
        </article>
      </section>
    </>
  );
}
