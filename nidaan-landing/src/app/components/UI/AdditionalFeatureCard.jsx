import React from 'react'

const AdditionalFeatureCard = ({ title, description, image , classNames }) => {
  return ( 

    
<div className="max-w-sm rounded-lg border border-black flex sm:flex-col flex-row items-center sm:px-[30px] px-[16px] py-[22px] gap-[20px]">
    <img className="sm:w-full sm:h-[119px] sm:aspect-video h-[50px] aspect-square " src={image} alt={title} />
    <div className="sm:text-center text-left">
        <h3 className="font-bold text-[length:var(--lg-text)] mb-2 text-[#3C359E] sm:text-[#344054]">{title}</h3>
        <p className="text-gray-700 text-[length:var(--sm-text)]">
            {description}
        </p>
    </div>
</div>
    
  )
}

export default AdditionalFeatureCard