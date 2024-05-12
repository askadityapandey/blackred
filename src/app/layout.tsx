export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Blackred</title>
      </head>
      <body style={{ backgroundColor: '#000000' }}>{children}</body>
    </html>
  );
}