'use client';

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter(); // สร้าง object router เพื่อใช้ฟังก์ชัน push ไปหน้า dashboard
    return (
       <button type="button" onClick={() => 
        router.push("/dashboard")}>
            Dashboard
       </button>
    );
}