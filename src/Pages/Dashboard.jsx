import React from "react"
import { useState } from "react"
import Button from "../Components/Button"
import EventCard from "../Components/EventCard"

const dummyEvents = [
  {
    id: "1",
    name: "Summer Music Festival",
    image: "/placeholder.svg?height=300&width=400",
    date: "July 15, 2023",
    location: "Central Park, NY",
  },
  {
    id: "2",
    name: "Tech Conference 2023",
    image: "/placeholder.svg?height=300&width=400",
    date: "August 5, 2023",
    location: "Convention Center, SF",
  },
]

const dummyTickets = [
  { id: "1", eventName: "Summer Music Festival", ticketType: "General Admission" },
  { id: "2", eventName: "Tech Conference 2023", ticketType: "VIP" },
]

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="mb-4">
          <Button onClick={() => setIsAdmin(!isAdmin)}>Switch to {isAdmin ? "User" : "Admin"} View</Button>
        </div>
        {isAdmin ? <AdminDashboard /> : <UserDashboard events={dummyEvents} tickets={dummyTickets} />}
      </div>
    </div>
  )
}

const UserDashboard  = ({ events, tickets }) => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Tickets</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.eventName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.ticketType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Events</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dummyEvents.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">{event.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{event.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button variant="secondary" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="secondary">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard

