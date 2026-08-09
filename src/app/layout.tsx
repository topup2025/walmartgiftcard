import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-[#0d1117] antialiased">
        {children}
      </body>
    </html>
  );
}
