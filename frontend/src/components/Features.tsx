import React from "react";
import { FileText, Palette, Image } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI-powered Presentation Maker",
    description:
      "Create stunning presentations in minutes with our AI-powered tool",
  },
  {
    icon: Palette,
    title: "Customizable Templates",
    description: "Choose from a variety of templates to fit your needs",
  },
  {
    icon: Image,
    title: "Image and Video Support",
    description:
      "Add images and videos to make your presentations more engaging",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Powerful Features for Modern Workforce
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to manage attendance efficiently and effectively
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition"
          >
            <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
