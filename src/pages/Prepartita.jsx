import { Link } from "react-router-dom";
import prepartita from "../data/prepartita.json";
import { useState } from "react";

import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";

function Prepartita() {
  const [prepartitaData, setPrepartitaData] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [randoms, setRandoms] = useState([]);

  const handleCLick = () => {
    // Genera numero casuale tra 1 e 20
    const randomId = Math.floor(Math.random() * 20) + 1;

    // Corrispondente nel JSON
    const foundData = prepartita.find(item => item.id === randomId);

    // Se non trova il dato, nostra l'id 21
    const fallbackData = prepartita.find(item => item.id === 21);

    setPrepartitaData(foundData || fallbackData);

    // Gestione id 2
    if(foundData?.id === 11) {
      const specialNumber = Math.floor(Math.random() * 32) + 1;
      setRandomNumber(specialNumber);
    } else {
      setRandomNumber(null);
    }

    // Genera 3 numeri tra 1 e 11
    const uniqueNumbers = [];

    if(foundData?.id === 12) {
      while(uniqueNumbers.length < 3) {
        const num = Math.floor(Math.random() * 11) + 1;
  
        if(!uniqueNumbers.includes(num)){
          uniqueNumbers.push(num);
        } 
      }
      setRandoms(uniqueNumbers);
    }

  }

  return (
    <div>
      <div className="border-2 border-sky-800 rounded-2xl m-8 bg-sky-950">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl mt-26 italic">
              Affidati alla sorte...
            </h1>
          </div>


          { prepartitaData && (
                <div className="mt-24 p-4 text-center text-emerald-500">
                    <h2 className="text-4xl font-bold uppercase">
                      {prepartitaData.title}
                    </h2>
                    <p className="mt-20 text-xl italic ">
                      {prepartitaData.description}
                    </p>

                    {prepartitaData.id === 11 && (
                      <div className="mt-8 flex justify-center items-center">
                        <div className="relative">
                          <IoShirtOutline size={124} className="text-emerald-500" />
                          <span className="absolute inset-0 flex items-center justify-center 
                                           text-5xl font-bold text-white"
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                          >
                            {randomNumber}
                          </span>
                        </div>
                      </div>
                    )}

                    {
                      prepartitaData.id === 12 && (
                        <div className="mt-4 flex justify-center items-center">
                            { randoms.map((number, index) => (
                              <div key={index}
                                  className="relative "
                              >
                                <IoShirtOutline size={124} className="text-emerald-500" />
                                <span className="absolute inset-0 flex items-center justify-center 
                                           text-5xl font-bold text-white"
                                      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                >
                                  {number}
                                </span>
                              </div>
                            ))}
                        </div>
                      )
                    }

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

export default Prepartita;