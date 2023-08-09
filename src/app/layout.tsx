import { Providers } from '@/store/provider';
import './globals.css';
import type { Metadata } from 'next';
import ToastProvider from '@/common/ToastProvider';
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';
import { SFPro } from './fonts';

export const metadata: Metadata = {
  title: 'A1Quest',
  description: 'Learn challenging maths topics and take tests to assess your knowledge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={SFPro.className}>
        <Providers>
          <ToastProvider>{children}</ToastProvider>
        </Providers>
        <div id='modals' />
      </body>
    </html>
  );
}
