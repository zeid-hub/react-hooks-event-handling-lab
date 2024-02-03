// Code Keypad Component Here
import React from "react";

function Keypad (){

    function changeFn (){
        console.log('Entering password...');
        //return 'Entering password...'
    }
    return (
        <div>
        <input type="password" onChange={ changeFn }/>
        </div>
    )
}

export default Keypad;