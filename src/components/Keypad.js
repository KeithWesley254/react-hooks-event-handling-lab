// Code Keypad Component Here
import React from "react";

function Keypad(){
    function formSubmit(e){
        e.preventDefault();
    }
    function keyChange(){
        console.log(`Entering password...`);
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input name="" type="password" onChange={keyChange}/>
            </form>
        </div>
    )
}

export default Keypad;