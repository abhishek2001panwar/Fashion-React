import React, { useState } from 'react'

function Login() {
    const [showSignup, setShowSignup] = useState(false);

  return (
    <>
    
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
      </form>
      <p className="mt-4 text-gray-600 text-sm">Don't have an account? <button onClick={() => setShowSignup(true)} className="text-blue-500 hover:text-blue-700 focus:outline-none">Sign Up</button></p>

      {showSignup && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <form >
            <div className="mb-4">
              <label htmlFor="signup-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="signup-email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="mb-4">
              <label htmlFor="signup-password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" name="signup-password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="mb-6">
              <label htmlFor="signup-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="signup-name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">Already have an account? <button onClick={() => setShowSignup(false)} className="text-blue-500 hover:text-blue-700 focus:outline-none">Login</button></p>
        </div>
      )}
    </div>
    </>
  )
}

export default Login