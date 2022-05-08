import React,{useState} from 'react'
import Show from './Show';

function Notes() {
    const [name,setName]=useState("")
    const [data,setData]=useState([]);

const handleSubmt = (e) =>{
   e.preventDefault();
   const newdata = name;
   setData([...data,newdata]) 
   console.log(newdata)
   setName("")
}

const handleChange = (e)=>{
    setName(e.target.value)
}
const itemDelet =(a)=>{
 const final = data.filter((curEle,index)=>{
     return index !== a;
 })
 setData(final);
 }
  return (
    <>
    <div>
      <form onSubmit={handleSubmt}>
          <h1>Enter Your Today's Task: </h1>
          <input value={name} onChange={handleChange}/>
          <button>submit</button>
      </form> <hr/>
      <div>
          <h2>Task List</h2>
          {data.map((value,index)=>{
               return(
                   <Show 
                   key={index}
                   id={index}
                   name={value}
                   onSelect={itemDelet}/>
               )
          })}
      </div>
    </div>
    </>
  )
}

export default Notes
