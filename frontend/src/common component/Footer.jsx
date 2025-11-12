import { Link } from "react-router-dom";

export default function Footer({ switchLanguage }) {
  return (
    <footer className="footer">
      <article className="fooup">
        <div className="fooupleft">
          <h1>123 Fakturera</h1>
        </div>
        {switchLanguage == "english" ? (
          <div className="fooupright">
            <Link to={"/home"}>Home</Link>
            <Link to={"/order"}>Order</Link>
            <Link to={"/contact"}>Contact us</Link>
          </div>
        ) : (
          <div className="fooupright">
            <Link to={"/home"}>Hem</Link>
            <Link to={"/order"}>Beställ</Link>
            <Link to={"/contact"}>Kontakta oss</Link>
          </div>
        )}
      </article>
      <article className="foodown">
        <strong>
          © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
        </strong>
      </article>
    </footer>
  );
}
