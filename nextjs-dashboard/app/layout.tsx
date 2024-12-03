// import '@app/ui/global.css';
import './ui/global.css'; // If you're in the same folder
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
