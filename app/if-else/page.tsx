'use client';

import { useState } from 'react';

export default function IfElse(){
    const [name, setName] = useState('');

    return (
        <>
            <div>Enter your name:</div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>
                {name ? <div>สวัสดี, {name}!</div> : <div>กรุณากรอกชื่อ</div>}
            </div>
        </>
    );
}