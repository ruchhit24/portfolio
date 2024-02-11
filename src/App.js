import About from "./components/About";
import Contact from "./components/Contact";
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
       <Contact/>

        <SocialLinks/>
       </>
  );
}

export default App;
