import { useRef } from "react";

function UseRef1() {
  const inputElement = useRef();
  const para=useRef();
  const focusInput = () => {
   const ele= inputElement.current; // This is return input element   
   ele.focus(); // we can peform anything we want 
    console.log(ele)  
  const par=para.current;
  par.style.color="red";
  // par.innerHTML="0987654321";
  par.innerText="0987654321";
  
    console.log("paragraph ",par)
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <p ref={para}  >Ajay kumar verma</p>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default UseRef1;
