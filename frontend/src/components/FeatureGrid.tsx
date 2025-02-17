import React from "react";
import { FileText, Palette, Image, Share } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI-powered Presentation Maker",
    description: "Create stunning presentations in minutes",
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
  {
    icon: Share,
    title: "Easy Sharing",
    description: "Share your presentations with others in just a few clicks",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-900/50 p-6 rounded-xl">
          <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureGrid;
