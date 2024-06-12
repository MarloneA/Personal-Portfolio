export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      {children}
    </main>
  );
}
