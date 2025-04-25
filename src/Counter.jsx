import React,{useState} from "react";

function Counter(){
      const [count,setCount]=useState(0);
     
    function increment(){
        setCount(count+1)
    }
    function decrement(){
       if(count>0){
        setCount(count-1)
       }
    }
    return(

        <>
        <div style={{textAlign:"center", marginTop:"100px", backgroundColor:"lightblue", padding:"50px", borderRadius:"20px"}}>
        <h1 style={{}}>Counter Example</h1>
        <h2>Counter: {count}</h2>
        <button onClick={increment} style={{padding:"10px", borderRadius:"30px"}}>Increment</button>
        <button onClick={decrement} style={{padding:"10px" , borderRadius:"30px"}}>Decrement</button>
        </div>
        </>
    )
}

export default Counter;