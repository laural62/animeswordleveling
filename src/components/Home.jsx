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
        <section className="bg-black text-white text-center h-screen flex flex-col align-center w-full py-3">
          <h2 className="text-3xl border-2 py-2 px-4 border-gray-300 w-fit self-center">Nos Catégories !</h2>

          <div className="flex flex-row items-center justify-around py-3">
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

        <hr className="w-50 m-auto text-white"/>

      {/**Section Nouveautés mixtes, actualiser tous les quinze jours, "Nouveau" */}
        <section className="h-screen bg-black text-white flex justify-center items-center">
          <div>
            <div className="text-2xl self-center">
              <h2 className="text-3xl border-2 border-gray-300 w-fit m-1">Nouveautés du Moment !</h2>
            </div>

              <div className="m-2 gap-3">
                <div className="flex justify-center items-center flex-column">
                  <img src="src/assets/solo-leveling.jpg" className="rounded h-75 object-cover" />
                  <p className="text-center w-75">Solo Leveling | ARISE OVERDRIVEANNONCE<br/> POUR LES GAMEURS...<br/>Prochainement Solo Leveling fera son appartion comme jeux vidéo uniquement sur steam dans un premier temps. Un jeu d'action-rpg, faites évoluer votre perso du rang E.</p>
                </div>
              </div>

              <br/>
              <hr className="w-100 m-auto text-white"/>

              <div className="flex items-center justify-around flex-row m-2 gap-3">
                <div className="flex flex-row p-2 m-2">
                  <p className="w-50 flex justify-center">FIGURINE POP, DU GROUPE BTS,<br/>Jimin.<br/>
                    Sortie en Août 2025, à partir de 14€99.
                  </p>
                  <img src="src/assets/pop-bts.webp" className="w-auto h-75 object-cover" />
                </div>

                <div className="flex flex-row p-2 m-2">
                  <img src="src/assets/jutjuso-keisein.webp" className="h-75 object-cover" />
                  <p className="w-50 flex justify-center p-2">JUJUTSU KAISEN : Trésor caché / Mort prématurée | Le Film.<br/><br/>Sortie prévu dans nos salles 
                  le 09 Août 2025.
                  </p>
                </div>
              </div>
          </div>
        </section>

        <hr className="w-50 m-auto text-white"/>

        {/**section des coups de coeurs de nos streamers partenaires ! avec 4 image par streamer */}
        <section className="bg-black text-white h-screen">
          <div className="flex justify-center items-center flex-column">
            <h2 className="text-2xl">Coups de coeur des streamers !</h2>
          </div>

            <div className="flex justify-center items-center flex-column gap-3">
              <div>
                <h3>Alta & Bichon</h3>
                <img src="src/assets/altabichon.jpg" className="w-50 h-auto" />
                <p className="text-center w-50">Voici les coups de coeurs de notre couple de streamers :</p>
              </div>

              <div>
                <h3>JarlSpunk</h3>
                <img src="src/assets/logoJarl.jpg" className="w-50 h-auto" />
                <p className="text-center w-50">Voici le coups de coeur de JarlSpunk :</p>
              </div>
          </div>
        </section>
      </>
    );
}
