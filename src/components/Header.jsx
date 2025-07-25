

export default function Header({userConnected, toggleUser}) {
    console.log(userConnected);
    return (
        <header class="bg-black text-white flex justify-around items-center">
            <div>
                <img src="src/assets/logo.png" alt="logo image" class="w-25 h-25" />
            </div>
            
            {
            userConnected ? (
                <nav className="flex space-x-5">
                    <a href="#" className="text-gray-600 hover:text-black font-semibold" onClick={toggleUser}>Deconnexion</a>
                    <a href="#">
                        <FaShoppingCart className="text-[22px]" />
                        </a>
                </nav>
            ) : (
                <nav className="flex space-x-6">
                    <a href="#" className="text-white font-semibold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>Home</a>
                    <a href="#" className="text-white font-semibold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>Nouveautes</a>
                    <a href="#" className="text-white font-semibold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>Actualites</a>
                    <a href="#" className="text-white font-semibold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>Streamer</a>
                    <a href="#" className="text-white font-semibold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>A Propos</a>
                    <a href="#" className="text-white font-semibold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>Contact</a>
                    <a href="#" className="text-white font-extrabold hover:text-gray-300 hover:text-2xl" onClick={toggleUser}>Inscription</a>
                </nav>
            )
            }
            
        </header>
    );
}