import React from "react";
//import "../component/css/bootstrap.min.css";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
    <a class="navbar-brand text-white" href="#">React checkpoint</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link disabled text-white" href="#">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav> 
  );
}
export default Nav;