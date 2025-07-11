import React from 'react'
// Functoin component
export default function FuncComp(props:any) {
  return (
    <div>
        <h2>Function component demo</h2>
        <hr/>
        <p>My name is, {props.name}</p>
        <p>Compony: {props.company}</p>
    </div>
  )
}
