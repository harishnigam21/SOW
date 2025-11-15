import { FaBars } from "react-icons/fa";
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
            <span>{user.first_name[0]}</span>
            <span>{user.last_name[0]}</span>
          </div>
          <div className="userinfo">
            <strong>
              <span>{user.first_name} </span>
              <span>{user.last_name}</span>
            </strong>
            <p>{user.email}</p>
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
