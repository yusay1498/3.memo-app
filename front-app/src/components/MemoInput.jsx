import React, { useState } from 'react';

function MemoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    // `not-empty`クラスを条件によって追加する
    const inputClass = text ? 'input not-empty' : 'input';

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <input
                    className={inputClass}
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                />
                <label className="label">Memo</label>
                <button className="button" type="submit">Add</button>
            </div>
        </form>
    );
}

export default MemoInput;