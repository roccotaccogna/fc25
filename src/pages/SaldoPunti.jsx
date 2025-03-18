import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MdOutlineDeleteSweep } from "react-icons/md";
import { RiMastercardLine } from "react-icons/ri";
import { TfiBolt } from "react-icons/tfi";
import { GiAmericanShield } from "react-icons/gi";
import { FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { BiFootball } from "react-icons/bi";
import { GiConverseShoe } from "react-icons/gi";
import { GiBoltSpellCast } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa6";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";
import { ImTrophy } from "react-icons/im";
import { RiTrophyFill } from "react-icons/ri";

function SaldoPunti() {
  const [saldo, setSaldo] = useState(()=> {
    const storedSaldo = localStorage.getItem("saldo");
    return storedSaldo !== null ? parseFloat(storedSaldo) : 10;
  })

  const [serieMinore, setSerieMinore] = useState(() => {
    const storedValue = localStorage.getItem("serieMinore");
    return storedValue === "true";
  });

  const [over31, setOver31] = useState(() => {
    const storedValue = localStorage.getItem("over31");
    return storedValue === "true";
  });

  useEffect(()=>{
    localStorage.setItem("saldo", saldo.toString());
    localStorage.setItem("serieMinore", serieMinore.toString());
  }, [saldo, serieMinore]);
  return (
    <div>
      <div className="border-2 border-sky-800 rounded-2xl m-8 bg-sky-950">
          <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl mt-26 italic">
                      SALDO PUNTI
                    </h1>
                    <h1 className="mt-8 text-8xl font-bold">
                      {saldo}
                    </h1>
          </div>

        <div className="xl:flex lg:flex justify-around items-center mt-8 gap-2">

          {/* CESSIONI */}
          <div className="border border-gray-900 rounded-2xl my-2 mx-4">
            <div className="flex justify-center items-center m-4 my-9">
              <h1 className="text-xl mr-3">
                Cessioni 
              </h1>
              <MdOutlineDeleteSweep size={24}/>
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 
                            justify-center mb-4 mx-6"
            >
                <button 
                  onClick={()=> setSaldo(saldo + 2)}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥70 +2
                </button>
                
                <button 
                  onClick={()=> setSaldo(saldo + 4)}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥75 +4
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 5.5)}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥80 +5.5
                </button>
                <button 
                  onClick={()=> setSaldo(saldo + 7)}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥85 +7
                </button>
                <button 
                  onClick={()=> setSaldo(saldo + 9)}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥90 +9
                </button>
            </div>
          </div>

          {/* ACQUISTI */}
          <div className="border border-gray-900 rounded-2xl my-2 mx-4">
            <div className="flex justify-center items-center m-4">
              <h1 className="text-xl mr-3">
                Acquisti 
              </h1>
              <RiMastercardLine size={24}/>

            </div>
            <div 
                className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 
                            justify-center mb-4 mx-6"
            >
                <button 
                  onClick={()=> setSaldo(saldo - (serieMinore ? (over31 ? 0.5 : 1.5) : (over31 ? 1.5 : 3)))}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥70 {serieMinore ? (over31 ? "-0.5" : "-1.5") : (over31 ? "-1.5" : "-3")}
                </button>
                
                <button 
                  onClick={()=> setSaldo(saldo - (serieMinore ? (over31 ? 1.5 : 3) : (over31 ? 3 : 6)))}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥75 {serieMinore ? (over31 ? "-1.5" : "-3") : (over31 ? "-3" : "-6")}
                </button>

                <button 
                  onClick={()=> setSaldo(saldo - (serieMinore ? (over31 ? 3 : 4.5) : (over31 ? 6 : 9)))}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥80 {serieMinore ? (over31 ? "-3" : "-4.5") : (over31 ? "-6" : "-9")}
                </button>
                <button 
                  onClick={()=> setSaldo(saldo - (serieMinore ? (over31 ? 4.5 : 6) : (over31 ? 9 : 12)))}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥85 {serieMinore ? (over31 ? "-4.5" : "-6") : (over31 ? "-9" : "-12")}
                </button>
                <button 
                  onClick={()=> setSaldo(saldo - (serieMinore ? (over31 ? 6 : 7.5) : (over31 ? 12 : 15)))}
                  className="cursor-pointer mr-6 mb-3 rounded-full p-3 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800"
                >
                  ≥90 {serieMinore ? (over31 ? "-6" : "-7.5") : (over31 ? "-12" : "-15")}
                </button>
              </div>

              <div className="flex justify-center mb-4">
                {/* TOGGLE OVER 31 */}
                <div className="ml-4">
                  <label className="inline-flex relative items-center cursor-pointer mt-1.5 ml-6">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={over31}
                      onChange={(e) => setOver31(e.target.checked)}
                    />
                    <div 
                        className="w-11 h-6 bg-gray-600 rounded-full 
                                  peer-checked:after:translate-x-2.5 xl:peer-checked:after:translate-x-full 
                                  lg:peer-checked:after:translate-x-full md:peer-checked:after:translate-x-full
                                  peer-checked:after:border-white after:content-[''] after:absolute
                                  xl:after:top-0.5 lg:after:top-0.5 md:after:top-0.5 after:top-2.5
                                  after:left-[2px] after:bg-white after:border-gray-300 
                                  after:rounded-full after:h-5 after:w-5 after:transition-all 
                                  peer-checked:bg-green-600"
                    >
                    </div>
                    <span className="ml-3 text-sm font-medium text-white">
                      Over 31
                    </span>
                  </label>
                </div>

                {/* TOGGLE SERIE MINORE */}
                  <div className="ml-4">
                  <label className="inline-flex relative items-center cursor-pointer mt-1.5 ml-6">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={serieMinore}
                      onChange={(e) => setSerieMinore(e.target.checked)}
                    />
                    <div 
                        className="w-11 h-6 bg-gray-600 rounded-full 
                                  peer-checked:after:translate-x-2.5 xl:peer-checked:after:translate-x-full 
                                  lg:peer-checked:after:translate-x-full md:peer-checked:after:translate-x-full
                                  peer-checked:after:border-white after:content-[''] after:absolute
                                  xl:after:top-0.5 lg:after:top-0.5 md:after:top-0.5 after:top-2.5
                                  after:left-[2px] after:bg-white after:border-gray-300 
                                  after:rounded-full after:h-5 after:w-5 after:transition-all 
                                  peer-checked:bg-green-600"
                    >
                    </div>
                    <span className="ml-3 text-sm font-medium text-white">
                      Serie Minore
                    </span>
                  </label>
                </div>
              </div>



          </div>
          
        </div>

        {/* TREND PRESTAZIONI */}
        <div className="flex justify-center items-center mt-4">
          <div className="border border-gray-900 rounded-2xl mx-4">
            <div className="flex justify-center items-center m-4">
              <h1 className="text-xl mr-3">
                Trend Prestazioni 
              </h1>
            </div>

            <div className="flex justify-center items-center ml-8 mb-8">

                <button 
                  onClick={()=> setSaldo(saldo - 1)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center"
                >
                  <TfiBolt size={24}/>
                  Serie Negativa -1
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 1)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center"
                >
                  <GiAmericanShield size={24}/>
                  Serie Positiva +1
                </button>
            </div>

          </div>
        </div>

        {/* PIAZZAMENTO CAMPIONATO */}
        <div className="flex justify-center items-center mt-4">
          <div className="border border-gray-900 rounded-2xl mx-3">
            <div className="flex justify-center items-center m-4">
              <h1 className="text-xl mr-3">
                Piazzamento Campionato 
              </h1>
            </div>

            <div 
                className="grid xl:grid-cols-9 lg:grid-cols-9 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 
                            justify-center mb-4 mx-6 items-center"
            >

                <button 
                  onClick={()=> setSaldo(saldo + 9)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaListOl size={24} className="mb-1"/>
                  2° +9
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 6)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaListOl size={24} className="mb-1"/>
                  3° +6
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 5)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaListUl size={24} className="mb-1"/>
                  4° +5
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 4)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaListUl size={24} className="mb-1"/>
                  5° +4
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 3)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaListUl size={24} className="mb-1"/>
                  6° +3
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 1)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaListUl size={24} className="mb-1"/>
                  7° +1
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 5)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <BiFootball size={24} className="mb-1"/>
                  Goal +5
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 3)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <GiConverseShoe size={24} className="mb-1"/>
                  Assist +3
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 2)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <GiBoltSpellCast size={24} className="mb-1"/>
                  Portiere +2
                </button>
            </div>

          </div>
        </div>

        {/* TROFEI */}
        <div className="flex justify-center items-center mt-4">
          <div className="border border-gray-900 rounded-2xl mx-3">
            <div className="flex justify-center items-center m-4">
              <h1 className="text-xl mr-3">
                Trofei Conquistati 
              </h1>
            </div>

            <div 
                className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 
                            justify-center mb-4 mx-6 items-center"
            >

                <button 
                  onClick={()=> setSaldo(saldo + 10)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <FaTrophy size={24} className="mb-1"/>
                  Coppa Nazionale +10
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 18)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <ImTrophy size={24} className="mb-1"/>
                  Scudetto +18
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 30)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2" 
                >
                  <GiTrophy size={24} className="mb-1"/>
                  Champions League +30
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 20)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <RiTrophyFill size={24} className="mb-1"/>
                  Europa League +20
                </button>

                <button 
                  onClick={()=> setSaldo(saldo + 15)}
                  className="cursor-pointer mr-8 rounded-full p-4 border 
                            border-gray-800 bg-gray-900 hover:bg-gray-800
                            flex flex-col items-center mb-2"
                >
                  <GiLaurelsTrophy size={24} className="mb-1"/>
                  Conference League +15
                </button>
            </div>

          </div>
        </div>

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
      
              </div>
      </div>
    </div>
  )
}

export default SaldoPunti;