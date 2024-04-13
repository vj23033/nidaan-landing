import React from 'react'
import Button from '../components/UI/Button'

const BestServices = () => {
  return (
    <>
      <div className='flex sm:flex-row flex-col-reverse sm:px-[120px] px-[16px] justify-center sm:gap-[48px] gap-[40px] sm:py-[70px]'>
        <div className='relative max-w-[80%] self-center'>
          <img src="./badge.png" alt="badge" className='absolute top-[-5%] left-[-5%] hidden sm:block' />
          <img src='./best_service.png' alt='best_service' />
        </div>
        <div className='flex flex-col sm:py-[40px]'>

          <p className='bg-[color:var(--light-grayish-blue)] text-[#201D49] sm:text-[16px] leading-[24px] font-medium py-[10px] px-[15px] max-w-fit rounded-[100px] sm:mx-0 mx-auto'>Our Best services</p>
          <h1 className='py-[20px] text-[length:var(--heading-h3)] font-bold'>Who can use our Products</h1>
          <p className='text-[#71717A] sm:text-[length:var(--md-text)]'>Experience the value of NidaanHMS with our transparent pricing plans tailored to suit hospitals of all sizes.</p>

          <ul className='flex flex-col gap-[20px] py-[20px]'>

            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <img src='./check-circle.png' alt="Checkmark" />
              </span>
              Small Clinics or laboratories
            </li>

            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <img src='./check-circle.png' alt="Checkmark" />
              </span>
              Small Clinics or laboratories
            </li>

            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <img src='./check-circle.png' alt="Checkmark" />
              </span>
              Small Clinics or laboratories
            </li>

          </ul>

          <span className='sm:self-auto self-center'>
            <Button bg={"purpleGradient"} text={"white"} >Check Pricing</Button>
          </span>

        </div>
      </div>



    </>
  )
}

export default BestServices





