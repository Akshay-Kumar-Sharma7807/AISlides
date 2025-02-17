import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-transparent">
      <h1 className="text-4xl font-bold text-white mb-4">About AISlides</h1>
      <p className="text-lg text-white mb-2">
        AISlides is an AI-powered presentation maker that helps you create
        stunning presentations in minutes.
      </p>
      <p className="text-lg text-white mb-2">
        Our mission is to make presentation creation easy, fast, and fun for
        everyone.
      </p>
      <p className="text-lg text-white">
        We believe in the power of AI to transform the way we work and
        communicate.
      </p>
    </div>
  );
};

export default AboutUs;
