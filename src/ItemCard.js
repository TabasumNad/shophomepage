import React from 'react';
import {useCart} from "react-use-cart"



const ItemCard = (props) => {
//const [addtocart,setAddtocart]=useState(0);
    const {addItem}=useCart();


    return (

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">

    <div class="card p-0 overflow-hidden h-100 shadow">
  <img src={props.img} class="image card-img-top img-fluid"   />

  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.rating}</p>
    <p class="card-text"><del>{props.oldp}</del> {props.price}</p>
    
      
    <button  class="button-opt btn btn-outline-secondary " onClick={()=>addItem(props.item)}> {props.button}</button>
    
  </div>
</div>    

  </div>
       
    );

    // function Add(){
    //   return(
        
    //   )

    // }
};

export default ItemCard;