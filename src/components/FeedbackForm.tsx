"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the feedback to your backend or service
  }

  if (submitted) {
    return <div className="p-4 text-green-700">Thank you for your feedback!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Feedback form">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">Name (optional)</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium mb-1">Email (optional)</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="feedback" className="block font-medium mb-1">Your Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Submit</button>
    </form>
  );
}
