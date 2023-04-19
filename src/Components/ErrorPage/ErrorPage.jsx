
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Lottie from 'lottie-react'
import reader from '../../assets/error.json'
const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       <Lottie className='w-96 h-96' animationData={reader} loop={true}></Lottie>
        <div className=' text-center'>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage