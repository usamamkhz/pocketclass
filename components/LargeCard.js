import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

function LargeCard({ img, title, description, buttonText }) {
  const router = useRouter();
  return <section className='relative py-16 cursor-pointer'>
    <div className='relative h-96 min-w-[300px]'>
      <Image src={img} layout='fill' objectFit='cover' unoptimized
        className='rounded-2xl' />
    </div>

    <div className='absolute top-32 left-12'>
      <h3 className='text-4xl mb-3 w-64'>{title}</h3>
      <p>{description}</p>

      <button onClick={() => router.push('/Login')} className='text-sm text-white bg-red-500 px-4 py-2 rounded-lg mt-5 hover:shadow-2xl active:scale-90 transition duration-150 hover:scale-105 transition transform duration-200 ease-out'>{buttonText}</button>
    </div>
  </section>
}

export default LargeCard