import React from 'react'

function ChildComponent(props) {
    return (
        <div>
       {/* <button onClick={props.greetParentHandler}>Greet Parent</button>      */}
       {/* child se parent bhejna hai toh fatarrow ka use hoga */}
       <button onClick={()=>props.greetParentHandler('child')}>Greet Parent</button>     

        </div>
    )
}

export default ChildComponent
