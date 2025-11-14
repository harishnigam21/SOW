import "./App.css";
import Header from "./common component/Header";
import Footer from "./common component/Footer";
import bg from "./assets/images/homeBg.jpg";
import { Outlet } from "react-router-dom";
function App({ screen, switchLanguage, setSwitchLanguage }) {
  return (
    <main className="mainApp">
      <img src={bg} alt="main bg" />
      <Header
        screen={screen}
        switchLanguage={switchLanguage}
        setSwitchLanguage={setSwitchLanguage}
      />
      <Outlet />
      <Footer switchLanguage={switchLanguage} />
    </main>
  );
}

export default App;
