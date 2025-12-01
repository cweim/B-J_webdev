import type { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Azure Depths Dive Centre | Courses, Fun Dives, and Trips',
  description:
    'Book dive courses, guided boat dives, and specialty training with Azure Depths Dive Centre. Small groups, pro guides, and clear tropical water.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary-dark text-white">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
