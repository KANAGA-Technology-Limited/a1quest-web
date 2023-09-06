import Button from '@/common/Button/Button';
import AppLayout from '@/components/layout/AppLayout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <AppLayout>
      {/* <h1>Hi, Welcome to A1Quest</h1>
      <div className='flex items-center justify-center gap-3'>
        <Link href='/auth/login'>
          <Button>Login</Button>
        </Link>
        <Link href='/auth/register'>
          <Button>Register</Button>
        </Link>
      </div> */}
      Home
    </AppLayout>
  );
}
