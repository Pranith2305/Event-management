import React, { useEffect, useState } from "react"
import Button from "../Components/Button"
import Input from "../Components/Input"
import EventCard from "../Components/EventCard"
import api from "../Services/api"

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
  {
    id: "3",
    name: "Food & Wine Expo",
    image: "/placeholder.svg?height=300&width=400",
    date: "September 10, 2023",
    location: "Expo Hall, Chicago",
  },
  {
    id: "4",
    name: "Art Gallery Opening",
    image: "/placeholder.svg?height=300&width=400",
    date: "October 1, 2023",
    location: "Downtown Gallery, LA",
  },
]

const Home = () => {
  const[events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try { 
        const responce = await api.get('/events');
        setEvents(responce.data);
      }
      catch(error) {
        console.log('error fetching events', error);
      }
    } 

    fetchEvents();
  }, [])
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to EventVerse</h1>
          <p className="text-xl mb-8">Discover and join amazing events near you</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="text" placeholder="Search events..." value="" onChange={() => {}} className="flex-grow" />
            <Button>Search</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Event Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Concerts", "Workshops", "Sports", "Arts"].map((category) => (
              <Button key={category} variant="secondary" className="w-full">
                {category}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(events && events.length > 0? events: dummyEvents).map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

