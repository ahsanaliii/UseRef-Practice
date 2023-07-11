import { useEffect, useReducer, useRef ,useState} from 'react'
import './App.css'
import Props from './Props';

// const initialState = 0 ; 
// const reducer = (state , action) => {
//   console.log(state , action)
//   return state
// }


  let fname = "ahsan";
function App() {
  let input = useRef();


  function focusinput(){
    input.current.focus();
    if(input.current.value.trim() !== 0){
      console.log(input.current.value)
    }else{
      console.log("input field cannot be empty. ")
    }
    input.current.value = ""
  }

  return (
    <>
    <input type="text" ref={input} />
    <button onClick={focusinput}>Show</button>
    <Props name={fname} size={"300 meter long"}></Props>
    </>
  )
  }
export default App
