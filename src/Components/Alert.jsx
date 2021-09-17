import React from 'react'

const Alert = ({alert}) => {
    const capitalize = (word) => {
        return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    }

    return (
        alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(alert.type)}</strong> : {alert.msg}
        </div>
    )
}

export default Alert
