//rafce
import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header/>
      <div className='mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'350px'} height={'250px'} src="https://picsum.photos/200/300" alt="image" />
          <div>
            <h3 className="font-bold">PID : id</h3>
            <h1 className="text-5xl font-bold">Title</h1>
            <h4 className="font-bold text-red-600 text-2xl">$250</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default View