import { Providers } from '@/store/provider';
import { Mulish } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import ToastProvider from '@/common/ToastProvider';
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';
import { SFPro } from '@/assets/fonts';
import GetUserSession from '@/components/layout/AppLayout/GetUserSession';

// React PDF
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export const metadata: Metadata = {
  title: 'A1Quest',
  description: 'Learn challenging maths topics and take tests to assess your knowledge',
};

const MulishFont = Mulish({
  variable: '--font-mulish',
  weight: ['600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${SFPro.className} ${MulishFont.className}`}>
      <body>
        <Providers>
          <ToastProvider>
            <GetUserSession />
            {children}
          </ToastProvider>
        </Providers>
        <div id='modals' />
      </body>
    </html>
  );
}
