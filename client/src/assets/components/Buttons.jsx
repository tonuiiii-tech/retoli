import React from 'react'
import  {Link}  from "react-router";
const Buttons = () => {
  return (
    <div> 
        {/* Landing Buttons */}
          <div className="mt-8 flex justify-center gap-4">
        
        {/* Sign In Link */}
        <Link 
          to="/sign-in" 
          className="rounded-lg border-2 border-blue-600 px-6 py-2.5 font-semibold text-blue-600 inline-block text-center"
        >
          Sign In
        </Link>

        {/* Sign Up Link */}
        <Link 
          to="/sign-up" 
          className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow inline-block text-center"
        >
          Sign Up
        </Link>

      </div>
  </div>
  )
}
export  default Buttons