'use client';

import { useState } from 'react';

export default function Radio(){
    const [selected, setSelected] = useState('Java');

    const handleSelected = (e: any) => setSelected(e.target.value);

    return (
        <>
            <div>Radio</div>
            <input 
            type="radio" 
            value="Java"
            checked={selected === 'Java'} 
            onChange={handleSelected} />{" "} Java

            <input
            type="radio"
            value="Python"
            checked={selected === 'Python'}
            onChange={handleSelected} />{" "} Python

            <input
            type="radio"
            value="Javascript"
            checked={selected === 'Javascript'}
            onChange={handleSelected} />{" "} Javascript

            <div>
                <div>
                    Your Selected item:
                </div>
                <div>
                    {selected}
                </div>
            </div>
        </>
    );
}