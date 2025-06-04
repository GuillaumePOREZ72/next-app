export default function BlogPostPage({ params }: { params: { name: string } }) {
  return <h1>Blog Post: {params.name}</h1>;
}
