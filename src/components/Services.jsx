import React from 'react'

function Services() {
  return (
    <section className="bg-gray-200 py-20 h-screen overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mt-[13vh]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-zinc-200 text-white-200 p-8 rounded-lg  shadow-2xl">
            <div className="text-gray-800 bg-zinc-300 rounded-lg shadow-xl text-2xl font-semibold mb-4">Fast Shipping</div>
            <p className="text-gray-600 leading-none">Our shipping service guarantees prompt and reliable delivery, ensuring your orders arrive swiftly and securely to your doorstep every time.</p>
          </div>
          <div className="bg-zinc-200 text-white-200 p-8 rounded-lg shadow-2xl">
            <div className="text-gray-800 bg-zinc-300 rounded-lg shadow-xl text-2xl font-semibold mb-4">Customer Support</div>
            <p className="text-gray-600 leading-none">Our 24/7 customer support ensures assistance around the clock, offering timely help and solutions to address any queries or concerns you may have.</p>
          </div>
          <div className="bg-zinc-200 text-white-200 p-8 rounded-lg shadow-2xl">
            <div className="text-gray-800 bg-zinc-300 rounded-lg shadow-xl text-2xl font-semibold mb-4">Easy Returns</div>
            <p className="text-gray-600 leading-none">Our hassle-free return policy ensures a seamless process for returning items, providing ease and convenience to our valued customers for a worry-free shopping experience.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services