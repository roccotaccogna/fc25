import { Link } from "react-router-dom";
import mercato from "../data/mercato.json";
import { useState, useEffect } from "react";

import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { TiDeleteOutline } from "react-icons/ti";

function Mercato() {
  const [mercatoData, setMercatoData] = useState(null);
  const [listaTesti, setListaTesti] = useState([]);
  const [inputTesto, setInputTesto] = useState("");

  useEffect(()=> {
    const datiSalvati = localStorage.getItem("listaTesti");
    if (datiSalvati) {
      setListaTesti(JSON.parse(datiSalvati));
    }
  },[]);

  const handleCLick = () => {
      // Genera numero casuale tra 1 e 10
      const randomId = Math.floor(Math.random() * 10) + 1;

      // Corrispondente nel JSON
      const foundData = mercato.find(item => item.id === randomId);

      // Se non trova il dato, nostra l'id 21
      const fallbackData = mercato.find(item => item.id === 21);
      
      setMercatoData(foundData || fallbackData);  
    }

  const aggiungiTesto = () => {
    if(inputTesto !== "") {
      const nuovaLista = [...listaTesti, inputTesto];
      setListaTesti(nuovaLista);
      localStorage.setItem('listaTesti', JSON.stringify(nuovaLista));
      setInputTesto("");
    }
  };

  const handleDelete = (testoCanc) => {
    const upList = listaTesti.filter(testo => testo !== testoCanc);
    setListaTesti(upList);
    localStorage.setItem("listaTesti", JSON.stringify(upList));
  };

  return (
    <div>
    <div className="border-2 border-sky-800 rounded-2xl m-8 bg-sky-950">
    <div className="flex justify-center items-center">
              <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl mt-26 italic">
                Mercato...
              </h1>
            </div>


            { mercatoData && (
                <div className="mt-24 p-4 text-center text-emerald-500">
                  <h2 className="text-4xl font-bold uppercase">
                    {mercatoData.title}
                  </h2>
                  <p className="mt-20 text-xl italic ">
                          {mercatoData.description}
                  </p>

                  <div className="mt-24 flex justify-items-center justify-center items-center">
                    <input 
                      type="text"
                      value={inputTesto}
                      onChange={(e) => setInputTesto(e.target.value)}
                      className="text-lg custom-input px-4 py-2 rounded-lg 
                                shadow-sm transition duration-300 ease-in-out transform 
                                bg-sky-800 text-white mr-2 md:mr-4 lg:mr-6 xl:mr-8"
                    />
                    <button 
                      onClick={aggiungiTesto}
                      className="group cursor-pointer outline-none 
                                hover:rotate-90 duration-300"
                      title="Add New"
                    >  
                      <svg
                        className="stroke-emerald-500 fill-none group-hover:fill-emerald-800 
                                  group-active:stroke-emerald-200 group-active:fill-emerald-600 
                                  group-active:duration-0 duration-300"
                        viewBox="0 0 24 24"
                        height="50px"
                        width="50px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-width="1.5"
                          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        ></path>
                        <path stroke-width="1.5" d="M8 12H16"></path>
                        <path stroke-width="1.5" d="M12 16V8"></path>
                      </svg>
                    </button>
                  </div>

                  <div class="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl transition-all duration-500 ease-in-out">
                  <div class="md:flex">
                    <div class="p-8">
                      <ul>
                        {listaTesti.map((testo,index) => (
                        <>
                        <div className="flex">
                          <p className="mr-2"> - </p>
                          <li 
                            key={index}
                            className="block mt-1 text-lg leading-tight font-medium text-white"
                          > {testo}</li>
                          <button
                            onClick={() => handleDelete(testo)}
                            className="ml-4 cursor-pointer text-red-600 hover:text-red-500"
                          >
                            <TiDeleteOutline size={24}/>
                          </button>
                        </div>
                        </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

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

export default Mercato;