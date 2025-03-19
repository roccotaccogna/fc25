import { Link } from "react-router-dom";
import ingaggio from "../data/ingaggio.json";
import { useState } from "react";

import { HiOutlineCubeTransparent } from "react-icons/hi2";

function Ingaggio() {
  const [ingaggioData, setIngaggioData] = useState(null);
  

  const handleCLick = () => {
      // Genera numero casuale tra 1 e 10
      const randomId = Math.floor(Math.random() * 10) + 1;

      // Corrispondente nel JSON
      const foundData = ingaggio.find(item => item.id === randomId);

      // Se non trova il dato, nostra l'id 21
      const fallbackData = ingaggio.find(item => item.id === 21);

      setIngaggioData(foundData || fallbackData);

    }

  return (
    <div>
      <div className="border-2 border-sky-800 rounded-2xl m-8 bg-sky-950">
      <div className="flex justify-center items-center">
                <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl mt-26 italic">
                  Ingaggio...
                </h1>
      </div>

              { ingaggioData && (
                <div className="mt-24 p-4 text-center text-emerald-500">
                  <h2 className="text-5xl font-bold uppercase">
                    {ingaggioData.title}
                  </h2>

                </div> 
              )}
      

      { /* TORNA INDIETRO */}
              <div className="flex justify-between items-center">
                <div className="mb-24 mt-24 ml-4">
                  <Link to="/">
                    <button
                      className="bg-sky-800 text-center w-48 rounded-2xl h-14 relative text-black 
                                  text-xl font-semibold group cursor-pointer"
                      type="button"
                    >
                    <div
                      className="bg-sky-800 rounded-xl h-12 w-1/6 flex items-center 
                                justify-center absolute left-1 top-[4px] 
                                group-hover:w-[184px] z-10 duration-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        height="25px"
                        width="25px"
                      >
                      <path
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        fill="#FFFFFF"
                      ></path>
                      </svg>
                    </div>
                      <p className="translate-x-2 text-white font-light">Torna indietro</p>
                    </button>
                  </Link>
                </div>
      
                { /* DADO */}
                  <button className="mr-6 hover:rotate-[-35deg] transition-transform duration-300 
                                rounded-full p-4 hover:bg-sky-800"
                          onClick={handleCLick}
                          
                  >
                    <HiOutlineCubeTransparent size={52}/>
                  </button>
      
              </div>
      </div>
    </div>
  )
}

export default Ingaggio;