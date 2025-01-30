import React from 'react';
import Brainiac1 from './project_images/Brainiac1.png'
import Brainiac2 from './project_images/Brainiac2.png'
import Brainiac3 from './project_images/Brainiac3.png'
import './projects.css'


function BrainiacProject(){

    return(
        <div class="projectsDiv">
          <div class="planetDiv">
            <button type="button" class="btn btn-primary planet" id="brainiacPlanet" data-bs-toggle="modal" data-bs-target="#brainiacModal">
            <p class="h4">Brainiac</p>
            </button>
        </div>
        <div class="modal fade" id="brainiacModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Brainiac</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div class="modal-body" id='brainiac_body'>
            <p>
                Brainiac is a trivia game app where a user can test his/her knowledge 
                across a variety of different trivia game categories with three different 
                levels of difficulty. By creating an account, each one of a user's finished 
                games will automatically be saved to the Brainiac database, allowing for 
                stats to be tracked and organized for the user. Once logged in, the user can setup the game in the 
                game settings menu, allowing for the user to choose difficulty, number of questions, 
                category, and type of questions. Scoring is based off of trivia game difficulty level. 
                Easy questions are worth 1 point, medium 2 points and hard is worth 3 points.

                The back-end for Brainiac was built using Express with Node.js and is being hosted on Render. 
                The front-end was built using React, specifically using Create React APP. Each directory 
                (front-end and back-end) has its own package.json for organization purposes.
                </p>
                <h5>Technology used:</h5>
                <p>
                Node | Express | Javascript | PSQL | React | Bootstrap | CSS
                </p>
              <div class="project_images">
                <div><img src={Brainiac1} width={200}height={200}px /> </div>
                  <div><img src={Brainiac2} width={200}height={200}px /> </div>
                    <div> <img src={Brainiac3} width={200}height={200}px /> </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href='https://github.com/MoMoney75/Braniac' target='_blank'><button type="button" class="btn btn-primary">  Github </button> </a>
        <a href='https://brainiac.surge.sh/' target='_blank'><button type="button" class="btn btn-primary">  Try it! </button> </a>
      </div>
    </div>
  </div>
</div>
       
        </div>
    )
}

export default BrainiacProject;