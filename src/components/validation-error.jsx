import React, { use, useCallback } from 'react'
import { useSelector } from 'react-redux'

function ValidationError() {
    const {error} = useSelector(state => state.auth)
    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const messages = error[name].join(', ')
            return `${name} - ${messages}`
        })
    }, [error])
  return (
    error && errorMessage().map(error => (
        <div className="alert alert-danger m-1 p-1 border border-0" role={error}> {error} </div>
    ))
  )
}

export default ValidationError
