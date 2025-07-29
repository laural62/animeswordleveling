import { NavLink } from "react-router-dom";

export default function Header({ userConnected, toggleUser }) {
    console.log(userConnected);
    return (
        <header className="bg-black text-white flex justify-around items-center">
            <NavLink to={"/"}>
                <img src="src/assets/logo.png" alt="logo image" className="w-25 h-25" />
            </NavLink>

            {userConnected ? (
                <nav className="flex space-x-5">
                    <a href="#" className="text-white font-semibold" onClick={toggleUser}>Deconnexion</a>
                    
                </nav>
            ) : (
                <nav className="flex space-x-6">
                    <NavLink to={"/"} className="text-white font-semibold hover:text-gray-300 hover:text-2xl">Home</NavLink>
                    <NavLink to={"/nouveau"} className="text-white font-semibold hover:text-gray-300 hover:text-2xl">Nouveau !</NavLink>
                    <NavLink to={"/actu"} className="text-white font-semibold hover:text-gray-300 hover:text-2xl">Actualites</NavLink>
                    <NavLink to={"/streamer"} className="text-white font-semibold hover:text-gray-300 hover:text-2xl">Streamer</NavLink>
                    <NavLink to={"/apropos"} className="text-white font-semibold hover:text-gray-300 hover:text-2xl">A Propos</NavLink>
                    <NavLink to={"/contact"} className="text-white font-semibold hover:text-gray-300 hover:text-2xl">Contact</NavLink>
                    <NavLink
                        to={"/login"}
                        className="text-white font-semibold hover:text-gray-300 hover:text-2xl">
                        Connexion
                    </NavLink>
                    <NavLink
                        to={"/inscription"}
                        className="text-white font-semibold hover:text-gray-300 hover:text-2xl">
                        Inscription
                    </NavLink>
                </nav>
            )}
            
        </header>
    );
}