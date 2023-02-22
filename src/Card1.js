import React from 'react';

import ItemCard from './ItemCard';
import data1 from './data1';


const Card1 = () => {
  return (
    
    <>
    {/* <div>
          
        </div> */}
      <section className="py-4 container" >
        <div className="row justify-content-center">
          {data1.element.map((item,index)=>{
            return(
              <ItemCard 
              img={item.img} 
              title={item.title} 
              rating={item.rating} 
              oldp={item.oldp} 
              price={item.price} 
              button={item.button}
              item={item} 
              key={index}
              />
            )

          })}
    
     

        </div>

      </section>
    </>
  );
};

export default Card1;
