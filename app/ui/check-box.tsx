'use client';

const { useState } = require('react');

export default function Checkbox(){
    const [javaChecked, setJavaChecked] = useState(false);
    const [pythonChecked, setPythonChecked] = useState(false);
    const [javascriptChecked, setJavascriptChecked] = useState(false);

    const handleJavaChecked = (e: any) => setJavaChecked(e.target.checked);
    const handlePythonChecked = (e: any) => setPythonChecked(e.target.checked);
    const handleJavascriptChecked = (e: any) => setJavascriptChecked(e.target.checked);

    return (
        <div>
            <div>Checkbox</div>
            <input 
            type="checkbox" 
            checked={javaChecked} 
            onChange={handleJavaChecked} />{" "} Java

            <input
            type="checkbox"
            checked={pythonChecked}
            onChange={handlePythonChecked} />{" "} Python

            <input
            type="checkbox"
            checked={javascriptChecked}
            onChange={handleJavascriptChecked} />{" "} Javascript

            <div>
                <div>
                    Your Selected itemss:
                </div>
                <div>
                    {javaChecked && <div>Java</div>}
                    {pythonChecked && <div>Python</div>}
                    {javascriptChecked && <div>Javascript</div>}
                </div>
            </div>
        </div>
    );
}