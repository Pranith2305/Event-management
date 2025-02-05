import React from "react"
import { useParams } from "react-router-dom"
import Button from "../Components/Button"

const dummyEvent = {
  id: "1",
  name: "Summer Music Festival",
  image: "/placeholder.svg?height=400&width=800",
  date: "July 15, 2023",
  location: "Central Park, NY",
  description:
    "Join us for a day of amazing music performances featuring top artists from around the world. Food and drinks will be available.",
  ticketOptions: [
    { name: "General Admission", price: 50 },
    { name: "VIP", price: 150 },
  ],
}

const EventDetails  = () => {
  const { id } = useParams()

  // In a real app, you'd fetch the event details based on the ID
  const event = dummyEvent

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.name}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-4">
            {event.date} | {event.location}
          </p>
          <p className="mb-6">{event.description}</p>
          <h2 className="text-xl font-semibold mb-4">Ticket Options</h2>
          <div className="space-y-4">
            {event.ticketOptions.map((option) => (
              <div key={option.name} className="flex justify-between items-center">
                <span>{option.name}</span>
                <Button>${option.price} - Buy Now</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails

