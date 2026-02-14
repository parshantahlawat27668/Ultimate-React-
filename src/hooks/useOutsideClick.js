import { useEffect, useRef } from "react";

export function useOutsideClick(handler){
const ref = useRef();
  
  
  useEffect(()=>{
    const handleClick = (e)=>{
      if(ref.current && !ref.current.contains(e.target)){
        handler();
      }
    }
    // document.addEventListener("mousedown", handleClick);
    
    // second way to fix problem third argiument , we can handle event in capturing face 
    document.addEventListener("click", handleClick, true);

    // return ()=> document.removeEventListener("mousedown",handleClick);

    // second way to fix problem third argiument , we can handle event in capturing face 
    return ()=> document.removeEventListener("click",handleClick, true);
  },[handler]);

  return ref;
}