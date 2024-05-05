import React from 'react';
import Cocktail2 from './project_images/Cocktail2.png'
import Cocktail3 from './project_images/Cocktail3.png'
import Cocktail4 from './project_images/Cocktail4.png'
import './projects.css'

function CocktailProject(){

    return(
        <div class="projectsDiv">
          <div class="planetDiv">
                <button type="button" class="btn btn-primary planet"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <p class="h4">Cocktail Finder</p>
              </button>
          </div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" id='modal-dialog' >
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Cocktail Finder</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                <div class="modal-body" >
                <p>
                    A Flask app where a user creates an account
                    and then will have access to submit a simple form that 
                    contains a list of ingredients(up to 3 ingredients at a time) that they 
                    already have in their home. The app will return a list of cocktails that contain 
                    those ingridients, providing the recipe for the user to make the cocktail at home.
                    Additionally, the user can add and remove cocktails from their "favorites" tab for
                    quick access later in the future
                </p>
              <div>
                <h5>Technology used:</h5>
                <p>
                Python | Flask | Jinja | SQLAlchemy | PSQL |
                </p>
            </div>
              <div class="project_images">
                <div><img src={Cocktail2} /> </div>
                <div><img src={Cocktail3} /> </div>
                <div><img src={Cocktail4} /> </div>
              </div>
              </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href='https://github.com/MoMoney75/Cocktail_finder/tree/main' target='_b'><button type="button" class="btn btn-primary">  Github </button> </a>
        <a href=' https://cocktail-finder.onrender.com/' target='_b'><button type="button" class="btn btn-primary">  Try it! </button> </a>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default CocktailProject;