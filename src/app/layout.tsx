import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Red Hat CoolStore Microservices App',
  description: 'Web UI for the CoolStore Microservices App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="pf-c-page">
          <Header />
          <main role="main" className="pf-c-page__main" tabIndex={-1}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
