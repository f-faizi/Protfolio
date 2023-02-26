import React from 'react'
import pic1 from '../assets/project2.png'
import pic2 from '../assets/project2.png'
import pic3 from '../assets/project2.png'
import pic4 from '../assets/project2.png'
import pic5 from '../assets/project2.png'
import pic6 from '../assets/project2.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: pic1
        },
        {
            id: 2,
            src: pic2
        },
        {
            id: 3,
            src: pic3
        },
        {
            id: 4,
            src: pic4
        },
        {
            id: 5,
            src: pic5
        },
        {
            id: 6,
            src: pic6
        }
    ];


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:max-h-full'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-12'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0'>
                    {
                        portfolios.map(({id,src}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200' >Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200'>Code</button>
                        </div>
                        </div>
                        ))
                    }
                </div>
        </div>
    </div>
  )
}

export default Portfolio