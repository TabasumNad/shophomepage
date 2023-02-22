import React from 'react';
import './App.css';
import Card1 from './Card1';
import {CartProvider} from "react-use-cart";
import Cart from './Cart';



function App() {
  return (
<CartProvider>
    <div className="App">
      {/* Navbar */}
      <div>
      <nav class="nav-height navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand ms-5 ps-5" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">All Product</a></li>
            <hr/>
            <li><a class="dropdown-item" href="#">Popular Items </a></li>
            <li><a class="dropdown-item" href="#">New Arrival</a></li>
          </ul>
        </li>
      </ul>
    </div>


    
    {/* cart button */}
    <div>
    <Cart></Cart>
    </div>
  </div>
</nav>

    
      </div >
      <div className="title-background">

     
        <h1 className="top-color">Shop in style</h1>
        <h4 className="sub-top-color">With this shop homepage template</h4>
      
      </div>
      
    
      <div className="cards">
      {/* <Add/> */}

        <Card1/>
        </div>
      </div>

   {/* <!-- Footer--> */}

<footer class="py-5 bg-dark">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer>
{/* <!-- Bootstrap core JS--> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
{/* <!-- Core theme JS--> */}
      
      </CartProvider>
      
   
   );
    


}


export default App;
