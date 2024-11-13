//rafce
import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header/>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img className='ms-40' width={'350px'} height={'250px'} src="https://picsum.photos/200/300" alt="image" />
          <div>
            <h3 className="font-bold">PID : id</h3>
            <h1 className="text-5xl font-bold">Title</h1>
            <h4 className="font-bold text-red-600 text-2xl">$250</h4>
            <h4>Brand : brand</h4>
            <h4>Category : category</h4>
            <p>
              <span className='font-bold'>Description</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi eaque sit soluta ab tenetur repellat deserunt. Voluptatum est iste provident earum magnam. Aspernatur rerum illo iusto dolorem odio fugiat.
            </p>
            <div className="flex justify-between mt-5">
              <button className="bg-blue-600 text-white p-2">ADD TO WHISHLIST</button>
              <button className="bg-green-600 text-white p-2">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View