
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home";


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
      
      <Home />

        {/*section categorie dit Acceuil */}
        <section>
          <div className="bg-black text-white h-screen flex flex-row justify-center items-center">
            <div>
              <img src="src/assets/pop_yuki.png" alt="image figurine pop feminin" title="section figurine" className="w-50 h-auto"/>
            </div>

            <div>
              <img src="src/assets/perso-kazu-t.png" alt="image personnage anime manga" title="section anime et manga" className="w-50 h-auto"/>
            </div>

            <div>
              <img src="src/assets/gaming.jpg" alt="image jeux video epee" title="section jeux video" className="w-50 h-auto"/>
            </div>

            <div>
              <img src="src/assets/img_twitch.png" alt="image streamer" title="section streamers" className="w-50 h-auto"/>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  )
};

export default App