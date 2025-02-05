import React from "react"
import { useState } from "react"
import Button from "../Components/Button"
import Input from "../Components/Input"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login/register logic here
    console.log("Submitted:", { email, password })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full">{isLogin ? "Login" : "Register"}</Button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button className="ml-2 text-blue-600 hover:underline" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Auth

