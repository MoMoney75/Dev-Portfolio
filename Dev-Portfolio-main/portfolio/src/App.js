import './App.css';
import Intro from './Intro';
import NavBar from './Navbar';
import About from './About';
import Technology from './Technology';
import Projects from './Projects';

function App() {
  return (
    <div>
       <NavBar />

       <div className='container-fluid'>
        <Intro />
        <About />
        <Technology />
        <div id="projectHeader"> 
        <h1 class="h1"> Projects </h1>
        <Projects />
        </div>

        
     
            


       </div>
    </div>
  );
}

export default App;
