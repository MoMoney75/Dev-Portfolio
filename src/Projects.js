import JoblyProject from "./Jobly_project";
import BrainiacProject from "./Braniac_project";
import CocktailProject from "./Cocktail_project";

function Projects(){

    return(
        <div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col"> <CocktailProject /> </div>
    <div class="col"> <BrainiacProject /> </div>
    <div class="col">  <JoblyProject /> </div>

  </div>
</div>
    )
};

export default Projects;