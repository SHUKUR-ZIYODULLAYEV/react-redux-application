import React from 'react'

function TextArea({type, id, placeholder, label, state, setState, height = '100px'}) {
  return (
    <div className="form-floating">
        <textarea style={{height: height}} type={type} value={state} onChange={e => setState(e.target.value)} className="form-control" id={id} placeholder={placeholder}/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default TextArea
