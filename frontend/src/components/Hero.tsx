import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FeatureGrid } from "./FeatureGrid";
import axios from "axios";

export function Hero() {
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const filePath = "aislydes/slides.md";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/get-response", {
        prompt,
        filePath,
        folder: "aislydes",
      });

      const checkStatus = async () => {
        const statusResponse = await axios.get(
          `http://localhost:3000/response-status/${response.data.requestId}`
        );

        if (statusResponse.data.status === "completed") {
          setSubmitted(true);
          setLoading(false);
          // Trigger download after successful request
          window.location.href = "http://localhost:3000/download-slides";
        } else if (statusResponse.data.status === "failed") {
          setError(statusResponse.data.error);
          setLoading(false);
        } else {
          setTimeout(checkStatus, 1000);
        }
      };

      checkStatus();
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Create Stunning Presentations with AI
          <span className="block text-blue-500">AISlides</span>
          Made Easy
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          AISlides is an AI-powered presentation maker that helps you create
          stunning presentations in minutes. Perfect for businesses, educators,
          and individuals.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center disabled:opacity-50"
            >
              {loading ? "Processing..." : "Edit File"}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        ) : (
          <p className="text-white text-lg mb-8">
            File downloaded successfully!
          </p>
        )}

        {error && <p className="text-red-500 mb-8">Error: {error}</p>}

        <div className="flex items-center space-x-8">
          <div className="flex -space-x-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
              className="w-10 h-10 rounded-full border-2 border-blue-900"
              alt="User"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
              className="w-10 h-10 rounded-full border-2 border-blue-900"
              alt="User"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              className="w-10 h-10 rounded-full border-2 border-blue-900"
              alt="User"
            />
          </div>
          <p className="text-gray-400">
            <span className="text-white font-bold">1000+</span> companies trust
            us
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
        <div className="relative bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
          <FeatureGrid />
        </div>
      </div>
    </div>
  );
}

export default Hero;
