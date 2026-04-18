import React from 'react'
import Header from './header'

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
    </article>
  )
}

export default LayoutMain