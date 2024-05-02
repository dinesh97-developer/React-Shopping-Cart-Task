import React, { useState,useEffect} from 'react';
import { data } from './component/Data';
import { Banner } from './component/Banner';
import { Navigation } from './component/Navigation';
import { Footer } from './component/Footer';
import { Cards } from './component/Cards';

function App(){

  const[cartValue,setCartValue]=useState(0);
  const[cardItems,setCardItems]=useState([])

  useEffect(() => {
    setCardItems(data)
  },[]);


 function handleCart(Items){
    if(Items.added){
        setCartValue(prevstate=> prevstate+1);
        let  cardItem =[...cardItems]
        const index = cardItem.indexOf(Items)
        cardItem[index].added=!(cardItem[index].added)
        // setCardItems(cardItems)                   
    }
    else {
      setCartValue(prevstate=> prevstate-1)
      let  cardItem =[...cardItems]
      console.log(cardItem)
      const index = cardItem.indexOf(Items)
      cardItem[index].added=!(cardItem[index].added)                     
      }
}

  return(

    
    <div className="App">
     <Navigation cartValue = {cartValue}/>
     <Banner/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {cardItems.map(Items =>
     <Cards
        handleCart={()=>handleCart(Items)}
        key={Items.id}
        value={cartValue}
        items={Items}/>
     )}
        </div>
      </div>
    </section>   
     <Footer />

    </div>
  )
}

export default App



