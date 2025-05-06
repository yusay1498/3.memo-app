import React from 'react';
import MemoItem from './MemoItem';

function MemoList({ memos, onDelete }) {
    return (
        <ul>
            {memos.map(memo => (
                <MemoItem key={memo.id} memo={memo} onDelete={onDelete} />
            ))}
        </ul>
    );
}

export default MemoList;