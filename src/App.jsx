import React from "react"

const App = () => {
  let x = "raman"
  console.log(x)
  const changeuser = () => {
    x="vaishnavi"
    console.log(x)


  }
  return (
    <div> 
   
    <h1>Hello {x}</h1>
    <button onClick = {changeuser} > change user </button>
  
    </div>
  )
}

export default App