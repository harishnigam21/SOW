import logo from "../assets/images/diamond.png";
import swflag from "../assets/images/flags/sw.png";
import enflag from "../assets/images/flags/en.png";
const navlist = [
  {
    id: 0,
    name: "logo",
    src: logo,
    path: "",
  },
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "Order", path: "order" },
  {
    id: 3,
    name: "Our Customers",
    path: "customers",
  },
  {
    id: 4,
    name: "About us",
    path: "about",
  },
  {
    id: 5,
    name: "Contact us",
    path: "contact",
  },
  {
    id: 6,
    name: "Language",
    path: "language",
    languages: [
      { id: 0, name: "English", flag: enflag },
      { id: 1, name: "Svenska", flag: swflag },
    ],
  },
];
export default navlist;
