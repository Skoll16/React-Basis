import React from 'react'
import './Style.css'
function StyleSheet(props) {
    let property=props.property?"primary":""
    return (
        <div>
            <h1 className={property}>StyleSheet</h1>
        </div>
    )
}
export default StyleSheet
