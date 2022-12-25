import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
    <Route exact path="/home" element={Home}/>
    <Route exact path="/about" element={About}/>
  </Routes> */}
        <Navbar />
        <Home/>
        <About/>
        <Contact/>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
    // <div className="App">

    //   <Router>
    //     {/* <ScrollToTop/> */}
    //     <Navbar/>
    //       <Routes>
    //         <Route exact path="/" element={<Home/>}/>
    //         <Route exact path="/about" element={<About/>}/>
    //         {/* <Route exact path="/projects" element={<Projects/>}/> */}
    //         {/* <Route exact path="/contact" element={<Contact/>}/> */}
    //       </Routes>
    //     <Footer/>
    //   </Router>
    // </div>
  );
}

export default App;
