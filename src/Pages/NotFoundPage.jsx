import React from "react"
import { Link } from "react-router-dom"
import Button from "../Components/Button"

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound

