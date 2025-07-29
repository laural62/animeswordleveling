import { NavLink } from "react-router-dom"

export default function Home() {
    
    return ( 
      <>
      {/*section de Bienvenue "Accueil" */}
        <div className="text-white flex justify-center items-center bg-anime h-screen flex-column text-center">
          <div>
            <h1 className="text-5xl">Anime Sword Leveling</h1>

            <div>
              <h2 classNAme="text-3xl">Bienvenue sur notre site !</h2>
            </div>
          </div>
        </div>

        {/*section avec les images qui represente une page */}
        <section className="bg-black text-white text-center h-screen">
          <h2 className="text-3xl text-center border border-2 py-2 px-4 border-gray-300">Nos Catégories !</h2>

          <div className="flex flex-row items-center justify-around">
            <div>
              <img src="src/assets/pop_yuki.png" alt="image figurine pop feminin" title="section figurine" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Figurine et Pop !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>

            <div>
              <img src="src/assets/perso-kazu-t.png" alt="image personnage anime manga" title="section anime et manga" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Animé et Manga !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>

            <div>
              <img src="src/assets/gaming.jpg" alt="image jeux video epee" title="section jeux video" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Jeux vidéo !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>

            <div>
              <img src="src/assets/img_twitch.png" alt="image streamer" title="section streamers" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Nos Streamers Partenaires !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>
          </div>
        </section>

      {/**Section Nouveautés mixtes, actualiser tous les quinze jours, "Nouveau" */}
        <section className="h-screen bg-black text-white flex">
          <div>
            <h2>Nouveautés du Moment !</h2>
              <div>
                <div>
                  <img src="src/assets/" />
                </div>
              </div>

          </div>
        </section>
      </>
    );
}
