import React from "react";
import './navbar.css'
function NavBar(){


    return(

      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#aboutDiv">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#techstack">Tech Stack</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#mainProjectDiv">Projects</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="mailto:maudysi12@gmail.com" target="_blank">Email</a></li>
            <li><a class="dropdown-item" href='https://www.linkedin.com/in/mauricio-silva-dazarola/' target="_blank">Linked In</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href='https://github.com/MoMoney75' target="_blank">Github</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )

}

export default NavBar;