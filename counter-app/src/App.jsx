
import './App.css'
import { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);

  
  return (
    <div>
        <CustomButton count={count} setCount={setCount}/>
    </div>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return (
    <div>
      <button onClick={onClickHandler}>Counter {props.count}</button>
    </div>
  )
}

export default App
