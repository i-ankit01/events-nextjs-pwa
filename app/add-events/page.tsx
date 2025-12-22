"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function AddEventPage() {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
    };

    try {
      const supabase = await createClient();
      const { error } = await supabase.from("events").insert(data).single();
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log("Error occured while inserting event", error);
    } finally {
      setLoading(false);
    }

    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black rounded-lg shadow-md p-6"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">Add Event</h1>

        {/* Event Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Event Name</label>
          <input
            type="text"
            required
            name="name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event name"
          />
        </div>

        {/* Event Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Event Description
          </label>
          <textarea
            required
            name="description"
            rows={4}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the event"
          />
        </div>

        {/* Event Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Event Image</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            className="w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          {isLoading ? "Adding Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
}
