
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function StreamerTwitch() {

    return(
        <div className="text-white text-center h-screen bg-black flex-column">
            <h2 className="text-3xl font-bold">Nos streamers Partenaires Twitch !</h2>
            <h3>Laissez nous vous faire des découvrir des treamers aux coeur d'or, où leur live est bienveillant, chill, rire et blabla...</h3>

            {/**Descriptif chaine twitch alta et bichon avec bouton contenant leur liens twitch */}
            <div>
                <h3 className="text-2xl font-bold text-center uppercase">Altaviran et Bichon</h3>

            </div>

        {/**Lien reseaux sociaux */}
            <div className="flex flex-row justify-center items-center gap-2">
                <a href="" alt="" title=""><FaInstagram size={48} /></a>
                <a href="https://www.tiktok.com/@jarlspunk" alt="lien tiktok jarlspunk" title="lien chaine tiktok"><FaTiktok size={48} /></a>
                <a href="https://www.twitch.tv/jarlspunk?lang=fr" alt="lien twitch jarlspunk" title="lien chaine twitch jarlspunk"><FaTwitch size={48} /></a>
                <a href="https://discord.com/invite/q5xm48BKvJ" alt="lien discord jarlspunk" title="lien chaine discord"><FaDiscord size={48} /></a>
            </div>

            {/**Descriptif chaine twitch jarlspunk texte + banniere avec boutons reseaux sociaux et chaine twitch */}
            <div className="flex justify-around flex-col">

                {/**image + texte */}
                <div className="flex flex-row">
                    <img src="src/assets/banniere-jarlspunk.png" className="h-100 w-auto" alt="image pub pour jarlspunk" title="banniere pub jarlspunk"/>

                    <div className="p-2 m-2"> 
                        <div>
                            <h3 className="text-2xl font-bold text-center uppercase p-3">Jarlspunk</h3>
                            <p>Jarlspunk t’embarque dans des aventures épiques entre chill, frissons et fous rires ! Que ce soit sur des jeux solo exigeants comme Dark Souls ou Elden Ring, des soirées multijoueur fun et immersives (Among Us, jeux d’horreur, etc.), il y en a pour tous les goûts !
                            <br/>
                            Ici, c’est plus qu’un live : c’est une véritable communauté bienveillante, portée par un streamer à l’écoute et interactif avec son chat !
                            <br/>
                            Tu cherches une ambiance conviviale, chaleureuse avec des abos adorables ? Ne cherche plus, tu es au bon endroit !
                            <br/>
                            Rejoins l’aventure chaque soir à 21h30 et deviens toi aussi un(e) fidèle du royaume de Jarlspunk !</p>
                        </div>
                    </div>
                </div>
            {/**Lien reseaux sociaux */}
                <div className="flex flex-row justify-center items-center gap-2">
                    <a href="" alt="" title=""><FaInstagram size={48} /></a>
                    <a href="https://www.tiktok.com/@jarlspunk" alt="lien tiktok jarlspunk" title="lien chaine tiktok"><FaTiktok size={48} /></a>
                    <a href="https://www.twitch.tv/jarlspunk?lang=fr" alt="lien twitch jarlspunk" title="lien chaine twitch jarlspunk"><FaTwitch size={48} /></a>
                    <a href="https://discord.com/invite/q5xm48BKvJ" alt="lien discord jarlspunk" title="lien chaine discord"><FaDiscord size={48} /></a>
                </div>
            </div>
        </div>
    );
}