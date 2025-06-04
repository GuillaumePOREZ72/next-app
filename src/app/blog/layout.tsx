export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>Blog Nav</nav>
      {children}
    </section>
  );
}
