import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <article className="fooup">
        <div className="fooupleft">
          <h1>123 Fakturera</h1>
        </div>
        <div className="fooupright">
          <Link to={"/home"}>Home</Link>
          <Link to={"/order"}>Order</Link>
          <Link to={"/contact"}>Contact us</Link>
        </div>
      </article>
      <article className="foodown">
        <strong>
          © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
        </strong>
      </article>
    </footer>
  );
}
