import React from 'react'

const TestimonialCard = ({ avatar, name, role, remarks }) => {
  return (
    <div className='flex flex-col gap-[20px] sm:max-w-[320px] px-[20px] py-[30px] rounded-[15px] box_shadow '>
        <span className='flex gap-[10px]'>
            <img src={avatar} alt="profile" width={40} height={40} className='rounded-full' />
            <span className='flex flex-col justify-between'>
                <p className='font-bold'>{name}</p>
                <p className='text-[length:var(--sm-text)] text-[color:var(--grey)]'>{role}</p>
            </span>
        </span>
        <p className='text-[color:var(--dark-grey)]'>"{remarks}"</p>
    </div>
  )
}

export default TestimonialCard