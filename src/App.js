import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technology from "./components/Technology";

 
function App() {
  return (
       <>
        <Navbar/>
        <Home/>
        <About/>
       <Technology/>
       <Projects/>


        <SocialLinks/>
       </>
  );
}

export default App;
