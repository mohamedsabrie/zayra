import './globals.css';
import { volkhov, poppins, jost } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} ${jost.variable}   flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <div className='flex-1 container'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
