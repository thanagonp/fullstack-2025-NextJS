export default function Template({ children }: { 
    children: React.ReactNode 
}) {
    return (
        <div>
            <div>Template of Layout</div>
            <div>{children}</div>
        </div>
    )
    }