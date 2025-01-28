export default function BlogPage({ params }: { 
    params: { 
        slug: string 
    } 
}) {
    return <div>blog page {params.slug}</div>
}