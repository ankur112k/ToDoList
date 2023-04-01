import React, { useState } from 'react'
import "./Page.css";

const Page = () => {
    const [inputList , setInputList] = useState();
    const [ items , setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList ];
        })
        setInputList('');
    }

  return (
    <div className="main">
        <div className="center">
            <br />
                <h1>ToDo List</h1>
            <br />
                <input type="text" placeholder='Add Items' onChange={itemEvent} value={inputList}/>
                <button onClick={listOfItem}> + </button>

            <ol>
                {items.map((itemval) => {
                    return <li>{ itemval }</li>
                })}
            </ol>    
        </div>
    </div>
  )
}

export default Page