import React from 'react'
import {Product, HeroBanner, FooterBanner } from './components'
import { client  } from './lib/client'
export const revalidate = 0 /// change this to 3600 for production


const query = '*[_type == "product"]';
const bannerQuery = '*[_type == "banner"]';


const Home = async () => {
  const bannerData = await client.fetch(bannerQuery,)
  const products = await client.fetch(query) 

 

 

 
console.log({products})


  return (
   <>
    <HeroBanner heroBanner={bannerData?.length && bannerData[0]}/>
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
    {products?.map((product)=>(
      <Product key={product._id} product={product}/>
    ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
   </>
  )
}



export default Home