"use client"
import React, { useState } from "react";

const AddToList = () => {
    const [inputVal, setInputval] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputval(event.target.value);
    };
    const handleAddToList = () => {
        console.log(inputVal);
        setInputval('');
     };
    
    return (
        <>
         <div className="container-fluid">
            <div className="container">
                <input type="text" value={inputVal} onChange={handleInputChange} placeholder="Enter the Task"/>&nbsp;<button className="btn btn-primary" onClick={handleAddToList}>AddTolist</button>
            </div>
         </div>
        </>
    )
} 
export default AddToList;