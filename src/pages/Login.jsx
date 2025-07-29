import Inscription from "./Inscription";



export default function Login() {
    

    return (
        <div className="bg-black text-white">
            <h2>Se connecter !</h2>

            <div className="w-full max-w-md p-6 bg-white shadow-xl rounded">

                <form className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="email" className="mb-2">
                            Email
                        </label>
                        <input
                            {...Inscription("email")}
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="password" className="mb-2">
                            Mot de passe
                        </label>

                        <input
                            {...Inscription("password")}
                            type="password"
                            id="password"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}