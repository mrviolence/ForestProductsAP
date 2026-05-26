import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forest Supplies - Premium Timber & Forest Products',
  description: 'Premium timber poles, firewood, and sustainable forest products. Tree planting services, nursery beds, and forest management solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
