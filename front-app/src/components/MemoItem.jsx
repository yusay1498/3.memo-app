import React from 'react';

function MemoItem({ memo, onDelete }) {
    return (
        <li>
            {memo.text}
            <button onClick={() => onDelete(memo.id)}>Delete</button>
        </li>
    );
}

export default MemoItem;