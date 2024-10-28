"use client"
import React, { useEffect, useState } from "react";

const AddToList = () => {
    const [inputVal, setInputval] = useState("");
    const [dataList, setDataList] = useState<string[]>([]);

    useEffect(() => {
        const savedData = localStorage.getItem('localData');
        if (savedData) {
            setDataList(JSON.parse(savedData));
        }
    }, []);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputval(event.target.value);
    };
    const handleAddToList = () => {
        console.log(inputVal);
        setDataList([...dataList, inputVal]);
        const data =  JSON.stringify(dataList);
        localStorage.setItem('localData', data);
        setInputval('');
     };
 
     useEffect(() => {
        localStorage.setItem('localData', JSON.stringify(dataList));
    }, [dataList]);


    return (
        <>
         <div className="container-fluid">
            <div className="container">
                <input type="text" value={inputVal} onChange={handleInputChange} placeholder="Enter the Task"/>&nbsp;<button className="btn btn-primary" onClick={handleAddToList}>AddTolist</button>
                <ul>
                        {dataList.map((item, index) => (
                            <li key={index}>{item} &nbsp;<button className="btn btn-primary">Edit</button>&nbsp;<button className="btn btn-danger">Delete</button></li>
                        ))}
                    </ul>
            </div>
         </div>
        </>
    )
} 
export default AddToList;