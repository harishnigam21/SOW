import { FaBars } from "react-icons/fa";
import userpro from "../assets/images/userpro.png";
import { GoDotFill } from "react-icons/go";

export default function InHeader({
  screen,
  user,
  setInHeaderBar,
  inHeaderBar,
}) {
  return (
    <header className="Inheader">
      {screen.width < 1080 ? (
        <FaBars className="icon" onClick={() => setInHeaderBar(!inHeaderBar)} />
      ) : (
        <article
          className="userdetail"
          onAnimationStart={() => setInHeaderBar(true)}
        >
          <div className="proimg">
            <img src={userpro} alt="userpro" />
            <GoDotFill style={{position:'absolute',right:'4px',bottom:'15px',color:'greenyellow'}}/>
          </div>
          <div className="userinfo">
            <strong>
              <span>{user.first_name} </span>
              <span>{user.last_name}</span>
            </strong>
            <p>MERN Developer</p>
          </div>
        </article>
      )}
      <article className="userlanguage">
        <strong>English</strong>
        <img
          src="https://storage.123fakturere.no/public/flags/GB.png"
          alt="user lang"
        />
      </article>
    </header>
  );
}
