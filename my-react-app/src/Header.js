import React from 'react'

const Header = () => {
  
  const headerstyle={backgroundColor:'red',color:'white'}
 
  const handclick = ()=>{
    console.log('thanks for click')
  }
  return (
    <div>Header
      <header style={headerstyle}>
      <h1>To do list</h1>
      </header>
      <button onClick={handclick}>click</button>
        
    </div>
  )
}

export default Header