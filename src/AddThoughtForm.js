import React, { useEffect, useRef, useState } from 'react';

export function AddThoughtForm(props) {
    const [text, setText] = useState('')

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleTextChange = ({ target }) => {
        const { value } = target
        setText(value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addThought(text)
        setText('')
    }
    return (
        <form onSubmit={handleSubmit} className="AddThoughtForm">
            <input
                ref={inputRef}
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
}
