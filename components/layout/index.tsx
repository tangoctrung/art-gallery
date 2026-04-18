import React from 'react'
import Header from './header'
import Footer from './footer';
import FloatButton from './float-button';

function LayoutMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className='w-full bg-black min-h-svh'>
      <Header />
      <div>
        {children}
      </div>
      <FloatButton />
      <Footer />
    </article>
  )
}

export default LayoutMain
