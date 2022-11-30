import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { EditImages } from "./pages/EditImages";
import { NavBar } from "./components/Navbar"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="">
      <header className="my-3">
       <NavBar />
      </header>
      <body>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/edit' element={<EditImages />}/>
      </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
