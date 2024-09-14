import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {Routes, Route}  from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Detail/:id" element={<Detail/>}/>
              <Route path="/Favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
