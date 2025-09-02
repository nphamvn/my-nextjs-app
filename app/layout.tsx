import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js App Router Example',
  description: 'Example combining SSG, ISR, SSR, CSR',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Next.js App</h1>
          <nav>
            <a href="/">Home</a> | <a href="/products/1">Product</a> | <a href="/profile/123">Profile</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
