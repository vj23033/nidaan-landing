import React from 'react'

const Brands = ({ height, width }) => {
  return (
    <div className='flex justify-between flex-wrap sm:gap-[80px] gap-[30px]'>
        <img src="/brand1.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
        <img src="/brand2.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
        <img src="/brand3.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
        <img src="/brand4.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
    </div>
  )
}

export default Brands