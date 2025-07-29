
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  //console.log(user);
  const toggleUser = () => {
    setUser(!user);
  }

  return (
    <div className="h-screen">
      <Header userConnected={user} />
      
      <Outlet />
      
      <Footer />
    </div>
  )
};

export default App