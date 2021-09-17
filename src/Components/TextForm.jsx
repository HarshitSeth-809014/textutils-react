/* eslint-disable no-empty-character-class */
import React, { useState } from 'react'

const TextForm = ({ heading }) => {

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" placeholder="Enter the text here" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={() => setText(text.toUpperCase())}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setText(text.toLowerCase())}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setText('')}>Clear Text</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setText(text.trim())}>Trim Whitespaces</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => navigator.clipboard.writeText(document.getElementById('myBox').value)}>Copy Text</button> 
                </div>
            </div>

            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{(0.0032 * text.split(" ").length).toFixed(2)} minutes to read</p>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
