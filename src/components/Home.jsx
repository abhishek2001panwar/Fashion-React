import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="bg-gray-200 py-20 h-screen">
    <div className="container mx-auto px-4 mt-5">
      <div className="flex flex-col lg:flex-row items-center gap-5 justify-center">
        <div className="lg:w-1/2 lg:pr-10 mt-[100px] p-10  text-white-100 bg-zinc-200 rounded-md shadow-xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">Welcome to Our Online Store</h1>
          <p className="text-gray-600 class text-lg mb-8">Discover the latest trends and shop our wide selection of products.</p>
          <div className="flex space-x-4">
            <Link to={'/products'} className="bg-indigo-600 text-white py-3 px-6 rounded-full class uppercase font-semibold text-sm hover:bg-indigo-700 transition duration-300">Shop Now</Link>
            <Link to={'/about'} className="border border-gray-600 text-gray-600 py-3 px-6 class rounded-full uppercase font-semibold text-sm hover:text-white hover:bg-gray-600 transition duration-300">Learn More</Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-[100px]">
          <img className='rounded-lg shadow-md object-cover ' src="https://media.istockphoto.com/id/1484146410/photo/young-friends-complimenting-female-friend-carrying-shopping-bag.jpg?s=612x612&w=0&k=20&c=iHQfCH8qxjPV6CfN2ESCfIfHrfYNAA76NZj6rzjjwyI=" alt="Hero Image" />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Home