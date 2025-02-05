import React from "react"
import { useNavigate } from "react-router-dom"

const EventCard = ({ id, name, image, date, location }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/event/${id}`)} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-1">{date}</p>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard

