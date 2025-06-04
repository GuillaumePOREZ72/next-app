export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Marketing Nav</nav>
      {children}
    </section>
  );
}
