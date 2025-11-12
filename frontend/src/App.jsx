import "./App.css";
import Header from "./common component/Header";
import Footer from "./common component/Footer";
import LogIn from "./Component/LogIn";
import bg from "./assets/images/homeBg.jpg";
import { useEffect, useState } from "react";
function App() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [switchLanguage, setSwitchLanguage] = useState("english");
  useEffect(() => {
    const handleReSize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, []);
  return (
    <main className="mainApp">
      <img src={bg} alt="main bg" />
      <Header
        screen={screen}
        switchLanguage={switchLanguage}
        setSwitchLanguage={setSwitchLanguage}
      />
      <LogIn switchLanguage={switchLanguage} />
      <Footer switchLanguage={switchLanguage} />
    </main>
  );
}

export default App;
