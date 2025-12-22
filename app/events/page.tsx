"use client";

import { useState } from "react";
import Image from "next/image";
import { Event } from "@/utils/types";


const initialEvents: Event[] = [
  {
    id: 1,
    name: "Tech Conference 2025",
    description:
      "A large tech conference focusing on web development, AI, and cloud technologies.",
    image: "",
    date: "March 12, 2025",
    upvotes: 0,
  },
  {
    id: 2,
    name: "Music Festival",
    description:
      "An outdoor music festival featuring live bands, food stalls, and fun activities.",
    image: "",
    date: "April 5, 2025",
    upvotes: 0,
  },
  {
    id: 3,
    name: "Startup Meetup",
    description:
      "A meetup for founders and entrepreneurs to network and share ideas.",
    image: "",
    date: "May 20, 2025",
    upvotes: 0,
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const handleUpvote = (id: number) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id
          ? { ...event, upvotes: event.upvotes + 1 }
          : event
      )
    );
  };

  return (
    <div className="min-h-screen bg-black-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Upcoming Events
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full bg-gray-200">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">
                  {event.name}
                </h2>

                <p className="text-sm text-gray-500 mb-2">
                  {event.date}
                </p>

                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                  {event.description}
                </p>

                <button
                  onClick={() => handleUpvote(event.id)}
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  👍 Upvote
                  <span className="text-gray-600">
                    ({event.upvotes})
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
