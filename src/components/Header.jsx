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
                    <NavLink to={"/"} className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">Home</NavLink>
                    <NavLink to={"/nouveau"} className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">Nouveau !</NavLink>
                    <NavLink to={"/actu"} className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">Actualites</NavLink>
                    <NavLink to={"/streamer"} className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">Streamer</NavLink>
                    <NavLink to={"/apropos"} className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">A Propos</NavLink>
                    <NavLink to={"/contact"} className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">Contact</NavLink>
                    <NavLink
                        to={"/Login"}
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Connexion
                    </NavLink>
                    <NavLink
                        to={"/Inscription"}
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Inscription
                    </NavLink>
                </nav>
            )}
            
        </header>
    );
}