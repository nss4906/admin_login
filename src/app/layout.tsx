import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Apparel Production Studio | Advanced AI Fashion Photography & Mockups',
  description: 'Turn your apparel reference images into high-fidelity studio fashion photography, e-commerce packs, social assets, and smart product mockups.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090a0f] text-gray-100 min-h-screen antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
