export default function ServerComponentPage() {

    const items = ['java' , 'python' , 'javascript' , 'c++' , 'c#'];

    return (
        <div>
            <div>Server Component Page</div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div> 
    );
}