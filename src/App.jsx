import { useState } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Navigation} from "./component/Navigation";
import {Header} from './component/Header';
import {Section} from "./component/Section";
import {Footer} from "./component/Footer";

function App(){

    // let [value, setValue] = useState(false)
    // let [cartCount,setCartcount] = useState(0)

    // console.log(cartCount);
    // let cartValue = () =>{
    //     console.log(value);
    //     setValue(!value)
    //     if(value)
    //         {
    //             setCartcount(event => event-1)
    //         //console.log("if condition working")
    //         }
    //     else
    //         {
    //             setCartcount(event => event+1)
    //         //console.log("else condition working")
    //         }
    // }

    

  return<>
        <Navigation />
        <Header />
        <Section />
        <Footer />
       
  </>
}

export default App