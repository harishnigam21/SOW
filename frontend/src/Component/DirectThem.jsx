import { Link } from "react-router-dom";
export default function DirectThem() {
  return (
    <section className="DirectThem">
      Select Price List from side menu or
      <Link to={"price_list"}> Click me</Link>
    </section>
  );
}
