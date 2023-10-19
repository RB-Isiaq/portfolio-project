import './globals.scss';
import type { Metadata } from 'next';
import { Inter, Poppins, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Isiaq Ridwan Bukola's Portfolio",
  description: 'A ReactJS frontend developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} ${dm_sans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
