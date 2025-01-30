import React from 'react'
import profilePhoto from './profile_photo.jpeg';
import './intro.css'
function Intro(){
return(
    <div>
        <div className='container-fluid' id='introDiv'>
        <div id='profileImg'>
        <img src={profilePhoto}  width={200} height={200}/>
        </div>
        <h1 class='h3'>
            Hello, My name is Mauricio Silva,
            I am a Full Stack Developer from South Florida. Let's connect and explore how
            we can bring your vision to life!
        </h1>
    </div>

    </div>
)
}

export default Intro;