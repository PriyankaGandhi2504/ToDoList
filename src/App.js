import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [textInput, setTextInput] = useState('')
  const [toDoItems, setToDoItems] = useState([])

  function handleInputChange(event){
    setTextInput(event.target.value)
  }

  function addButton(e){
    toDoItems.push({
      label : textInput,
      isDone : false
    })
    setToDoItems(toDoItems)
    setTextInput('')
    e.preventDefault()
  }

  function handleCheckbox(e, index){
    if(e.target.value === 'false'){
      const tempItem = [...toDoItems]
      tempItem[index] = {
        label : tempItem[index].label,
        isDone : !tempItem[index].isDone
      }
      setToDoItems(tempItem)
    }
  }

  return (
    <div className="main">
      <div className="container">
        <h1> To Do List </h1>
        <div className='subContainer'>
          <input className='textInput' 
          type='text' 
          placeholder='Enter Items' 
          value = {textInput}
          onChange={handleInputChange}
          /> 
          <button className='addButton'
          onClick = {addButton}
          disabled = {!textInput}>
            Add
          </button>
        </div>

        <div className='listWrapper'>
            {
              toDoItems.map((item, index) => {
                return (
                <div className={item.isDone ? 'listItems completedTask' : 'listItems'}>
                    <input type='checkbox' value={item.isDone} checked={item.isDone} onChange={(e)=>handleCheckbox(e, index)}/>
                    <label> {item.label} </label>
                </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default App;