import React from 'react'

// function Greet(){
//     return <h1> hellow Skoll</h1>
// }

// es6
// functional components
const Greet=(props)=>{
   return (
       <div>
           <h1>Hellow {props.name} a.k.a {props.fname}</h1>
           {props.children}
       </div>
   )   
}
export default Greet