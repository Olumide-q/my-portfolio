import React from 'react'
import icon from '../assets/icon/Vector (2).svg'


const PortfolioCardBox = ({myPortfolio}) => {
  return (
    <div className='shadow pb-5 rounded-sm '>
        <img className='rounded-sm' src={myPortfolio.image} alt="" />
        <div className='flex flex-col gap-4 px-6 py-6'>
            <h1 className='font-semibold text-2xl'>{myPortfolio.name}</h1>
            <p className='text-sm'>{myPortfolio.desc}</p>
           <div className='flex flex-row gap-4'>
           <a className='font-semibold text-sm  ' href={myPortfolio.link} target="_blank">{myPortfolio.view}</a>
           <img className='w-[10px]' src={icon} alt="" />
           </div>
           <hr className='w-[40%] border border-blue-500 -mt-2' />
            
        </div>
       
      
    </div>
  )
}

export default PortfolioCardBox
