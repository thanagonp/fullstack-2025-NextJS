'use client';

import { useState } from "react";

export default function ClientComponent(){
    const [items] = useState(['java', 'python', 'javascript', 'c++', 'c#']);

    return (
        <div>
            <div>Client Component Page</div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}