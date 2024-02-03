// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    function clickFn(focus, blur) {
        console.log('Good');
        console.log('Hey!Eyes on me!');
       
    }
    return (
       <button onClick={ clickFn }>'Eyes on me'</button>
    )
}
export default EyesOnMe