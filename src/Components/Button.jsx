import React from "react"

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-colors duration-200"
  const variantClasses =
    variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

