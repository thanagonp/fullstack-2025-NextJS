'use client';

import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0); // สร้าง state ชื่อ count และฟังก์ชัน setCount สำหรับเปลี่ยนค่า count

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}