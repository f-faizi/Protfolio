import React from 'react'
import t1 from '../assets/html.png'
import t2 from '../assets/css.png'
import t3 from '../assets/javascript.png'
import t4 from '../assets/mysql.png'
import t5 from '../assets/php.png'
import t6 from '../assets/react.png'
import t7 from '../assets/github.png'
import t8 from '../assets/tailwindcss.png'
const Experience = () => {

    const techs = [
        {
            id: 1,
            src: t1,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: t2,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: t3,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: t4,
            title: 'MySQL',
            style: 'shadow-blue-200'
        },
        {
            id: 5,
            src: t5,
            title: 'php',
            style: 'shadow-blue-900'
        },
        {
            id: 6,
            src: t6,
            title: 'React',
            style: 'shadow-cyan-300'
        },
        {
            id: 7,
            src: t7,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: t8,
            title: 'TailwindCss',
            style: 'shadow-cyan-600'
        }
    ];
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full pb-20 max-h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Experience