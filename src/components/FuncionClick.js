import React from 'react'

function FunctionClick(){
   function clickHandler(){
    console.log("function Clicked")    

    }
return (
    <div>
    {/* clickHandler() krenege niche toh apnap fire hojayega hume sirf clickHandler krna hai */}
{/* <button onClick={clickHandler()}>Click</button> */}
<button onClick={clickHandler}>Click</button>

    </div>
)
}
export default FunctionClick