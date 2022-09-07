import React from 'react'
import {useRef} from 'react'

const UseRef2 = () => {
   const ele=useRef([]);

  new Array(10).fill(0).map((e,i)=>ele.current[i]=React.createRef(null));
//   we can cret euseref an stoe into array and we can use that  
   const info=()=>{
   
      console.log(ele.current)

    ele.current[3].current.focus();
  

    }
  
    return (
    <>
   {
    new Array(10).fill(0).map((e,i)=>{
    return  <input type={"text"} key="1"  value={i}  ref={ele.current[i]} />   
     
        })
 
   }
     
       
    
    <button onClick={()=>{info()}} > get the Data info  </button>
    </>
  )
}

export default UseRef2