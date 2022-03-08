export default function TailWindPage() {

    return (
        <>
            <div className="bg-myColor p-4 flex justify-between items-center text-xl">

                <div className="flex items-center">
                    <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png" width="50" alt="Logo" className="mr-2" />
                    <a href="#" className="inline-block p-2 text-indigo-600 hover:text-red-500">Home</a>
                    <a href="#" className="inline-block p-2 text-indigo-600 hover:text-red-500">About</a>
                </div>

                <div class="hidden md:block">
                    <a href="#" className="inline-block text-indigo-300 px-2">Login</a>
                    <a href="#" className="
                    hover:ring hover:bg-yellow-200 bg-yellow-400 
                    text-yellow-800 py-2 px-4 rounded-lg 
                    transition ease-in duration-300 hover:text-yellow-500
                    lg:duration-100
                    "

                    >Sign Up</a>
                </div>
            </div>

            <div className="md:flex p-4 bg-indigo-400">

                <div className="md:w-1/2 text-white text-center md:text-left">
                    <h2 className="md:text-6xl text-4xl font-bold mb-8">Welcome to Doggo City!</h2>
                    <p className="mb-6 text-">There is never a sad day here!</p>

                    <div className="flex flex-col mb-8 items-center
                                    md:mb-0 md:flex-none 
                                    sm:flex-row"
                    >
                        <a href="#"
                            className="inline-block py-3 px-6 bg-slate-400 sm:mr-4 rounded text-lg w-5/6 mb-4
                                sm:w-auto sm:mb-0"
                        >Learn More</a>
                        <a href="#" className="inline-block py-3 px-6 rounded text-lg bg-red-600 md:bg-pink-600 lg:bg-yellow-400 w-5/6 sm:w-auto">Get Started</a>
                    </div>
                </div>

                <div className="md:w-1/2 mb-6">
                    <img className="block rounded hover:drop-shadow-xl" src="https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Happiest Doggo" />
                </div>

            </div>

            <div className="md:flex bg-indigo-800 px-10 py-16 text-white text-center">

                <div className="mr-2 ">
                    <img src="https://images.unsplash.com/photo-1586179253019-ac8a2522535f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" 
                        className="w-full rounded border-solid border-2 border-yellow-500"/>
                        <p>Cuddles!</p>
                </div>

                <div className="mt-8 mr-2">
                    <img src="https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" 
                        className="w-full rounded border-solid border-2 border-yellow-500"/>
                        <p>Smiles!</p>
                </div>

                <div className="mr-2">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" 
                        className="w-full rounded border-solid border-2 border-yellow-500"/>
                        <p>Games!</p>
                </div>

                <div className="mt-8 mr-2">
                    <img src="https://images.unsplash.com/photo-1505623776320-7edecf5f0771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" 
                        className="w-full rounded border-solid border-2 border-yellow-500"/>
                        <p>Swims!</p>
                </div>
                
            </div>
        </>
    )
}