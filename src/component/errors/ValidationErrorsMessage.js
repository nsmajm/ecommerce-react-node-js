import React from 'react'

const ValidationErrorsMessage = ({error}) => {
    return (
        <div className="error">
           {error}
        </div>
    )
}

export default ValidationErrorsMessage
