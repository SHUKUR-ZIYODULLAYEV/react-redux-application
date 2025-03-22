import React from 'react'

function Input({type, id, placeholder, label, state, setState}) {
  return (
    <div className="form-floating">
        <input type={type} value={state} onChange={e => setState(e.target.value)} className="form-control" id={id} placeholder={placeholder}/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input
