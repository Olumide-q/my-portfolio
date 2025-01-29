import React from 'react'
import PortfolioCardBox from '../reusable/PortfolioCardBox'
import { portfolioCard } from '../Db'

const PortfolioCard = () => {
  return (
    <div className='px-10 py-27'>
      <div className='flex flex-col lg:flex-row justify-between w-full mx-auto my-15 gap-4'>
      <div className='flex flex-col gap-4'>
        <h6 className='font-semibold text-sm'>Recent Projects</h6>
        <h1 className='font-semibold text-3xl'>My Portfolio</h1>
      </div>
     <button className='bg-[#7E69D3] flex flex-row items-center gap-1 py-4 px-5 lg:px-3 rounded-md text-white'>
     <span><img src="/src/assets/images/Vector (1).svg" alt="" /></span>
      Visit My GitHub</button>
      </div>
     <div className='flex flex-col lg:flex-row gap-7'>
     {portfolioCard.map((port)=>{
            return(
                <div key={port.id}>
                    <PortfolioCardBox myPortfolio={port}/>
                </div>
            )
        })
        }
     </div>
    </div>
  )
}

export default PortfolioCard
