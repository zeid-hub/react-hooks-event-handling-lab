// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    function clickFn(focus, blur) {
       if (focus) {
        console.log('Good');
       }else{
        console.log('Hey! Eyes on me!');
       }
    }
    return (
       <button onClick={ clickFn([0], [1]) }>'Eyes on me'</button>
    )
}
export default EyesOnMe