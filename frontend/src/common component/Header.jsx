import { Link } from "react-router-dom";
import navlist from "../assets/navlist";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Header({
  Contain,
  screen,
  switchLanguage,
  setSwitchLanguage,
}) {
  const [navToggle, setNavToggle] = useState(false);
  const [lgToggle, setLGToggle] = useState(false);
  return (
    <header className="header noscrollbar">
      {screen.width > 850 ? (
        <>
          <section className="hesec1">
            <Link to={navlist[switchLanguage][0].path}>
              <img
                src={navlist[switchLanguage][0].src}
                alt={navlist[switchLanguage][0].name}
              />
            </Link>
          </section>
          <section className="hesec2">
            {navlist[switchLanguage].slice(1, -1).map((item, index) => (
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
              {navlist[switchLanguage].slice(1, -1).map((item, index) => (
                <Link key={`navitem/${index}`} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </article>
          )}
        </article>
      )}
      <section className="hesec3">
        <article className="laguageSec">
          {Object.keys(Contain)
            .filter(
              (item) => item.toLowerCase() == switchLanguage.toLowerCase()
            )
            .map((item) => (
              <div
                key={`lsdefault`}
                className="lsdefault"
                onClick={() => setLGToggle(true)}
              >
                <h4>{item[0].toUpperCase() + item.slice(1).toLowerCase()}</h4>
                <img
                  src={Contain[switchLanguage].flag.img}
                  alt="default language flag"
                />
              </div>
            ))}
          {lgToggle && (
            <article className="languageSwitcher">
              {Object.keys(Contain).map((lang, index) => (
                <div
                  key={`lg/${index}`}
                  className="lang"
                  onClick={() => {
                    setSwitchLanguage(lang.toLowerCase());
                    setLGToggle(false);
                  }}
                >
                  <p>{lang[0].toUpperCase() + lang.slice(1).toLowerCase()}</p>
                  <img
                    src={Contain[lang].flag.img}
                    alt="default language flag"
                  />
                </div>
              ))}
            </article>
          )}
        </article>
      </section>
    </header>
  );
}
