import Button from '@/common/Button/Button';
import Link from 'next/link';
import React from 'react';

const AboutDescription = () => {
  return (
    <div className='md:flex-[48%] bg-[#3C3C3C] rounded-2xl p-5 md:p-10 flex flex-col text-center md:text-left items-center md:items-start'>
      <h1 className='text-white text-[35px] md:text-[45px] lg:text-[60px] font-extrabold mb-6'>
        About us
      </h1>
      <p className='text-[#F0F0F0] font-normal mb-10'>
        Our mission is to revolutionize mathematics education for students, parents and
        teachers.
        <br />
        <br />
        At A1 Quest, we believe that every student deserves the ability to excel in
        mathematics; this belief led us to developing a solution that simplifies the
        learning processes of maths and provides students with an experience that keeps
        them engaged and continuously seeking for more knowledge. Through technology, we
        aim to help parents and teachers equip their children and students with the tools
        necessary to secure their future, where they can tap into and enhance their
        abilities.
        <br />
        <br />
        As part of our mission to revolutionize mathematics, we have developed learning
        modules tailored towards the different stages of students/learners in their
        academic journeys. Mathematics is applied to almost every aspect of life and we
        want to make sure that all students/learners have a great head start to their
        aspirations.
      </p>
      <Link href='/auth/register'>
        <Button className='!text-primary !bg-white'>Get Started</Button>
      </Link>
    </div>
  );
};

export default AboutDescription;
