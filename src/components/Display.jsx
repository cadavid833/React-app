import React,{useState} from 'react'

const Display = () => {
    const [contador,setContador] = useState(0)
  return (
    <>
        <h2 id="numero">{contador}</h2>
        <div>
            <button onClick={()=>setContador(contador-1)}>v</button>
            <button onClick={()=>setContador(0)}>Reset</button>
            <button onClick={()=>setContador(contador+1)}>ʌ</button>
        </div>
    </>
  )
}

export default Display