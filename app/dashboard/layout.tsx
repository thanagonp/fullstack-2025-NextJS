export default function DashboardLayout({ children }: { 
    children: React.ReactNode 
}) {
    return <section>
        <nav>
            Next web site
        </nav>
        {children}
    </section>
}