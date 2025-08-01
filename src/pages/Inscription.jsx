export default function Inscription() {

    return (
        <div className="bg-black text-white h-screen">
            <h2>S'inscrire !</h2>

            <form
            className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]">
                <div className="flex flex-col mb-2">
                    <label htmlFor="username" className="mb-2">
                        Pseudo
                    </label>
                    <input
                        
                        type="text"
                        id="username"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="mb-2">
                        Email
                    </label>

                    <input
                        
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="password" className="mb-2">
                        Mot de passe
                    </label>

                    <input
                        
                        type="password"
                        id="password"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="confirmPassword" className="mb-2">
                        Confirmation du mot de passe
                    </label>
                    <input
                        
                        type="password"
                        id="confirmPassword"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="rgpd" className="mb-2">
                        <input
                        
                        type="checkbox"
                        className="mr-4"
                        id="rgpd"
                        />
                        En soumettant ce formulaire, j'accepte ...
                    </label>
                </div>

                <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-900 hover:text-white">
                Submit
                </button>

            </form>
        </div>
    );
}