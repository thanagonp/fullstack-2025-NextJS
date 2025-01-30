'use client';

import { useState } from 'react';

export default function DropdownList(){
    const [selected, setSelected] = useState('Java');

    const handleSelected = (e: any) => setSelected(e.target.value);

    return (
        <>
            <div>DropdownList</div>
            <select value={selected} onChange={handleSelected}>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
            </select>
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