import React, { useState } from 'react'

const TextForm = ({ heading }) => {

    const [text, setText] = useState('');

    return (
        <div>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" placeholder="Enter the text here" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={() => setText(text.toUpperCase())}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => setText(text.toLowerCase())}>Convert to Lowercase</button>
            </div>
        </div>
    )
}

export default TextForm
