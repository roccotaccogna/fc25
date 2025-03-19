import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

import { IoIosAdd } from "react-icons/io";
import { RiResetLeftFill } from "react-icons/ri";

function Bonus() {

    const [bonusUsato, setBonusUsato] = useState(false);

    const [bonus, setBonus] = useState(() => {
        const stored = localStorage.getItem('bonus');
        return stored ? parseInt(stored) : 3; // Valore iniziale 3 se non presente
    });

    // Aggiorna localStorage ogni volta che cambia il bonus
    useEffect(() => {
        localStorage.setItem('bonus', bonus);
    }, [bonus]);

    const handleCLick = () => {
        if (bonus > 0) {
            setBonus(prev => prev - 1); // Usiamo la versione funzionale per sicurezza
            setBonusUsato(true);
        }
    }

    const handleReset = () => {
        setBonus(3);
        setBonusUsato(false);
        localStorage.setItem('bonus', 3);
    };

  return (
    <div>
    <div className="border-2 border-teal-700 rounded-2xl m-8 bg-cyan-950">
    <div className="flex justify-center items-center">
              <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl mt-26 italic">
                Bonus...
              </h1>
    </div>

            {/* Blocco bonus */}
            <div className="flex justify-center items-center text-center mt-12 text-teal-500 gap-4">
                <h2 className="ml-5 text-6xl font-bold uppercase">
                    {bonus} 
                </h2>
                <h2 className="text-4xl font-bold uppercase">
                    Bonus rimanenti
                </h2>
            </div>  

            {/* Blocco bonus usato */}
            {bonusUsato && (
            <div className="mt-8 p-4 text-center text-teal-500">
                <h2 className="text-4xl font-bold uppercase">
                Bonus usato!
                </h2>
            </div>
            )}
    

    
            <div 
              className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 
                         md:grid-cols-3 place-items-center"
            >

              { /* BOTTONI RESET E AGGIUNGI */}
                <div className="mt-8">
                  <button className="mr-6 rounded-full p-4 hover:bg-teal-700"
                          onClick={handleCLick}
                          disabled={bonus === 0}
                          data-tooltip-content="Aggiungi"
                          data-tooltip-id="aggiungi-tooltip"
                          data-tooltip-place="top"
                  >
                    <IoIosAdd size={52}/>
                  </button>

                  <Tooltip 
                      id="aggiungi-tooltip" 
                      effect="solid" 
                  />
                </div>

                <div className="mt-8">
                  <button
                      className="mr-6 rounded-full p-4 hover:bg-teal-700"
                      onClick={handleReset}
                      data-tooltip-content="Resetta"
                      data-tooltip-id="reset-tooltip"
                      data-tooltip-place="top"
                  >
                      
                      <RiResetLeftFill size={52}/>
                  </button>

                  <Tooltip 
                      id="reset-tooltip" 
                      effect="solid" 
                  />
                </div>

              { /* TORNA INDIETRO */}
                <div className="mb-20 mt-8 md:pt-20 xl:row-start-1 lg:row-start-1 md:row-start-1">
                <Link to="/">
                  <button
                    className="bg-teal-700 text-center w-48 rounded-2xl h-14 relative text-black 
                                text-xl font-semibold group cursor-pointer"
                    type="button"
                  >
                  <div
                    className="bg-teal-700 rounded-xl h-12 w-1/6 flex items-center 
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

            </div>
    </div>
  </div>
  )
}

export default Bonus;