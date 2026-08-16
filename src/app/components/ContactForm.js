"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Clé utilisée:", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

  try {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log("Réponse Web3Forms:", data);

  if (data.success) {
    setResult("Message envoyé avec succès !");
    event.target.reset();
  } else {
    setResult("Une erreur est survenue. Réessaie.");
  }
} catch (error) {
  console.error("Erreur détaillée:", error);
  setResult("Une erreur est survenue. Réessaie.");
} finally {
  setIsSubmitting(false); // ← doit être là
}
  };

  const inputClass =
    "w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-600 py-2 focus:outline-none focus:border-[#a78bfa] transition-colors";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-white text-xs tracking-[0.15em] font-semibold mb-2">
          NAME
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-white text-xs tracking-[0.15em] font-semibold mb-2">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-white text-xs tracking-[0.15em] font-semibold mb-2">
          SUBJECT
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Project Inquiry"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-white text-xs tracking-[0.15em] font-semibold mb-2">
          MESSAGE
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          required
          rows={3}
          className={`${inputClass} resize-none`}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start bg-[#a78bfa] text-black text-sm font-semibold tracking-[0.1em] px-6 py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"} {!isSubmitting && "▶"}
      </button>

      {result && <p className="text-gray-400 text-sm">{result}</p>}
    </form>
  );
}