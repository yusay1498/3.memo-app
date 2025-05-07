import React, { useState, useEffect } from 'react';
import MemoInput from '../components/MemoInput';
import MemoList from '../components/MemoList';
import titleImg from '../assets/images/memo.png';

function App() {
    const [memos, setMemos] = useState(() => {
        const savedMemos = localStorage.getItem('memos');
        return savedMemos ? JSON.parse(savedMemos) : [];
    });

    useEffect(() => {
        localStorage.setItem('memos', JSON.stringify(memos));
    }, [memos]);

    const addMemo = (text) => {
        setMemos([...memos, { text, id: Date.now() }]);
    };

    const deleteMemo = (id) => {
        setMemos(memos.filter(memo => memo.id !== id));
    };

    return (
        <div className="wrap">
            <header id="header">
                <img className="title" src={titleImg} alt="memo app title" />
            </header>
            <MemoInput onAdd={addMemo} />
            <MemoList memos={memos} onDelete={deleteMemo} />
        </div>
    );
}

export default App;