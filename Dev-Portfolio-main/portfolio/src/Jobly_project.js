import React from 'react';
import JoblyImage from './JoblyImage.png'
import JoblyImage2 from './JoblyImage2.png'
import JoblyImage3 from './JoblyImage3.png'
import './projects.css'


function JoblyProject(){

    return(
        <div class="projectsDiv">
          <div class="planetDiv">
            <button type="button" class="btn btn-primary planet" id="JoblyPlanet" data-bs-toggle="modal" data-bs-target="#JoblyModal">
            <p class="h4">Jobly</p>
            </button>
        </div>
        <div class="modal fade" id="JoblyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Jobly</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div class="modal-body" id='Jobly_body'>
            <p>
                Jobly is a job search application that offers a complete user profile, including profile 
                editing, authentication, and authorization. Once registered, users can browse open positions 
                across various companies and search for jobs by company names. 

                Our Quick Apply feature allows users to apply swiftly, saving valuable time. Applied jobs are 
                marked as "Applied" to prevent duplicate applications for the same position.
                </p>
                <h5>Technology used:</h5>
                <p>
                Node | Express | Javascript | PSQL | React | Bootstrap | CSS | Jest
                </p>
              <div class="project_images">
                <div><img src={JoblyImage} width={200}height={200}px /> </div>
                  <div><img src={JoblyImage2} width={200}height={200}px /> </div>
                    <div> <img src={JoblyImage3} width={200}height={200}px /> </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href='https://github.com/MoMoney75/Jobly-full' target='_blank'><button type="button" class="btn btn-primary">  Github </button> </a>
        <a href='https://jobly-express.surge.sh/' target='_blank'><button type="button" class="btn btn-primary">  Try it! </button> </a>
      </div>
    </div>
  </div>
</div>
       
        </div>
    )
}

export default JoblyProject