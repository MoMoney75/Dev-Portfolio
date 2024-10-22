import './App.css';
import Intro from './Intro';
import NavBar from './Navbar';
import About from './About';
import CocktailProject from './Cocktail_project';
import BrainiacProject from './Braniac_project';
import JoblyProject from './Jobly_project';
import Technology from './Technology';

function App() {
  return (
    <div>
       <NavBar />

       <div className='container-fluid'>
        <Intro />
        <About />
        <Technology />
       <div id="projectHeader"> <p class="h1"> Projects </p></div>

        <div id="mainProjectDiv">

            <CocktailProject />
          
            <BrainiacProject />

            <JoblyProject />
       </div>

       </div>
    </div>
  );
}

export default App;
