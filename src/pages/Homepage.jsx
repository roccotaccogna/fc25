import { Link } from "react-router-dom";
import logo from "../images/logo.png";

import { GiSoccerKick } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";
import { IoIosTrendingDown } from "react-icons/io";
import { CgAirplane } from "react-icons/cg";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { CgAlignBottom } from "react-icons/cg";
import { PiListPlusBold } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";

function Homepage() {
  return (
        <div>
          {/* LOGO */}
          <div className="flex justify-center mt-20">
            <img 
              src={logo} 
              alt=""
              className="w-72" 
            />
          </div>
    
          <div className="mt-8 gap-12 grid grid-cols-3">
            
            {/* PREPARTITA */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 ml-4 bg-sky-950 hover:bg-sky-900"
            >
             <Link to="/prepartita">
              <div className="flex flex-col items-center justify-center h-32">
                
                <GiSoccerKick size={52} className="mb-2"/>
                <button className="cursor-pointer">
                  Prepartita
                </button>
              </div>
             </Link>        
            </div>
    
            {/* SETTIMANALE */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 bg-sky-950 hover:bg-sky-900"
            >
             <Link to="/settimanale">            
              <div className="flex flex-col items-center justify-center h-32">
                <GiSoccerField  size={52} className="mb-2"/>
                <button>
                  Settimanale
                </button>
              </div>
              </Link>
            </div>
    
            {/* SERIE NEGATIVA */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 bg-sky-950 hover:bg-sky-900"
            >         
             <Link to="/serienegativa">
              <div className="flex flex-col items-center justify-center h-32">
                <IoIosTrendingDown size={52} className="mb-2"/>
                <button>
                  Serie Negativa
                </button>
              </div> 
             </Link>  
            </div>
    
            {/* INGAGGIO */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 ml-4 bg-sky-950 hover:bg-sky-900"
            >        
             <Link to="/ingaggio">  
              <div className="flex flex-col items-center justify-center h-32">
                <GiCommercialAirplane size={52} className="mb-2"/>
                <button>
                  Ingaggio
                </button>
              </div> 
             </Link> 
            </div>
    
            {/* MERCATO */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 bg-sky-950 hover:bg-sky-900"
            >    
             <Link to="/mercato">
              <div className="flex flex-col items-center justify-center h-32">
                <MdOutlineEuroSymbol size={52} className="mb-2"/>
                <button>
                  Mercato
                </button>
              </div> 
             </Link> 
            </div>
    
            {/* SALDO PUNTI */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 bg-sky-950 hover:bg-sky-900"
            >   
             <Link to="/saldopunti">      
              <div className="flex flex-col items-center justify-center h-32">
                <CgAlignBottom size={52} className="mb-2"/>
                <button>
                  Saldo Punti
                </button>
              </div> 
             </Link>  
            </div>

            {/* BONUS */}
            <div 
              className="border-1 rounded-xl p-4 cursor-pointer 
                         mr-4 ml-4 bg-teal-900 hover:bg-teal-800"
            >   
             <Link to="/bonus">      
              <div className="flex flex-col items-center justify-center h-32">
                <PiListPlusBold size={52} className="mb-2"/>
                <button>
                  Bonus
                </button>
              </div> 
             </Link>  
            </div>
    
          </div>
        </div>
  )
}

export default Homepage;