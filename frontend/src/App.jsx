import "./App.css";
import Header from "./common component/Header";
import Footer from "./common component/Footer";
import LogIn from "./Component/LogIn";
import bg from "./assets/images/homeBg.jpg";
import { useEffect, useState } from "react";
function App({screen}) {
  const [switchLanguage, setSwitchLanguage] = useState("english");
 
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
