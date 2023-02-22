import React from 'react';
import {useCart} from "react-use-cart";

const Cart = () => {
    const { isEmpty,
        totalUniqueitems,
        item,
        totalItems,
        cartTotal,
        removeItem,}= useCart();
    // if (isEmpty) return <button className=" btn btn-outline-dark me-5" type="submit">Cart:({totalItem})<span class="badge bg-dark text-white ms-1 rounded-pill"></span></button>
    return (
        <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
            
    {/* <h5 className=" btn btn-outline-dark me-5" >Cart:({item})<span class="badge bg-dark text-white ms-1 rounded-pill"></span></h5> */}
    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">({totalItems})</span>
                        </button>
                    </form>

            </div>
        </div>
        </section>
    );
};

export default Cart;