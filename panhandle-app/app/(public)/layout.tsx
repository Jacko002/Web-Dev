import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-14">{children}</main>
      <Footer />
    </>
  );
}
