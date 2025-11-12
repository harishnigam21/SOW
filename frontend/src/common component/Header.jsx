import { Link } from "react-router-dom";
import navlist from "../assets/navlist";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Header({ screen }) {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <header className="header noscrollbar">
      {screen.width > 850 ? (
        <>
          <section className="hesec1">
            <Link to={navlist[0].path}>
              <img src={navlist[0].src} alt={navlist[0].name} />
            </Link>
          </section>
          <section className="hesec2">
            {navlist.slice(1, -1).map((item, index) => (
              <Link key={`navitem/${index}`} to={item.path}>
                {item.name}
              </Link>
            ))}
          </section>
        </>
      ) : (
        <article className="navicon">
          {navToggle ? (
            <ImCross
              className="icon cross"
              onClick={() => setNavToggle(false)}
            />
          ) : (
            <FaBarsStaggered
              className="icon"
              onClick={() => setNavToggle(true)}
            />
          )}
          {navToggle && (
            <article className="naviconlist">
              {navlist.slice(1, -1).map((item, index) => (
                <Link key={`navitem/${index}`} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </article>
          )}
        </article>
      )}
      <section className="hesec3">
        <Link to={navlist.slice(-1)[0].path}>{navlist.slice(-1)[0].name}</Link>
      </section>
    </header>
  );
}
