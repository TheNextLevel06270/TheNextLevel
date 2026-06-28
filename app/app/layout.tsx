export const metadata = {
  title: "The Next Level - Villeneuve-Loubet",
  description: "Réservation en ligne pour The Next Level à Villeneuve-Loubet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
