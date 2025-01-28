'use client';

import { useSearchParams } from "next/navigation";

export default function Page() {

    const searchParams = useSearchParams(); // สร้าง object searchParams เพื่อใช้ฟังก์ชัน set ค่า query ใหม่

    const name = searchParams.get("name");  

    return (
        <div>
            Name = {name}
        </div>
    );
}