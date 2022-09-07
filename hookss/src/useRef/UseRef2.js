import React from 'react'
import {useRef} from 'react'

const UseRef2 = () => {
   const ele={}; // [] //useRef([] or {})
  //  we can use Array or Object for storing multiple useref  
  new Array(10).fill(0).map((e,i)=>ele[i]=React.createRef(null));
//   we can cret euseref an stoe into array and we can use that  
   const info=()=>{
   
  console.log(ele)

    ele[3].current.focus();
  

    }
  
    return (
    <>
   {
    new Array(10).fill(0).map((e,i)=>{
    return  <input type={"text"} key="1"  value={i}  ref={ele[i]} />   
     
        })
 
   }
     
       
    
    <button onClick={()=>{info()}} > get the Data info  </button>
    </>
  )
}

export default UseRef2