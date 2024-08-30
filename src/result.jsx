import React from "react";

function Result({secreteNum,term}){
    let result;
    if(term){

    
    if(term > secreteNum){
        result="Higher"

    }
    else if(term < secreteNum){
        result="Lower"
    }
    else if(term == secreteNum){
        result="Yah!! correct"
    }
    else{
        result="Enter valid input"
    }
    }
     return <h2>YOU GUESS:{result}</h2>
}

export default Result;