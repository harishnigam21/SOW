import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menulist } from "./assets/menulist";
import { Outlet } from "react-router-dom";
export default function Home({screen}) {
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
  return (
    <section className="inHome">
      {screen.width>1080 &&
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
      }
      <article className="inHomeRight">
        <Outlet/>
      </article>
    </section>
  );
}
