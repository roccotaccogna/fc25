import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Prepartita from "./pages/Prepartita";
import Settimanale from "./pages/Settimanale";
import SerieNegativa from "./pages/SerieNegativa";
import Ingaggio from "./pages/Ingaggio";
import Mercato from "./pages/Mercato";
import SaldoPunti from "./pages/SaldoPunti";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prepartita" element={<Prepartita />} />
        <Route path="/settimanale" element={<Settimanale />} />
        <Route path="/serienegativa" element={<SerieNegativa />} />
        <Route path="/ingaggio" element={<Ingaggio />} />
        <Route path="/mercato" element={<Mercato />} />
        <Route path="/saldopunti" element={<SaldoPunti />} />
      </Routes>
    </Router>
  )
}

export default App;
