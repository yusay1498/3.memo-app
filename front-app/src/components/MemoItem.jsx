import React from 'react';

function MemoItem({ memo, onDelete }) {
    return (
        <li className="memo-item">
            <span className="memo-text">{memo.text}</span>
            <button className="button" onClick={() => onDelete(memo.id)}>Delete</button>
        </li>
    );
}

export default MemoItem;