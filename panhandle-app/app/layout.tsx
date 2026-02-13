import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PanHandle — Investment Education & Analytics',
  description: 'Investment education and analytics for college students and early investors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
