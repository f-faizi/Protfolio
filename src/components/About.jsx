import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
                <p className='text-xl mt-7'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aperiam nostrum consequuntur eos veritatis corporis repellendus, recusandae asperiores libero itaque doloribus. Animi quidem nihil, aliquid aliquam beatae voluptatibus odit nisi eum consectetur natus distinctio tempore quaerat quos repellendus minus expedita totam molestiae ipsam fuga voluptates aut. In itaque debitis qui.
                </p>
                <br />
                <p className='text-xl mb-20'>
                    Assumenda officiis similique omnis, quasi eius alias deserunt enim labore illum dolorum! Ullam placeat quam sapiente illo magni velit enim fuga? Esse minima delectus distinctio aspernatur quos ab sunt eligendi vel quasi alias veniam assumenda accusamus corporis sint, impedit magni possimus eaque.
                </p>
        </div>
    </div>
  )
}

export default About