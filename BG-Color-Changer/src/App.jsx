import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("gold")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <h1 style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:"3rem",height:"100vh"}}>
        Change Background Color</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 px-2 py-3 shadow-lg bg-white rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red",cursor:"pointer"}}>Red</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"yellow",cursor:"pointer"}}>Yellow</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"green",cursor:"pointer"}}>Green</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"orange",cursor:"pointer"}}>Orange</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"pink",cursor:"pointer"}}>Pink</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"purple",cursor:"pointer"}}>Purple</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"blue",cursor:"pointer"}}>Blue</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"white",cursor:"pointer"}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App