import "./App.css";

import { Route, Routes} from "react-router-dom";
import Home from "./Components/NetflixHome/Home";

import EntryPage from "./Components/EntryPage";
import TvShow from "./Components/NetflixHome/TvShow";

function App() {
  return (
    <>
     
   
      <Routes>
        <Route path="/" element={<EntryPage/>} />
        <Route path="/home" Component={Home} />
        <Route path="/TvShow" Component={TvShow} />
      
      </Routes>

    </>
  );
}

export default App;
